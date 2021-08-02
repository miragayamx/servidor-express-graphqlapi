const passport = require("passport");
import { GraphQLLocalStrategy } from "graphql-passport";
const Usuario = require("../models/usuario");

passport.use(
  new GraphQLLocalStrategy(async (email, password, done) => {
    try {
      const user = await Usuario.findOne({ email: email });
      if (!user) return done(null, false);
      if (!user.correctPassword(password, user.password))
        return done(null, false);
      return done(null, user);
    } catch (err) {
      throw err;
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await Usuario.findById(id);
    done(null, user);
  } catch (err) {
    throw err;
  }
});
