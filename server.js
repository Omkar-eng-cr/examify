const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));



// ==========================
// QUESTIONS ARRAY
// ==========================

let questions = [

    {
        question: "Which loop is used when the number of iterations is unknown?",
        options: [
            "for loop",
            "while loop",
            "switch loop",
            "repeat loop"
        ],
        answer: "while loop"
    },

    {
        question: "What is the output of: print(type([])) ?",
        options: [
            "<class 'tuple'>",
            "<class 'dict'>",
            "<class 'list'>",
            "<class 'set'>"
        ],
        answer: "<class 'list'>"
    },

    {
        question: "Which keyword is used to create a function in Python?",
        options: [
            "fun",
            "define",
            "def",
            "function"
        ],
        answer: "def"
    },

    {
        question: "What is the output of: print(10 // 3) ?",
        options: [
            "3.33",
            "3",
            "4",
            "1"
        ],
        answer: "3"
    },

    {
        question: "Which collection stores unique values only?",
        options: [
            "List",
            "Tuple",
            "Dictionary",
            "Set"
        ],
        answer: "Set"
    },

    {
        question: "Which symbol is used for comments in Python?",
        options: [
            "//",
            "#",
            "/*",
            "--"
        ],
        answer: "#"
    },

    {
        question: "Which function gives the length of a list?",
        options: [
            "count()",
            "size()",
            "len()",
            "length()"
        ],
        answer: "len()"
    },

    {
        question: "What is the output of: print(bool(0)) ?",
        options: [
            "True",
            "False",
            "0",
            "Error"
        ],
        answer: "False"
    },

    {
        question: "Which data type is immutable?",
        options: [
            "List",
            "Dictionary",
            "Set",
            "Tuple"
        ],
        answer: "Tuple"
    },

    {
        question: "What is the output of: print(2 ** 3) ?",
        options: [
            "6",
            "8",
            "9",
            "5"
        ],
        answer: "8"
    },

    {
        question: "Which statement is used to stop a loop?",
        options: [
            "skip",
            "pass",
            "break",
            "stop"
        ],
        answer: "break"
    },

    {
        question: "Which keyword skips the current iteration?",
        options: [
            "continue",
            "pass",
            "break",
            "return"
        ],
        answer: "continue"
    },

    {
        question: "Which collection uses key-value pairs?",
        options: [
            "List",
            "Tuple",
            "Dictionary",
            "Set"
        ],
        answer: "Dictionary"
    },

    {
        question: "What is the output of: print(type({})) ?",
        options: [
            "<class 'set'>",
            "<class 'dict'>",
            "<class 'list'>",
            "<class 'tuple'>"
        ],
        answer: "<class 'dict'>"
    },

    {
        question: "Which method adds an item to a list?",
        options: [
            "insert()",
            "append()",
            "add()",
            "push()"
        ],
        answer: "append()"
    },

    {
        question: "Which method removes the last element from a list?",
        options: [
            "remove()",
            "delete()",
            "pop()",
            "clear()"
        ],
        answer: "pop()"
    },

    {
        question: "Which operator is used for logical AND?",
        options: [
            "&&",
            "&",
            "and",
            "AND"
        ],
        answer: "and"
    },

    {
        question: "Which operator is used for logical OR?",
        options: [
            "||",
            "|",
            "or",
            "OR"
        ],
        answer: "or"
    },

    {
        question: "What is the output of: print(5 % 2) ?",
        options: [
            "2",
            "2.5",
            "1",
            "0"
        ],
        answer: "1"
    },

    {
        question: "Which loop is best for iterating over a list?",
        options: [
            "for loop",
            "while loop",
            "do while",
            "switch"
        ],
        answer: "for loop"
    },

    {
        question: "Which keyword is used to return a value from a function?",
        options: [
            "output",
            "return",
            "break",
            "yield"
        ],
        answer: "return"
    },

    {
        question: "What is the output of: print('Hello'[1]) ?",
        options: [
            "H",
            "e",
            "l",
            "o"
        ],
        answer: "e"
    },

    {
        question: "Which method converts a string to lowercase?",
        options: [
            "lower()",
            "small()",
            "down()",
            "case()"
        ],
        answer: "lower()"
    },

    {
        question: "Which method converts a string to uppercase?",
        options: [
            "upper()",
            "big()",
            "caps()",
            "high()"
        ],
        answer: "upper()"
    },

    {
        question: "What is the output of: print(len('Python')) ?",
        options: [
            "5",
            "6",
            "7",
            "Error"
        ],
        answer: "6"
    },

    {
        question: "Which function takes user input?",
        options: [
            "get()",
            "read()",
            "scan()",
            "input()"
        ],
        answer: "input()"
    },

    {
        question: "Which collection allows duplicate values?",
        options: [
            "Set",
            "Dictionary",
            "List",
            "None"
        ],
        answer: "List"
    },

    {
        question: "What is the output of: print(3 > 2 and 5 > 1) ?",
        options: [
            "False",
            "0",
            "True",
            "Error"
        ],
        answer: "True"
    },

    {
        question: "What is the output of: print(not True) ?",
        options: [
            "True",
            "False",
            "None",
            "0"
        ],
        answer: "False"
    },

    {
        question: "Which function converts a string to integer?",
        options: [
            "str()",
            "float()",
            "int()",
            "char()"
        ],
        answer: "int()"
    },

    {
        question: "What is recursion?",
        options: [
            "Loop inside loop",
            "Function calling itself",
            "Infinite loop",
            "Sorting technique"
        ],
        answer: "Function calling itself"
    },

    {
        question: "Which data structure follows LIFO?",
        options: [
            "Queue",
            "Stack",
            "Array",
            "Tree"
        ],
        answer: "Stack"
    },

    {
        question: "Which operation adds element to stack?",
        options: [
            "enqueue",
            "insert",
            "push",
            "append"
        ],
        answer: "push"
    },

    {
        question: "Which operation removes element from stack?",
        options: [
            "delete",
            "pop",
            "remove",
            "dequeue"
        ],
        answer: "pop"
    },

    {
        question: "Which data structure follows FIFO?",
        options: [
            "Stack",
            "Queue",
            "Tree",
            "Graph"
        ],
        answer: "Queue"
    },

    {
        question: "Which operation removes item from queue?",
        options: [
            "push",
            "pop",
            "dequeue",
            "append"
        ],
        answer: "dequeue"
    },

    {
        question: "Which keyword is used for conditions?",
        options: [
            "for",
            "if",
            "loop",
            "switch"
        ],
        answer: "if"
    },

    {
        question: "Which block executes when if condition is false?",
        options: [
            "loop",
            "continue",
            "else",
            "pass"
        ],
        answer: "else"
    },

    {
        question: "Which keyword checks multiple conditions?",
        options: [
            "elseif",
            "elif",
            "multiif",
            "otherwise"
        ],
        answer: "elif"
    },

    {
        question: "What is the output of: print(type(5.5)) ?",
        options: [
            "int",
            "float",
            "double",
            "decimal"
        ],
        answer: "float"
    },

    {
        question: "What is the output of: print(10 == 10) ?",
        options: [
            "False",
            "True",
            "0",
            "Error"
        ],
        answer: "True"
    },

    {
        question: "Which symbol is used for equality comparison?",
        options: [
            "=",
            "==",
            "!=",
            ":="
        ],
        answer: "=="
    },

    {
        question: "Which method removes all elements from a list?",
        options: [
            "delete()",
            "clear()",
            "remove()",
            "empty()"
        ],
        answer: "clear()"
    },

    {
        question: "Which function sorts a list?",
        options: [
            "arrange()",
            "sort()",
            "order()",
            "filter()"
        ],
        answer: "sort()"
    },

    {
        question: "Which keyword creates a class in Python?",
        options: [
            "object",
            "class",
            "struct",
            "define"
        ],
        answer: "class"
    },

    {
        question: "What is self in Python?",
        options: [
            "Loop variable",
            "Class name",
            "Reference to current object",
            "Global variable"
        ],
        answer: "Reference to current object"
    },

    {
        question: "Which method is automatically called when object is created?",
        options: [
            "start()",
            "create()",
            "__init__()",
            "__main__()"
        ],
        answer: "__init__()"
    },

    {
        question: "Which collection is ordered and mutable?",
        options: [
            "Set",
            "Tuple",
            "List",
            "Frozen Set"
        ],
        answer: "List"
    },

    {
        question: "Which collection is unordered?",
        options: [
            "Tuple",
            "List",
            "String",
            "Set"
        ],
        answer: "Set"
    },

    {
        question: "What is the output of: print(min([4,2,8])) ?",
        options: [
            "8",
            "2",
            "4",
            "Error"
        ],
        answer: "2"
    },

    {
        question: "What is the output of: print(max([4,2,8])) ?",
        options: [
            "8",
            "2",
            "4",
            "Error"
        ],
        answer: "8"
    },

    {
        question: "Which function finds sum of list elements?",
        options: [
            "total()",
            "sum()",
            "add()",
            "plus()"
        ],
        answer: "sum()"
    },

    {
        question: "Which keyword handles exceptions?",
        options: [
            "catch",
            "try",
            "error",
            "final"
        ],
        answer: "try"
    },

    {
        question: "Which block executes after try block if error occurs?",
        options: [
            "except",
            "error",
            "catch",
            "final"
        ],
        answer: "except"
    },

    {
        question: "Which keyword is used to import modules?",
        options: [
            "include",
            "using",
            "import",
            "require"
        ],
        answer: "import"
    },

    {
        question: "What is the output of: print(range(5)) ?",
        options: [
            "List",
            "Tuple",
            "Range object",
            "Error"
        ],
        answer: "Range object"
    },

    {
        question: "Which loop can create infinite loop?",
        options: [
            "for",
            "while",
            "if",
            "elif"
        ],
        answer: "while"
    },

    {
        question: "Which slicing reverses a string?",
        options: [
            "[::-1]",
            "[::1]",
            "[0:]",
            "[1:]"
        ],
        answer: "[::-1]"
    },

    {
        question: "What is the output of: print('Python'[-1]) ?",
        options: [
            "P",
            "n",
            "o",
            "t"
        ],
        answer: "n"
    },

    {
        question: "Which method checks whether a key exists in dictionary?",
        options: [
            "find()",
            "check()",
            "in",
            "exists()"
        ],
        answer: "in"
    },

    {
        question: "What is the output of: print(type(True)) ?",
        options: [
            "int",
            "bool",
            "float",
            "str"
        ],
        answer: "bool"
    },

    {
        question: "Which keyword creates an anonymous function?",
        options: [
            "lambda",
            "def",
            "func",
            "anonymous"
        ],
        answer: "lambda"
    }

];


