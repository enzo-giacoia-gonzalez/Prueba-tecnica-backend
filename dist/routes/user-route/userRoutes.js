"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const middlewares_1 = require("./middlewares");
const router = express_1.default.Router();
router.post("/register", controllers_1.registerUserController);
router.post("/login", controllers_1.loginUserController);
router.get("/", controllers_1.getUsersController);
router.put("/:id", middlewares_1.authenticatedToken, controllers_1.updateUserController);
router.delete("/:id", middlewares_1.authenticatedToken, (0, middlewares_1.authorizatedRole)("ADMIN"), controllers_1.deleteUserController);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map