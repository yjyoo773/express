'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const _404_1 = require("../middleware/404");
const _500_1 = require("../middleware/500");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Express + TypeScript");
});
app.use("*", _404_1.notFound);
app.use(_500_1.serverError);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