// ==========================
// STUDENT ACTIVITIES ARRAY
// ==========================

let studentActivities = [];



// ==========================
// RESULTS ARRAY
// ==========================

let results = [];



// ==========================
// HOME PAGE
// ==========================

app.get("/", (req, res) => {

    res.render("index");

});



// ==========================
// LOGIN PAGE
// ==========================

app.get("/login", (req, res) => {

    res.render("login");

});



// ==========================
// STUDENT DASHBOARD
// ==========================

app.post("/dashboard", (req, res) => {

    const username = req.body.username;

    studentActivities.push({

        name: username,
        activity: "Logged In",
        time: new Date().toLocaleTimeString()

    });

    res.render("dashboard", { username });

});



// ==========================
// EXAM PAGE
// ==========================

app.get("/exam", (req, res) => {

    res.render("exam", { questions });

});



// ==========================
// RESULT PAGE
// ==========================

app.post("/result", (req, res) => {

    let score = 0;

    questions.forEach((q, index) => {

        const userAnswer = req.body["q" + index];

        if (userAnswer === q.answer) {

            score++;

        }

    });

    // SAVE RESULT

    results.push({

        score: score,
        total: questions.length,
        time: new Date().toLocaleTimeString()

    });

    res.render("result", {

        score,
        total: questions.length

    });

});



