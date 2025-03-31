import { statusInput } from "../../interfaces/status-input/statusInput";
import { deleteUserService } from "../../services";
import { Request, Response } from "express";


export const deleteUserController = async (req: Request, res: Response) => {
    try {
        await deleteUserService(req.params.id);
        res.status(200).json({ message: "Usuario eliminado" });
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};
