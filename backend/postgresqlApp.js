
const express = require('express');
const { createServer } = require('http');
const { ApolloServer } = require('apollo-server-express');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { execute, subscribe } = require('graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const { sequelize, testConnection } = require('./database/connection');
const Hotel = require('./models/hotel');
const userRoutes = require('./routes/userRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const roomRoutes = require('./routes/roomRoutes');
const roomTypeRoutes = require('./routes/roomTypeRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

async function startServer() {
  const app = express();

  // Middleware to parse JSON bodies
  app.use(express.json());

  // Test database connection
  await testConnection();

  // Create HTTP server
  const httpServer = createServer(app);

  // Handle HTTP requests
  app.use('/api/users', userRoutes);
  app.use('/api/hotels', hotelRoutes);
  app.use('/api/rooms', roomRoutes);
  app.use('/api/roomTypes', roomTypeRoutes);
  app.use('/api/bookings', bookingRoutes);

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const apolloServer = new ApolloServer({
    schema,
    context: () => ({
      Hotel,
    }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  // Create WebSocket server
  const wsServer = new SubscriptionServer({
    execute,
    subscribe,
    schema,
  }, {
    server: httpServer,
    path: apolloServer.graphqlPath,
  });

  // Function to send recent hotel prices to clients
  async function sendRecentHotelPrices(ws) {
    try {
      const recentHotelPrices = await Hotel.findAll();
      ws.send(JSON.stringify(recentHotelPrices));
    } catch (error) {
      console.error('Error sending recent hotel prices:', error);
    }
  }

  // WebSocket connection handler
  wsServer.onConnect = async (connectionParams, ws) => {
    console.log('Client connected to WebSocket');

    // Send initial hotel prices when a client connects
    await sendRecentHotelPrices(ws);

    // Handle client disconnect
    ws.onClose(() => {
      console.log('Client disconnected from WebSocket');
    });
  };

  // Start HTTP server
  const PORT = process.env.PORT || 4000;
  httpServer.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}${apolloServer.graphqlPath}`);
  });
}

startServer();
