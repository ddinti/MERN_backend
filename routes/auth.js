//  Rutas de usuarios / Auth 
//  host + /api/auth

const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/fieldValidator');
const { validarJWT } = require('../middlewares/jwtValidator');
const router = Router();


router.post('/new',
    [
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe ser de 6 caracteres').isLength({min:6}),
        validarCampos
    ],
    crearUsuario 
);

router.post('/',
    [
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe ser de 6 caracteres').isLength({min:6}),
        validarCampos
    ], 
    loginUsuario 
);

router.get( '/renew', validarJWT, revalidarToken );



module.exports = router;