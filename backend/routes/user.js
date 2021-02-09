const router = require("express").Router();
const passport=require('passport')
const { catchErrors } = require("../handlers/errorHandlers");
const userController = require("../controllers/userController");
//const passport = require("passport");

router.post("/login", catchErrors(userController.login));
router.post("/register", catchErrors(userController.register));

//passport login 
router.post('/passportlogin',
(req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
// passport.authenticate('local', { failureRedirect: '/passportLogin' }),
//   function(req, res) {
//    // res.redirect('/dashboard');
// console.log(res);
// // passport.authenticate('local',{
// //     successRedirect:'/dashboard',
// //     failureRedirect:'/passportLogin',
// //     failureFlash:true
// // }

//   }
})



module.exports = router;