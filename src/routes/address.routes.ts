import { Request, Response } from "express"
import { 
    createAddressHandler,
    getAllAddressHandler, 
    getAddressHandler, 
    updateAddressHandler,
    deleteAddressHandler
} from "../controller/address.controller"

export async function createAddressRoute(req: Request, res: Response) {
    // return res.status(200).json(req.body)
    return await createAddressHandler(req, res)
}

export async function getAllAddresses(req: Request, res: Response) {
    return await getAllAddressHandler(req, res)
}

export async function getAddress(req: Request, res: Response) {
    return await getAddressHandler(req, res)
}

export async function updateAddress(req: Request, res: Response) {
    return await updateAddressHandler(req, res)
}

export async function deleteAddress(req: Request, res: Response) {
    // return res.send(req.params)
    return await deleteAddressHandler(req, res)
}