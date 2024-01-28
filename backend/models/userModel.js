import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },

    email: {
        type: 'string',
        required: true,
        unique: true
    },
    
    password: {
        type: 'string',
        required: true
    },
    
    isAdmin: {
        type: 'boolean',
        required: true,
        default: false
    }
}, { timestamps: true });

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', userSchema);