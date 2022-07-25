
function authenticationMiddleware () {
    return function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      }
      res.redirect('/')
    }
  }

  const passport = require('passport')

app.get('/profile', passport.authenticationMiddleware(), renderProfile)