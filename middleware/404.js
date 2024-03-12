'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const notFound = (req, res) => {
    res.status(404).send({
        error: 404,
        route: req.path,
        message: "Route not found"
    });
};
exports.notFound = notFound;
