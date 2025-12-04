import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        addressLine1: {
            type: String,
            require: true,
        },
        addressLine2: {
            type: String,
            require: true,
        },
        mobileNumber: {
            type: Number,
            require: true,
        },
        pinCode: {
            type: String,
            require: true,
        },
        specializedIn: [{
            type: String,
            require: true,
        }]
    }, { timestamps: true }
)

export const Hospital = mongoose.model("Hospital", hospitalSchema)