"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticatedToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticatedToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).json({ error: "No autorizado" });
        return;
    }
    ;
    const token = authHeader.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.DB_SECRET_KEY, (err, decoded) => {
        if (err) {
            res.status(403).json({ error: "Token inválido" });
            return;
        }
        ;
        req.user = decoded;
        next();
    });
};
exports.authenticatedToken = authenticatedToken;
//# sourceMappingURL=authenticatedToken.js.map