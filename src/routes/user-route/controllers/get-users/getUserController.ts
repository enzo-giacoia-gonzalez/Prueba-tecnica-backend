import { getUsersService } from "../../services";
import { Request, Response } from "express";


export const getUsersController = async (_req: Request, res: Response) => {
    try {
        const users = await getUsersService();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};