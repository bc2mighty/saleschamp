import { Express, Request, Response } from "express"
import { createAddressHandler, getAllAddressHandler } from "../controller/address.controller"

export async function createAddressRoute(req: Request, res: Response) {
    return await createAddressHandler(req, res)
}

export async function getAllAddresses(req: Request, res: Response) {
    return await getAllAddressHandler(req, res)
}