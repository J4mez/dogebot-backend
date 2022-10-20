var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var csrf = require('csurf')
var bodyParser = require('body-parser')
var logger = require("morgan");
var cors = require("cors");
const helmet = require("helmet");
var csrf = require('csurf');
const rateLimit = require('express-rate-limit')

//set up csrf protection
var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var contentRouter = require("./routes/content");
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//https://www.npmjs.com/package/express-rate-limit
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

var app = express();

app.use(helmet());
app.use(limiter)
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors(corsOptions));
app.use(cookieParser())

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/content", contentRouter);

module.exports = app;
