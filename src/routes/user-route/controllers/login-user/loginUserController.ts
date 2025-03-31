import { loginUserService } from "../../services";
import { Request, Response } from "express";

export const loginUserController = async (req: Request, res: Response) => {
    try {
        const user = await loginUserService(req.body);
        res.status(200).json({
            message: "Usuario logueado",
            ...user
        });
    } catch (error) {
        res.status(400).json({
            message:' Usuario o contraseña incorrectos',
        });
    }
};