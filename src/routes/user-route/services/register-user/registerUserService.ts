import bcrypt from "bcrypt";
import prisma from "../../../../db/db";
import { userInput } from "../../interfaces/user-input/userInput";


export const registerUserService = async ({ email, password, role = "USER", status=true }: userInput) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.user.create({
        data: { email, password: hashedPassword, role, status},
    });
};