const mongoose = require('mongoose');
const roomTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
const RoomType = mongoose.model('RoomType', roomTypeSchema);

// Export the model
module.exports = RoomType;