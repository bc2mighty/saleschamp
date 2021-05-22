import express, { Request, Response } from "express"
import validator from "validator"


export async function contentType (req: Request, res: Response, next: express.NextFunction) {
    if( req.method !== "GET" 
        && (
            !req.headers.hasOwnProperty("content-type") 
            || req.headers["content-type"] !== "application/json")
        )
        return res.status(415).send("")
    next()
}

export async function validatePatch (req: Request, res: Response, next: express.NextFunction) {
    let addressUpdateAttributes = ["email", "status", "name"]
    let statusEnum = ["not at home", "not interested", "interested"]
    
    if(JSON.stringify(addressUpdateAttributes) != JSON.stringify(Object.keys(req.body)))
        return res.status(422).json({message: `Only email, status and name fields are allowed`})
        
    if(req.body.email !== "" && !validator.isEmail(req.body.email))
        return res.status(422).json({message: `${req.body.email} is not a valid email`})

    if(req.body.name !== "" && typeof req.body.name !== "string")
        return res.status(422).json({message: `${req.body.name} must be a string`})

    if(!statusEnum.includes(req.body.status))
        return res.status(422).json({message: `Status '${req.body.status}' is not allowed`})
    
    next()
}