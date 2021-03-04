const { response } = require('express');
const express = require('express');
const router = express.Router();
const Charts = require('../models/Charts');
const Murder = require('../models/Murder');

router.get('/', async (request, response) => {
    try{

        Meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',]
        Hmes = [];

        for (const mes of Meses) {
            const count = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)'+ mes +'(\/)(2019)' }});
            console.log(count);
            Hmes.push(count);
        }

        response.send(Hmes);
    } catch (err) {
        response.send({ message : err });
    }
});


// ===============================================================================================================================================

router.get('/countCor2019', async (request, response) => {

    try{
        var Array = ["Parda", "Branca", "Amarela", "Preta", "Outros", "Null"];
        
        var Corcutis = [];
        var x = 0;

        for (const cor of Array) {
            const count = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)((0)[1-9]|(1)[0-2])(\/)(2019)' }, CORCUTIS: cor});
            console.log(count);
            Corcutis.push(count);
        }

        response.send(Corcutis);
    } catch (err) { 
        response.send({ message : err });
    }
});

router.get('/countCor2018', async (request, response) => {
     
    try{
        var Array = ["Parda", "Branca", "Amarela", "Preta", "Outros", "Null"];
        
        var Corcutis = [];
        var x = 0;

        for (const cor of Array) {
            const count = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)((0)[1-9]|(1)[0-2])(\/)(2018)' }, CORCUTIS: cor});
            console.log(count);
            Corcutis.push(count);
        }

        response.send(Corcutis);
    } catch (err) { 
        response.send({ message : err });
    }
});

router.get('/countCor2017', async (request, response) => {
     
    try{
        var Array = ["Parda", "Branca", "Amarela", "Preta", "Outros", "Null"];
        
        var Corcutis = [];
        var x = 0;

        
        for (const cor of Array) {
            const count = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)((0)[1-9]|(1)[0-2])(\/)(2017)' }, CORCUTIS: cor});
            console.log(count);
            Corcutis.push(count);
        }

        response.send(Corcutis);
    } catch (err) { 
        response.send({ message : err });
    }
});

// =====================================================================================================================

router.get('/countSexo2019', async (request, response) => {
       
    try{

        var Sexos = ["Feminino", "Masculino", "Null"];
        var HSexo = [];

        
        for (const sex of Sexos) {
            const count = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)((0)[1-9]|(1)[0-2])(\/)(2019)' }, SEXO: sex});
            console.log(count);
            HSexo.push(count);
        }
        
        
        response.send(HSexo);
    } catch (err) {
        response.send({ message : err });
    }
});

router.get('/countSexo2018', async (request, response) => {
       
    try{

        var Sexos = ["Feminino", "Masculino", "Null"];
        var HSexo = [];

        
        for (const sex of Sexos) {
            const count = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)((0)[1-9]|(1)[0-2])(\/)(2018)' }, SEXO: sex});
            console.log(count);
            HSexo.push(count);
        }
        
        
        response.send(HSexo);
    } catch (err) {
        response.send({ message : err });
    }
});

router.get('/countSexo2017', async (request, response) => {
       
    try{

        var Sexos = ["Feminino", "Masculino", "Null"];
        var HSexo = [];

        
        for (const sex of Sexos) {
            const count = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)((0)[1-9]|(1)[0-2])(\/)(2017)' }, SEXO: sex});
            console.log(count);
            HSexo.push(count);
        }
        
        
        response.send(HSexo);
    } catch (err) {
        response.send({ message : err });
    }
});


module.exports = router;