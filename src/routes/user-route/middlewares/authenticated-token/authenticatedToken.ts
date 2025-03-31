
import { AuthRequest } from "../../interfaces/auth-request-middleware/authRequestMiddleware";
import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";



export const authenticatedToken = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = (req.headers as { authorization?: string }).authorization;
    if (!authHeader) {
         res.status(401).json({ error: "No autorizado" })
         return
    };
    
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.DB_SECRET_KEY!, (err: jwt.VerifyErrors | null, decoded) => {
        if (err) {
            res.status(403).json({ error: "Token inválido" })
            return
        };
        req.user = decoded as { email: string; role: string };
        next();
    });
};
