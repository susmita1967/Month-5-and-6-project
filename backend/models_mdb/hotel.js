const mongoose = require('mongoose');
const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
const Hotel = mongoose.model('Hotel', hotelSchema);

// Export the model
module.exports = Hotel;