import prisma from "../../../../db/db";
import { userInput } from "../../interfaces/user-input/userInput";

export const updateUserService = async (id: string, data: Partial<userInput>) => {
    return await prisma.user.update({ where: { id }, data });
};

