
module.exports = function () {
    var data = {
      persona:[
        {
          id_persona:1,
          nombre:"Luis Garcia",
          dni:788901202,
          telefonoPersona:921829525,
          correoPersona:"lugarcia001@gmail.com"

        },
        {
          id_persona:2,
          nombre:"Samanta Chavez",
          dniPersona:720012077,
          telefonoPersona:981271231,
          correoPersona:"samchavez021@gmail.com"
        },
        {
          id_persona:3,
          nombre:"Gonzalo Lacherre",
          dniPersona:77233900,
          telefonoPersona:900132763,
          correoPersona:"gonlach22192@gmail.com"
        },
        {
          id_persona:4,
          nombre:"Samuel Martinez",
          dniPersona:70911477,
          telefonoPersona:942566772,
          correoPersona:"sammartinez1288800@gmail.com"
        },
        {
          id_persona:5,
          nombre:"Jose Madero",
          dniPersona:71823082,
          telefonoPersona:981379980,
          correoPersona:"jomadero06@gmail.com"
        },
        {
          id_persona:6,
          nombre:"Vicente Torres",
          dni:79272231,
          telefonoPersona:917800120,
          correoPersona:"vicotorres010@gmail.com"

        },
        {
          id_persona:7,
          nombre:"Leonardo Santander",
          dni:78823011,
          telefonoPersona:923210111,
          correoPersona:"leosantander201@gmail.com"
        },
        {
          id_persona:8,
          nombre:"Domingo Cipria",
          dni:72301399,
          telefonoPersona:981234377,
          correoPersona:"domcipria12322@gmail.com"
        },
        {
          id_persona:9,
          nombre:"Diana Quintanilla",
          dni:72340033,
          telefonoPersona:907821290,
          correoPersona:"dianquinta_129@gmail.com"
        },
        {
          id_persona:10,
          nombre:"Cinthia Nuñez",
          dni:72321177,
          telefonoPersona:971137842,
          correoPersona:"cinthinuñ01999@gmail.com"
        }
      ],
      administrador:[
        {
          id_administrador:1,
          persona_id_persona:6
        },
        {
          idAdministrador:2,

            persona_id_persona:7

        },
        {
          idAdministrador:3,

            persona_id_persona:9

        }
      ],
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
