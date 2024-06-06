
const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true
    },
    roomTypeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RoomType',
        required: true
    },
    number: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
const Room = mongoose.model('Room', roomSchema);

module.exports = Room;