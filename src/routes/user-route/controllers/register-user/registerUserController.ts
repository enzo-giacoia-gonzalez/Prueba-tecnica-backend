import { Request, Response } from "express";
import { registerUserService } from "../../services";


export const registerUserController = async (req: Request, res: Response) => {
    try {
        const user = await registerUserService(req.body);
        res.status(201).json({
            message: "Usuario creado",
        });
    } catch (error) {
        res.status(400).json({
            message:'Error al crear el usuario',
        });
    }
};