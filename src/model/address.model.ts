import mongoose from "mongoose"
import iso from "../../exports/countryISO"

export interface AddressDocument extends mongoose.Document {
    country: string,
    city: string,
    street: string,
    postalcode: string,
    number: number,
    numberAddition: string,
    createdAt: Date,
    updatedAt: Date
}

const AddressSchema = new mongoose.Schema({
    country: {
        type: String,
        enum: iso,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    postalcode: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    numberAddition: {
        type: String,
    }
}, {
    timestamps: true
})

AddressSchema.path('postalcode').validate((code: any) => {
    return code.length === 5 && isNaN(code)
}, "Post Code must be a string of length 5")

const Address = mongoose.model<AddressDocument>("Address", AddressSchema)