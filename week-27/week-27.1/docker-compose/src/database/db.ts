import { prisma } from "../lib/prisma";

const connectToDatabase = async () => {
    try {
        await prisma.$connect();
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
    }
}

export default connectToDatabase;