const authMiddleware = (req, res, next) => {
    // Authentication logic can be added later (JWT, Sessions, etc.)
    next();
};

module.exports = authMiddleware;