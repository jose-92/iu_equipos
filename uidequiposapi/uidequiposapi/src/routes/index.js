const { Router } = require('express');
const router = Router();
const { getUsers, getItems, saveUsers,
     getUserById, getTipo, getTipos, saveTipos, updateTipos,
     getEstado, getEstados, saveEstados, updateEstados
    } = require('../controllers/index.controller');



router.get('/tipos/:id', getTipo); 
router.get('/tipos', getTipos);
router.post('/tipos', saveTipos);
router.put('/tipos/:id', updateTipos);

router.get('/estados/:id', getEstado); 
router.get('/estados', getEstados);
router.post('/estados', saveEstados);
router.put('/estados/:id', updateEstados); 


router.get('/users', getUsers);
router.post('/users', saveUsers);
router.get('/users/:id', getUserById)
router.get('/items', getItems);

module.exports = router;