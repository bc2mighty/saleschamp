import { DocumentDefinition } from "mongoose"
import Address, { AddressDocument } from "../model/address.model"

export async function createAddress (input: DocumentDefinition<AddressDocument>) {
    try {
        console.log(input);
        
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
        return await Address.findById(id)
    } catch (error) {
        throw new Error(error)
    }
}

export async function updateAddress (id: string, body: object) {
    try {     
        return await Address.findByIdAndUpdate(id, body, { new: true})
    } catch (error) {
        throw new Error(error)
    }
}

export async function deleteAddress (id: string) {
    try {
        return await Address.findByIdAndDelete(id)
    } catch (error) {
        throw new Error(error)
    }
}