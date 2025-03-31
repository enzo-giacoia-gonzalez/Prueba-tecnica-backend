import express from "express";
import cors from "cors";
import userRoutes from "./routes/user-route/userRoutes";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));
//# sourceMappingURL=server.js.map