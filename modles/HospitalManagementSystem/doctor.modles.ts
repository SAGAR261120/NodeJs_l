import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        salary: {
            type: String,
            require: true,
        },
        qualification: {
            type: String,
            require: true,
        },
        experianceInYear: {
            type: Number,
            default: 0,
        },
        worksInHospital:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        }]
    }, { timestamps: true }
)

export const Doctor = mongoose.model("Doctor", doctorSchema)