import mongoose, { Schema } from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            require: true
        },
        complete: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            }
        ]
    }, { timestamps: true }
)

export const todos = mongoose.model("Todo", todoSchema)