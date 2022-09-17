
module.exports = function () {
    var data = {
      agricultor: [
        {
          id_agricultor: 1,
          direccion: "Mz G Lote 13, Villa el Salvador",
          persona_id_persona: 1,
          /*persona_id_persona:{
            id:1
          }*/
        },
        {
            id_agricultor: 2,
            direccion: "Mz A Lote 7, Villa Maria del Triunfo",
            persona_id_persona: 3,
            /*persona_id_persona:{
              id:3
            }*/
        },
        {
            id_agricultor: 3,
            direccion: "Mz F Lote 21, La Molina",
            persona_id_persona: 2,
            /*persona_id_persona:{
              id:2
            }*/
        },
        {
            id_agricultor: 4,
            direccion: "Mz S Lote 27, San Isidro",
            persona_id_persona: 4,
            /*persona_id_persona:{
              id:4
            }*/

        },
        {
            id_agricultor: 5,
            direccion: "Mz F Lote 19, Ventanilla",
            persona_id_persona: 5,
            /*persona_id_persona:{
              id:5
            }*/

        },
      ],
      orden:[
        {
            id_orden:1,
            fechacompra:"24-05-2022",
            fechaenvio:"27-05-2022",
            fechaentrega: "29-05-2022",
            cantidad: 50,
            agricultor_id_agricultor:{
                id_agricultor:1,
              },
            mayorista_id_mayorista: 1,
              /*mayorista_id_mayorista:{
              id:1
            }*/
        },
        {
            id_orden:2,
            fechacompra:"14-09-2022",
            fechaenvio:"27-09-2022",
            fechaentrega: "30-09-2022",
            cantidad: 17,
            agricultor_id_agricultor:{
                id_agricultor:3,
              },
            mayorista_id_mayorista: 2,
              /*mayorista_id_mayorista:{
              id:2
            }*/
        },
        {
            id_orden:3,
            fechacompra:"14-12-2022",
            fechaenvio:"17-12-2022",
            fechaentrega: "29-12-2022",
            cantidad: 10,
            agricultor_id_agricultor:{
                id_agricultor:5,
              },
            mayorista_id_mayorista: 3,
              /*mayorista_id_mayorista:{
              id:3
            }*/
        }
      ],
      tipos: [
        {
          ID_Tipo: 1,
          Nombre: "Tuberculos"
        },
        {
          ID_Tipo: 2,
          Nombre: "Semillas"
        },
        {
          ID_Tipo: 3,
          Nombre: "Raíces"
        },
        {
          ID_Tipo: 4,
          Nombre: "Tallos"
        }
      ],
      productos: [
        {
          ID_Producto: 1,
          Nombre: "Haba",
          Precio: 10,
          Tipo: {
            ID_Tipo: 1
          }
        },
        {
          ID_Producto: 2,
          Nombre: "Papa",
          Precio: 7,
          Tipo: {
            ID_Tipo: 2
          }
        },
        {
          ID_Producto: 3,
          Nombre: "Rábano",
          Precio: 6,
          Tipo: {
            ID_Tipo: 3
          }
        },
        {
          ID_Producto: 4,
          Nombre: "Espárrago",
          Precio: 5,
          Tipo: {
            ID_Tipo: 4
          }
        }
      ]
  
    }
  
    return data
  }
  