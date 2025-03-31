import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../../../db/db";
import { userInput } from "../../interfaces/user-input/userInput";

const SECRET_KEY = process.env.DB_SECRET_KEY!;


export const loginUserService = async ({ email, password }: userInput): Promise<userResponse> => {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        throw new Error("Credenciales incorrectas");
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
        throw new Error("Credenciales incorrectas");
    }

    // Generar el token
    const token = jwt.sign({ email: user.email, role: user.role }, SECRET_KEY, { expiresIn: "1h" });

    const { password: passwordHash, ...userWithoutPassword } = user;

    return { token, user: userWithoutPassword };
};