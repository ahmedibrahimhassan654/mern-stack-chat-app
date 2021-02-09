const express = require("express");
const session=require('express-session')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport=require('passport')

const app = express();
//passport config
// require('./handlers/passport')(passport)





app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);

//Express Session
app.use(session({
  secret:'secret',
  resave:true,
  saveUninitialized:true
}));



//passport middleware
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./handlers/passport")(passport);
//Bring in the routes
app.use("/user", require("./routes/user"));
app.use("/chatroom", require("./routes/chatroom"));

//Setup Error Handlers
const errorHandlers = require("./handlers/errorHandlers");



app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

module.exports = app;