// ==========================================
// EXPENSE TRACKER JAVASCRIPT ASSIGNMENT
// ==========================================


// ==========================================
// PART 1 - STORE SAMPLE EXPENSES
// ==========================================

// Create six variables representing
// different expense amounts.

let rent = 250;

let food = 80;

let transport = 60;

let internet = 120;

let entertainment = 75;

let utilities = 90;


// Display the stored expenses.

console.log("===== EXPENSE TRACKER =====");

console.log("");

console.log("PART 1: SAMPLE EXPENSES");

console.log("-------------------------");

console.log("Rent: $" + rent);

console.log("Food: $" + food);

console.log("Transport: $" + transport);

console.log("Internet: $" + internet);

console.log("Entertainment: $" + entertainment);

console.log("Utilities: $" + utilities);

console.log("");


// ==========================================
// PART 2 - FLAG HIGH SPENDING
// ==========================================

// An expense greater than $100 is considered
// High Spending.
//
// Each expense is checked individually using
// if, else if, and else statements.

console.log("PART 2: SPENDING CHECK");

console.log("-------------------------");


// Check Rent

if (rent > 100) {

    console.log("Rent: High Spending");

} else if (rent >= 0) {

    console.log("Rent: Normal Spending");

} else {

    console.log("Rent: Invalid Expense");

}


// Check Food

if (food > 100) {

    console.log("Food: High Spending");

} else if (food >= 0) {

    console.log("Food: Normal Spending");

} else {

    console.log("Food: Invalid Expense");

}


// Check Transport

if (transport > 100) {

    console.log("Transport: High Spending");

} else if (transport >= 0) {

    console.log("Transport: Normal Spending");

} else {

    console.log("Transport: Invalid Expense");

}


// Check Internet

if (internet > 100) {

    console.log("Internet: High Spending");

} else if (internet >= 0) {

    console.log("Internet: Normal Spending");

} else {

    console.log("Internet: Invalid Expense");

}


// Check Entertainment

if (entertainment > 100) {

    console.log("Entertainment: High Spending");

} else if (entertainment >= 0) {

    console.log("Entertainment: Normal Spending");

} else {

    console.log("Entertainment: Invalid Expense");

}


// Check Utilities

if (utilities > 100) {

    console.log("Utilities: High Spending");

} else if (utilities >= 0) {

    console.log("Utilities: Normal Spending");

} else {

    console.log("Utilities: Invalid Expense");

}


console.log("");


// ==========================================
// PART 3 - CALCULATE TOTAL EXPENSES
// ==========================================

// Store all six expense values inside
// an array.

let expenses = [
    rent,
    food,
    transport,
    internet,
    entertainment,
    utilities
];


// Create a variable to store the total.

let totalExpenses = 0;


// Use a for...of loop to calculate
// the total expenses.
//
// The expenses are NOT manually added together.

for (let expense of expenses) {

    totalExpenses += expense;

}


// Display the final total.

console.log("PART 3: TOTAL EXPENSES");

console.log("-------------------------");

console.log("Total Expenses: $" + totalExpenses);

console.log("");


// ==========================================
// PART 4 - BUDGET CHECK
// ==========================================

// Create a variable named monthlyIncome.

let monthlyIncome = 800;


// Display monthly income.

console.log("PART 4: BUDGET CHECK");

console.log("-------------------------");

console.log("Monthly Income: $" + monthlyIncome);

console.log("Total Expenses: $" + totalExpenses);


// Compare total expenses with monthly income.

if (totalExpenses <= monthlyIncome) {

    console.log("Status: Within Budget");

} else {

    console.log("Status: Over Budget");

}


console.log("");

console.log("=========================");

console.log("ASSIGNMENT COMPLETE");

console.log("=========================");
