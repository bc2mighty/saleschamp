import { Request, Response } from "express"
import { 
    createAddress, 
    allAddresses, 
    getAddress, 
    updateAddress, 
    deleteAddress 
} from "../service/address.service"
import client from "../caching/redis"

export async function createAddressHandler(req: Request, res: Response) {
    try {
        const address = await createAddress(req.body)
        return res
            // .setHeader("Location", `/address`)
            .status(201)
            .json(address)
    } catch (error) {
        console.log(error);
        
        return res
            .status(422)
            .json({message: error.message})
    }
}

export async function getAllAddressHandler(req: Request, res: Response) {
    try {
        const addresses = await allAddresses()
        return res
            .status(200)
            .json(addresses)
    } catch (error) {
        return res
            .status(422)
            .json({message: error.message})
    }
}

export async function getAddressHandler(req: Request, res: Response) {
    let address
    try {
        address = await client.getAsync(req.params.id as string) 
        
        if (address == null) {
            address = await getAddress(req.params.id as string)
            if (address) {
                await client.set(req.params.id as string, JSON.stringify(address))
            } else {
                return res
                    .status(404)
                    .json({message: `Requested Address has been deleted`})
            }
        } else {
            address = JSON.parse(address)
        }
        
        return res
            // .setHeader("Last-Modified", new Intl.DateTimeFormat('de-DE', dateOptions).format(address.updatedAt))
            // .setHeader("If-Modified-Since", new Intl.DateTimeFormat('de-DE', dateOptions).format(address.updatedAt))
            .status(200)
            .json(address)
    } catch (error) {
        return res
            .status(404)
            .json({message: error.message})
    }
}

export async function updateAddressHandler(req: Request, res: Response) {
    let address
    try {
        address = await getAddress(req.params.id as string)
        let status: string | null = address.status
        if(!status || status === "not at home") {
            await client.set(req.params.id as string, JSON.stringify(address))

            address = await updateAddress(req.params.id as string, req.body as object)
            return res
                .status(200)
                .json(address)
        }
        return res
            .status(403)
            .json(
                {
                    message: `Changes Disallowed beacuse the current Address status is ${address.status}`
                }
            )
    } catch (error) {
        return res
            .status(404)
            .json(
                {
                    message: error.message
                }
            )
    }
}

export async function deleteAddressHandler(req: Request, res: Response) {
    try {
        await client.del(req.params.id as string)
        await deleteAddress(req.params.id as string)
        return res
            .status(204)
            .json()
    } catch (error) {
        return res
            .status(404)
            .json({message: error.message})
    }
}