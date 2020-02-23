var express     = require('express'),
    bodyParser  = require('body-parser'),
    mysql       = require('mysql');

var connection = mysql.createConnection({
    host: 'doproj-db',
    user: 'root',
    password: '.sweetpwd.',
    database: 'employees'
});

var app = express();

app.get('/api/employees', (req, res) => {
    connection.query("SELECT * FROM employees LIMIT 100", (error, result) => {
        if (error) throw error;
        res.json(result);
    });
});

app.get('/api/:id', (req, res) => {
    connection.query(`SELECT * FROM employees WHERE emp_no=${req.params.id}`, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
});

app.listen(8080);