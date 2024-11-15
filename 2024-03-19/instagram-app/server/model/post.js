import { Schema, model } from 'mongoose';
import Like from './like.js';

// ORM - Object Oriented Modeling

const postSchema = new Schema({
    photo: {
        type: String,
        maxLength: 80,
        required: true
    },
    description: {
        type: String,
        maxLength: 2200
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    created_at: {
        type: Date,
        // Reikšmės pagal nutylėjimą priskyrimas, jei ši nėra siunčiama
        default: new Date()
    }
},
{
toJSON: {
    virtuals :true
}

});


// Įtraukti prie duom, kur gauname, 'likes' - nurodom, kad pasiimsim bendrą skaičių likes 
postSchema.virtual('likes', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'post',
    count: true,
});

const post = model('Post', postSchema);

export default post;