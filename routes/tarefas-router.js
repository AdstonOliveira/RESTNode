const express = require('express');
const router = express.Router();
const tarefasController = require('../controller/tarefas-controller');


router.get('/', tarefasController.getTarefas);
router.post('/novaTarefa', tarefasController.postTarefas);
router.get('/:idTarefa', tarefasController.getTarefa);


module.exports = router;