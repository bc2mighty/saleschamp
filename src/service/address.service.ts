import { DocumentDefinition } from "mongoose"
import Address, { AddressDocument } from "../model/address.model"

export async function createAddress (input: DocumentDefinition<AddressDocument>) {
    try {
        return await Address.create(input)
    } catch (error) {
        throw new Error(error)
    }
}

export async function allAddresses () {
    try {
        return await Address.find({})
    } catch (error) {
        throw new Error(error)
    }
}

export async function getAddress (id: string) {
    try {
        console.log(id)        
        return await Address.findById(id)
    } catch (error) {
        throw new Error(error)
    }
}

export async function updateAddress (id: string, body: object) {
    try {
        console.log(id)        
        return await Address.findByIdAndUpdate(id, body, { new: true})
    } catch (error) {
        throw new Error(error)
    }
}