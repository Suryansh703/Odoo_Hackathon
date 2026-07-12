const authMiddleware = (req, res, next) => {
    // Placeholder authentication
    // Later, verify JWT or session here

    console.log("Auth Middleware Executed");

    next();
};

module.exports = authMiddleware;