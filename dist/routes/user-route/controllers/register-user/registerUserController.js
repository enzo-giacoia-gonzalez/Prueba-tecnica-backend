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
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserController = void 0;
const services_1 = require("../../services");
const registerUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, services_1.registerUserService)(req.body);
        res.status(201).json({
            message: "Usuario creado",
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.registerUserController = registerUserController;
//# sourceMappingURL=registerUserController.js.map