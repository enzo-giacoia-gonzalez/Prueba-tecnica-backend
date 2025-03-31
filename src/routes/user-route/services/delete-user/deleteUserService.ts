import prisma from "../../../../db/db";

export const deleteUserService = async (id: string) => {
    console.log("hola")
    return await prisma.user.update({ 
        where: { id },  
        data: {
            status:false
        }
    });
};