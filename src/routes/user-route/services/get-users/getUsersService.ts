import prisma from "../../../../db/db";


export const getUsersService = async () => {
    return await prisma.user.findMany({
        select: { id: true, email: true, role: true, status: true },
        where: {
            status: true
        }
    });
};
