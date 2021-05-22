import { Express, Request, Response } from "express"

export default (app: Express) => {
    app.get("/", (req: Request, res: Response) => res.status(200).json({message: "Welcome"}))
}