const express = require('express');
const { productos, carrito } = require('../models/dao');

const router = express.Router();

router.get('/home', async (req, res) => {
	try {
		const lista = await productos.find();
		res.status(200).render('home', { user: !!req.user ? req.user : null, lista: lista, existe: true });
	} catch (err) {
		res.status(200).json({ error: err.message });
	}
});

router.get('/viewlogin', async (req, res) => {
	try {
		res.status(200).render('login', { user: !!req.user ? req.user : null });
	} catch (err) {
		res.status(200).json({ error: err.message });
	}
});

router.get('/viewsignup', async (req, res) => {
	try {
		res.status(200).render('signup', { user: !!req.user ? req.user : null });
	} catch (err) {
		res.status(200).json({ error: err.message });
	}
});

router.get('/viewlogout', async (req, res) => {
	try {
        const user = req.user;
        req.logout();
		res.status(200).render('logout', { user: user });
	} catch (err) {
		res.status(200).json({ error: err.message });
	}
});

router.get('/viewcarrito', async (req, res) => {
	try {
        const lista = await carrito.find();
        const existe = !!lista.length;
		res.status(200).render('carrito', { user: !!req.user ? req.user : null, lista: lista, existe: existe  });
	} catch (err) {
		res.status(200).json({ error: err.message });
	}
});

module.exports = router;
