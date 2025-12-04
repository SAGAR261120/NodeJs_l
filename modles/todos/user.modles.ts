import type { password } from 'bun'
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
    userName: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
     password: {
        type: String,
        require: [true , 'password is required'],
        unique: true,
    },
    isActive: Boolean
},
{timestamps:true}
)

export const user = mongoose.model("User", userSchema)