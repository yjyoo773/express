'use strict'
import { Request, Response, NextFunction } from "express"

export const serverError = (error: Error, req:Request, res:Response, next: NextFunction) => {
    res.status(500).send({
        error: 500,
        route: req.path,
        body: req.body,
        message: `Server error: ${error.message}`
    })
}