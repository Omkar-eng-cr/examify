const express = require("express");
const path = require("path");

const app = express();

// =====================================
// SETTINGS
// =====================================

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));



// =====================================
// QUESTIONS ARRAY
// =====================================

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
        question: "What is recursion?",
        options: [
            "Loop inside loop",
            "Function calling itself",
            "Infinite loop",
            "Sorting technique"
        ],
        answer: "Function calling itself"
    }

];



// =====================================
// STUDENT ACTIVITIES
// =====================================

let studentActivities = [];



// =====================================
// RESULTS
// =====================================

let results = [];



// =====================================
// HOME PAGE
// =====================================

app.get("/", (req, res) => {

    res.render("index");

});



// =====================================
// LOGIN PAGE
// =====================================

app.get("/login", (req, res) => {

    res.render("login");

});



// =====================================
// STUDENT DASHBOARD
// =====================================

app.post("/dashboard", (req, res) => {

    const username = req.body.username;

    // Save Activity
    studentActivities.push({

        name: username,
        activity: "Logged In",
        time: new Date().toLocaleString()

    });

    res.render("dashboard", {

        username

    });

});



// =====================================
// EXAM PAGE
// =====================================

app.get("/exam", (req, res) => {

    res.render("exam", {

        questions

    });

});



// =====================================
// RESULT PAGE
// =====================================

app.post("/result", (req, res) => {

    let score = 0;

    questions.forEach((q, index) => {

        const userAnswer = req.body["q" + index];

        if (userAnswer === q.answer) {

            score++;

        }

    });

    // Save Result
    results.push({

        score: score,
        total: questions.length,
        time: new Date().toLocaleString()

    });

    res.render("result", {

        score,
        total: questions.length

    });

});



// =====================================
// ADMIN LOGIN PAGE
// =====================================

app.get("/admin", (req, res) => {

    res.render("admin/adminLogin");

});



// =====================================
// ADMIN DASHBOARD
// =====================================

app.get("/admin/dashboard", (req, res) => {

    res.render("admin/adminDashboard", {

        totalQuestions: questions.length,
        totalActivities: studentActivities.length,
        totalResults: results.length

    });

});



// =====================================
// UPLOAD QUESTION PAGE
// =====================================

app.get("/admin/upload", (req, res) => {

    res.render("admin/uploadQuestions");

});



// =====================================
// ADD NEW QUESTION
// =====================================

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



// =====================================
// VIEW ALL QUESTIONS
// =====================================

app.get("/admin/questions", (req, res) => {

    res.render("admin/questions", {

        questions

    });

});



// =====================================
// STUDENT ACTIVITIES PAGE
// =====================================

app.get("/admin/activities", (req, res) => {

    res.render("admin/activities", {

        studentActivities

    });

});



// =====================================
// RESULTS PAGE
// =====================================

app.get("/admin/results", (req, res) => {

    res.render("admin/results", {

        results

    });

});



// =====================================
// DELETE QUESTION
// =====================================

app.get("/delete-question/:index", (req, res) => {

    const index = req.params.index;

    questions.splice(index, 1);

    res.redirect("/admin/questions");

});



// =====================================
// 404 PAGE
// =====================================

app.use((req, res) => {

    res.status(404).send("404 Page Not Found");

});



// =====================================
// SERVER
// =====================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server Running On Port ${PORT}`);

});