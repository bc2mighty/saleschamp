import { Express, Request, Response } from "express"
import { createAddressRoute, getAllAddresses } from "./routes/address.routes"

export default (app: Express) => {
    app.route("/address")
        .post((req: Request, res: Response) => createAddressRoute(req, res))
        .get((req: Request, res: Response) => getAllAddresses(req, res))
    app.get("/", (req: Request, res: Response) => res.status(200).json({message: "Welcome"}))
    app.get("/", (req: Request, res: Response) => res.status(200).json({message: "Welcome"}))
}