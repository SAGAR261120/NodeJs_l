import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        productImage: {
            type: String,
        },
        price: {
            type: Number,
            default: 0
        },
        stock: {
            type: Number,
            default: 0
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            require: true
        },
        proOwner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true
        }

    }, {
    timestamps: true
}
)

export const Product = mongoose.model("Product", productSchema)