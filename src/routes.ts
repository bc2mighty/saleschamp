import { Express, Request, Response } from "express"
import { 
    createAddressRoute,
    getAllAddresses,
    getAddress,
    updateAddress
} from "./routes/address.routes"

import { 
    validatePatch,
} from "./middleware"

export default (app: Express) => {
    app.route("/address")
        .post((req: Request, res: Response) => createAddressRoute(req, res))
        .get((req: Request, res: Response) => getAllAddresses(req, res))
    app.route("/address/:id")
        .get((req: Request, res: Response) => getAddress(req, res))
        .patch(validatePatch, (req: Request, res: Response) => updateAddress(req, res))
        .delete((req: Request, res: Response) => getAddress(req, res))
}