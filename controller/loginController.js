const login = async (req, res) => {
	try {
		res.status(200).json({ user: req.user });
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
};

const logout = (req, res) => {
	try {
		req.logout();
		res.redirect('/');
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
};

const failLogin = (req, res) => {
	res.render('fail', { message: 'USER ERROR LOGIN', url: '/login' });
};

const signUp = (req, res) => {
	res.render('signup');
};

const failSingUp = (req, res) => {
	res.render('fail', { message: 'USER ERROR SIGNUP', url: '/signup' });
};

module.exports = {
	login,
	logout,
	failLogin,
	signUp,
	failSingUp
};
