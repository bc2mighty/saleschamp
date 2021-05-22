import express, { Request, Response } from "express"

export async function contentType (req: Request, res: Response, next: express.NextFunction) {
    if( req.method !== "GET" 
        && (
            !req.headers.hasOwnProperty("content-type") 
            || req.headers["content-type"] !== "application/json")
        )
        return res.status(415).send("")
    next()
}