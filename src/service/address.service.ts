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