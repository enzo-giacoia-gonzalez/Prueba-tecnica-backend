"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizatedRole = void 0;
const authorizatedRole = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            res.status(403).json({ error: "No tienes permisos para acceder a esta ruta" });
            return;
        }
        next();
    };
};
exports.authorizatedRole = authorizatedRole;
//# sourceMappingURL=authorizatedRole.js.map