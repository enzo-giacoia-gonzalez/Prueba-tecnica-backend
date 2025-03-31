"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../../../../db/db"));
const SECRET_KEY = process.env.DB_SECRET_KEY;
const loginUserService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, password }) {
    const user = yield db_1.default.user.findUnique({ where: { email } });
    if (!user) {
        throw new Error("Credenciales incorrectas");
    }
    const comparePassword = yield bcrypt_1.default.compare(password, user.password);
    if (!comparePassword) {
        throw new Error("Credenciales incorrectas");
    }
    // Generar el token
    const token = jsonwebtoken_1.default.sign({ email: user.email, role: user.role }, SECRET_KEY, { expiresIn: "1h" });
    const { password: passwordHash } = user, userWithoutPassword = __rest(user, ["password"]);
    return { token, user: userWithoutPassword };
});
exports.loginUserService = loginUserService;
//# sourceMappingURL=loginUserService.js.map