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
    },
    status: {
        type: String,
        default: null,
    },
    name: {
        type: String,
        default: null,
    },
    email: {
        type: String,
        default: null,
    }
}, {
    timestamps: true
})

AddressSchema.path('postalcode').validate((code: any) => {
    return code.length === 5 && code.match(/^[0-9]+$/) != null
}, "Post Code must be a numeral string of length 5")

AddressSchema.pre<AddressDocument>("save", function (next) {
    if( !this.numberAddition ) this.numberAddition = ""
    next()
})

AddressSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function(doc: any, ret: any) {
        ret.id = ret._id
        delete ret._id;
        delete ret._v;
        return ret; 

    }
})

const Address = mongoose.model<AddressDocument>("Address", AddressSchema)

export default Address