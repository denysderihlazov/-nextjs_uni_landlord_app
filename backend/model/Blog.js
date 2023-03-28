import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref:"User",
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    beds: {
        type: String,
        required: true,
    },
    squareMeters: {
        type: String,
        required: true,
    },
    rooms: {
        type: String,
        required: true,
    },
    bathrooms: {
        type: String,
        required: true,
    },
    garagePlaces: {
        type: String,
        required: true,
    }
});


export default mongoose.model("Blog", blogSchema);
