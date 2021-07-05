const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Usuario = require('../models/usuario');

passport.use(
	'login',
	new LocalStrategy(
		{
			passReqToCallback: true
		},
		async function(req, email, password, done) {
			try {
				const user = await Usuario.findOne({ email: email });
				if (!user) return done(null, false);
				if (!Usuario.correctPassword(password, user.password)) return done(null, false);
				return done(null, user);
			} catch (err) {
				throw err;
			}
		}
	)
);

passport.use(
	'signup',
	new LocalStrategy(
		{
			passReqToCallback: true
		},
		function(req, user, done) {
			findOrCreateUser = async function() {
				try {
					const userExists = await Usuario.findOne({ email: user.email });
					if (userExists) return done(null, false);
                    const newUser = new Usuario(user);
                    await newUser.save()
					return done(null, user);
				} catch (err) {
					throw err;
				}
			};
			process.nextTick(findOrCreateUser);
		}
	)
);

passport.serializeUser(function(user, done) {
	done(null, user._id);
});

passport.deserializeUser(async function(id, done) {
	try {
		const user = await Usuario.findById(id);
		done(null, user);
	} catch (err) {
		throw err;
	}
});
