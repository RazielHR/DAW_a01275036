//Realizar conexión con la base de datos
const db = require('../util/database');



module.exports = class Accidente {

    constructor(id_lugar,id_tipo) {
       
        this.id_lugar = id_lugar, 
        this.id_tipo = id_tipo
        
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        // Almacenas el objeto que se acaba de crear
        return db.execute('INSERT INTO lugar_tipo (id_lugar, id_tipo) VALUES (?,?)',
        [this.id_lugar, this.id_tipo]
    );
        
    }
    
    static fetchAllAccidente() {
        return db.execute('SELECT L.nombre_lugar, T.tipo_incidente, LT.fecha FROM lugar L, tipo T, lugar_tipo LT WHERE L.id_lugar = LT.id_lugar AND T.id_tipo = LT.id_tipo ORDER BY fecha DESC ');       
     }

}