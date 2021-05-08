// Obtener lo que se va ser en MODELS
const { json } = require('body-parser');
const Accidente = require('../models/actividades');



exports.getNuevoAccidente = (request, response, next) => {
   response.render('nuevo_accidente',{title:'Nuevo Accidente',
                                    });
   
};


exports.postNuevoAccidente =  (request, response, next) => {

    const accidente = new Accidente( request.body.id_lugar, request.body.id_tipo);

    accidente.save().then(() => {
        response.redirect('/actividades');
    }).catch(
        err => { console.log(err)
        //Si existe error, regresa a la forma
        response.redirect('/actividades/nuevo_accidente');}
   
    );
     
 };

exports.get= (request, response, next) => {
    //Obtener info de las cookies
       
    Accidente.fetchAllAccidente() 
           .then(([rows, fieldData]) => {   
            response.render('actividades',
            {
             title: 'Jurasic Park',
             accidentes: rows
            }
                );
            })
    //Saber si te equivocaste en alguna parte:
            .catch(err => { 
             console.log(err);
            });
        
    
        


};
