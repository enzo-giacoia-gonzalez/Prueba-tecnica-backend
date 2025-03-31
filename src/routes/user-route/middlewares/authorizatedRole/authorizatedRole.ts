import { NextFunction, Response } from "express";
import { AuthRequest } from "../../interfaces/auth-request-middleware/authRequestMiddleware";

export const authorizatedRole = (...roles: string[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        if (!req.user || !roles.includes(req.user.role)) {
            res.status(403).json({ error: "No tienes permisos para acceder a esta ruta" });
            return
        }
        next();
    };
};