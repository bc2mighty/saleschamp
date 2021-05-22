import { Express, Request, Response } from "express"
import { 
    createAddressRoute,
    getAllAddresses,
    getAddress,
    updateAddress,
    deleteAddress,
} from "./routes/address.routes"

import { 
    validatePatchRequest,
    validatePostRequest,
} from "./middleware"

export default (app: Express) => {
    app.route("/address")
        .post(validatePostRequest, (req: Request, res: Response) => createAddressRoute(req, res))
        .get((req: Request, res: Response) => getAllAddresses(req, res))
    app.route("/address/:id")
        .get((req: Request, res: Response) => getAddress(req, res))
        .patch(validatePatchRequest, (req: Request, res: Response) => updateAddress(req, res))
        .delete((req: Request, res: Response) => deleteAddress(req, res))
}