// ==========================
// ADMIN LOGIN PAGE
// ==========================

app.get("/admin", (req, res) => {

    res.render("admin/adminLogin");

});



// ==========================
// ADMIN DASHBOARD
// ==========================

app.get("/admin/dashboard", (req, res) => {

    res.render("admin/adminDashboard", {

        totalQuestions: questions.length,
        totalActivities: studentActivities.length,
        totalResults: results.length

    });

});



// ==========================
// UPLOAD QUESTION PAGE
// ==========================

app.get("/admin/upload", (req, res) => {

    res.render("admin/uploadQuestions");

});



// ==========================
// UPLOAD QUESTION
// ==========================

app.post("/upload-question", (req, res) => {

    const newQuestion = {

        question: req.body.question,

        options: [

            req.body.option1,
            req.body.option2,
            req.body.option3,
            req.body.option4

        ],

        answer: req.body.answer

    };

    questions.push(newQuestion);

    console.log("New Question Added");

    res.redirect("/admin/upload");

});



// ==========================
// VIEW ALL QUESTIONS
// ==========================

app.get("/admin/questions", (req, res) => {

    res.render("admin/questions", {

        questions

    });

});



// ==========================
// STUDENT ACTIVITIES PAGE
// ==========================

app.get("/admin/activities", (req, res) => {

    res.render("admin/activities", {

        studentActivities

    });

});



// ==========================
// RESULTS PAGE
// ==========================

app.get("/admin/results", (req, res) => {

    res.render("admin/results", {

        results

    });

});



// ==========================
// DELETE QUESTION
// ==========================

app.get("/delete-question/:index", (req, res) => {

    const index = req.params.index;

    questions.splice(index, 1);

    res.redirect("/admin/questions");

});



// ==========================
// SERVER
// ==========================

app.listen(3000, () => {

    console.log("Server Running On http://localhost:3000");

});