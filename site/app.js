var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = 3333;

var app = express();

var indexRouter = require("./src/routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);

app.listen(PORTA, function () {
        console.log(`

\tAcesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n`
        );
    });
