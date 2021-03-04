const express = require('express');
const mongoose = require('mongoose');

const SugestionSchema = mongoose.Schema({
    email: {   
        type: String,
        required: true
    },
    profissao: {
        type: String,
        required: true
    },
    dataCriacao: {
        type: Date,
        default: Date.now,
        required: true
    },
    motivo: {
        type: String,
        required: true
    },
    sugestao: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Sugestion', SugestionSchema);