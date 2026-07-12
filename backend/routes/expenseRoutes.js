// const express = require("express");
// const router = express.Router();
// const expenseController = require("../controllers/expenseController");
// router.get("/", expenseController.getAllExpenses);
// router.get("/:id", expenseController.getExpenseById);
// router.post("/", expenseController.createExpense);
// router.put("/:id", expenseController.updateExpense);
// router.delete("/:id", expenseController.deleteExpense);
// module.exports = router;
const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expenseController");

const authMiddleware = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// Get all expenses
router.get(
    "/",
    authMiddleware,
    authorize("Admin", "Financial Analyst"),
    expenseController.getAllExpenses
);

// Create expense
router.post(
    "/",
    authMiddleware,
    authorize("Admin", "Financial Analyst"),
    expenseController.createExpense
);

module.exports = router;