const express = require('express');
const mongoose = require('mongoose');

const MurderSchema = mongoose.Schema({
    ANO_BO: {   
        type: String,
        required: true
    },
    NUM_BO: {
        type: String,
        required: true
    },
    NUMERO_BOLETIM: {
        type: String,
        required: true
    },
    BO_INICIADO: {
        type: String,
        required: true
    },
    BO_EMITIDO: {
        type: String,
        required: true
    },
    DATAOCORRENCIA: {
        type: String,
        required: true
    },
    HORAOCORRENCIA: {
        type: String,
        required: true
    },
    PERIDOOCORRENCIA: {
        type: String,
        required: true
    },
    DATACOMUNICACAO: {
        type: String,
        required: true
    },
    DATAELABORACAO: {
        type: String,
        required: true
    },
    BO_AUTORIA: {
        type: String,
        required: true
    },
    FLAGRANTE: {
        type: String,
        required: true
    },
    NUMERO_BOLETIM_PRINCIPAL: {
        type: String,
        required: true
    },
    LOGRADOURO: {
        type: String,
        required: true
    },
    NUMERO: {
        type: String,
        required: true
    },
    BAIRRO: {
        type: String,
        required: true
    },
    CIDADE: {
        type: String,
        required: true
    },
    UF: {
        type: String,
        required: true
    },
    LATITUDE: {
        type: String,
        required: true
    },
    LONGITUDE: {
        type: String,
        required: true
    },
    DESCRICAOLOCAL: {
        type: String,
        required: true
    },
    EXAME: {
        type: String,
        required: true
    },
    SOLUCAO: {
        type: String,
        required: true
    },
    DELEGACIA_NOME: {
        type: String,
        required: true
    },
    DELEGACIA_CIRCUNSCRICAO: {
        type: String,
        required: true
    },
    ESPECIE: {
        type: String,
        required: true
    },
    RUBRICA: {
        type: String,
        required: true
    },
    DESDOBRAMENTO: {
        type: String,
        required: true
    },
    STATUS: {
        type: String,
        required: true
    },
    NOMEPESSOA: {
        type: String,
        required: true
    },
    TIPOPESSOA: {
        type: String,
        required: true
    },
    VITIMAFATAL: {
        type: String,
        required: true
    },
    RG: {
        type: String,
        required: true
    },
    RG_UF: {
        type: String,
        required: true
    },
    NATURALIDADE: {
        type: String,
        required: true
    },
    NACIONALIDADE: {
        type: String,
        required: true
    },
    SEXO: {
        type: String,
        required: true
    },
    DATANASCIMENTO: {
        type: String,
        required: true
    },
    IDADE: {
        type: String,
        required: true
    },
    ESTADOCIVIL: {
        type: String,
        required: true
    },
    PROFISSAO: {
        type: String,
        required: true
    },
    GRAUINSTRUCAO: {
        type: String,
        required: true
    },
    CORCUTIS: {
        type: String,
        required: true
    },
    NATUREZAVINCULADA: {
        type: String,
        required: true
    },
    TIPOVINCULO: {
        type: String,
        required: true
    },
    RELACIONAMENTO: {
        type: String,
        required: true
    },
    PARENTESCO: {
        type: String,
        required: true
    },
    PLACA_VEICULO: {
        type: String,
        required: true
    },
    UF_VEICULO: {
        type: String,
        required: true
    },
    CIDADE_VEICULO: {
        type: String,
        required: true
    },
    DESCR_COR_VEICULO: {
        type: String,
        required: true
    },
    DESCR_MARCA_VEICULO: {
        type: String,
        required: true
    },
    ANO_FABRICACAO: {
        type: String,
        required: true
    },
    ANO_MODELO: {
        type: String,
        required: true
    },
    DESCR_TIPO_VEICULO: {
        type: String,
        required: true
    },
    QUANT_CELULAR: {
        type: String,
        required: true
    },
    MARCA_CELULAR: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Murder', MurderSchema);