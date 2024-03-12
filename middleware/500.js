'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = void 0;
const serverError = (error, req, res, next) => {
    res.status(500).send({
        error: 500,
        route: req.path,
        body: req.body,
        message: `Server error: ${error.message}`
    });
};
exports.serverError = serverError;
