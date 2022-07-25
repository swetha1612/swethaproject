const express = require('express')
const passport = require('passport')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

const app = express()
app.use(session({
  store: new RedisStore({
    url: config.redisStore.url
  }),
  secret: config.redisStore.secret,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

const user = {
  username: 'test-user',
  passwordHash: 'bcrypt-hashed-password',
  id: 1
}

passport.use(new LocalStrategy(
 (username, password, done) => {
    findUser(username, (err, user) => {
      if (err) {
        return done(err)
      }


      if (!user) {
        return done(null, false)
      }


      bcrypt.compare(password, user.passwordHash, (err, isValid) => {
        if (err) {
          return done(err)
        }
        if (!isValid) {
          return done(null, false)
        }
        return done(null, user)
      })
    })
  }
))