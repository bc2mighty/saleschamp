import { Request, Response } from "express"
import { createAddress, allAddresses } from "../service/address.service"

export async function createAddressHandler(req: Request, res: Response) {
    try {
        const address = await createAddress(req.body)
        return res.status(201).json(address)
    } catch (error) {
        return res.status(422).json({message: error.message})
    }
}

export async function getAllAddressHandler(req: Request, res: Response) {
    try {
        const addresses = await allAddresses()
        return res.status(200).json(addresses)
    } catch (error) {
        return res.status(422).json({message: error.message})
    }
}