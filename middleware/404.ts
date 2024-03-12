'use strict'
import { Request, Response } from "express"
export const notFound = (req: Request, res: Response) => {
    res.status(404).send({
        error: 404,
        route: req.path,
        message: "Route not found"
    })
}