const express = require('express');
const router = express.Router();
const Sugestion = require('../models/Sugestion');

router.post('/add', async (request, response) => {
    
    const sugestao = new Sugestion ({
        email: request.body.email,
        profissao: request.body.profissao,
        dataCriacao: request.body.dataCriacao,
        motivo: request.body.motivo,
        sugestao: request.body.sugestao
    });

    try{
        const savedSugestion = await sugestao.save();
        response.json("Sugestion Saved");
    } catch (err) {
        response.json({ message : err });
    }

});

module.exports = router;