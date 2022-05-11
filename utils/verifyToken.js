
import jwt from "jsonwebtoken"
import { createError } from "../utils/error.js"

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(createError(401, "No token provided"))

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(createError(403, "Invalid token"))
        req.user = user;
        next();
    }
    )
}


export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            return next()
        } else if (err)
            return next(createError(403, "You are not authorised",  ))
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        console.log(req.user)
        if (req.user.isAdmin) {
            return next()
        } else if (err)
            return next(createError(403, "You are not authorised"))
    })
}