const express = require('express');
const router = express.Router();
const Murder = require('../models/Murder');

router.get('/murders', async (request, response) => {
    try{
        const getMurder = await Murder.find();
        response.json(getMurder);
    } catch (err) {
        response.json({ message : err });
    }
});

router.post('/murder', async (request, response) => {
    
    const murder = new Murder({
        ANO_BO: request.body.ANO_BO,
        NUM_BO: request.body.NUM_BO,
        NUMERO_BOLETIM: request.body.NUMERO_BOLETIM,
        BO_INICIADO: request.body.BO_INICIADO,
        BO_EMITIDO: request.body.BO_EMITIDO,
        DATAOCORRENCIA: request.body.DATAOCORRENCIA,
        HORAOCORRENCIA: request.body.HORAOCORRENCIA,
        PERIDOOCORRENCIA: request.body.PERIDOOCORRENCIA,
        DATACOMUNICACAO: request.body.DATACOMUNICACAO,
        DATAELABORACAO: request.body.DATAELABORACAO,
        BO_AUTORIA: request.body.BO_AUTORIA,
        FLAGRANTE: request.body.FLAGRANTE,
        NUMERO_BOLETIM_PRINCIPAL: request.body.NUMERO_BOLETIM_PRINCIPAL,
        LOGRADOURO: request.body.LOGRADOURO,
        NUMERO: request.body.NUMERO,
        BAIRRO: request.body.BAIRRO,
        CIDADE: request.body.CIDADE,
        UF: request.body.UF,
        LATITUDE: request.body.LATITUDE,
        LONGITUDE: request.body.LONGITUDE,
        DESCRICAOLOCAL: request.body.DESCRICAOLOCAL,
        EXAME: request.body.EXAME,
        SOLUCAO: request.body.SOLUCAO,
        DELEGACIA_NOME: request.body.DELEGACIA_NOME,
        DELEGACIA_CIRCUNSCRICAO: request.body.DELEGACIA_CIRCUNSCRICAO,
        ESPECIE: request.body.ESPECIE,
        RUBRICA: request.body.RUBRICA,
        DESDOBRAMENTO: request.body.DESDOBRAMENTO,
        STATUS: request.body.STATUS,
        NOMEPESSOA: request.body.NOMEPESSOA,
        TIPOPESSOA: request.body.TIPOPESSOA,
        VITIMAFATAL: request.body.VITIMAFATAL,
        RG: request.body.RG,
        RG_UF: request.body.RG_UF,
        NATURALIDADE: request.body.NATURALIDADE,
        NACIONALIDADE: request.body.NACIONALIDADE,
        SEXO: request.body.SEXO,
        DATANASCIMENTO: request.body.DATANASCIMENTO,
        IDADE: request.body.IDADE,
        ESTADOCIVIL: request.body.ESTADOCIVIL,
        PROFISSAO: request.body.PROFISSAO,
        GRAUINSTRUCAO: request.body.GRAUINSTRUCAO,
        CORCUTIS: request.body.CORCUTIS,
        NATUREZAVINCULADA: request.body.NATUREZAVINCULADA,
        TIPOVINCULO: request.body.TIPOVINCULO,
        RELACIONAMENTO: request.body.RELACIONAMENTO,
        PARENTESCO: request.body.PARENTESCO,
        PLACA_VEICULO: request.body.PLACA_VEICULO,
        UF_VEICULO: request.body.UF_VEICULO,
        CIDADE_VEICULO: request.body.CIDADE_VEICULO,
        DESCR_COR_VEICULO: request.body.DESCR_COR_VEICULO,
        DESCR_MARCA_VEICULO: request.body.DESCR_MARCA_VEICULO,
        ANO_FABRICACAO: request.body.ANO_FABRICACAO,
        ANO_MODELO: request.body.ANO_MODELO,
        DESCR_TIPO_VEICULO: request.body.DESCR_TIPO_VEICULO,
        QUANT_CELULAR: request.body.QUANT_CELULAR,
        MARCA_CELULAR: request.body.MARCA_CELULAR
    });
    
    try{
        const savedMurder = await murder.save();
        response.json(savedMurder);
    } catch (err) {
        response.json({ message : err });
    }

});

router.delete('delmurder', async (request, response) => {
    try {
        const removedurder = await Murder.remove({
            date:{
              $lte : new Date(2018, 1, 1)
            }
          })
    } catch (error) {
        
    }
    db.inventory.find( { qty: { $lte: 20 } } )
})


module.exports = router;