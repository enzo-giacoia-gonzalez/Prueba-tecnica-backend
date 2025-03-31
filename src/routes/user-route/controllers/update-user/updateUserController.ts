import { updateUserService } from "../../services";
import { Request, Response } from "express";

export const updateUserController = async (req: Request, res: Response) => {
    try {
        
        const updatedUser = await updateUserService(req.params.id, req.body);
        const { password, ...userWithoutPassword } = updatedUser;
        res.json(userWithoutPassword);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};