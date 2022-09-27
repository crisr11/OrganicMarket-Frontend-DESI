
module.exports = function () {
    var data = {
      persona:[
        {
          id:1,
          nombre:"Luis Garcia",
          dni:788901202,
          telefono:921829525,
          correo:"lugarcia001@gmail.com"

        },
        {
          id:2,
          nombre:"Samanta Chavez",
          dni:720012077,
          telefono:981271231,
          correo:"samchavez021@gmail.com"
        },
        {
          id:3,
          nombre:"Gonzalo Lacherre",
          dni:77233900,
          telefono:900132763,
          correo:"gonlach22192@gmail.com"
        },
        {
          id:4,
          nombre:"Samuel Martinez",
          dni:70911477,
          telefono:942566772,
          correo:"sammartinez1288800@gmail.com"
        },
        {
          id:5,
          nombre:"Jose Madero",
          dni:71823082,
          telefono:981379980,
          correo:"jomadero06@gmail.com"
        },
        {
          id:6,
          nombre:"Vicente Torres",
          dni:79272231,
          telefono:917800120,
          correo:"vicotorres010@gmail.com"

        },
        {
          id:7,
          nombre:"Leonardo Santander",
          dni:78823011,
          telefono:923210111,
          correo:"leosantander201@gmail.com"
        },
        {
          id:8,
          nombre:"Domingo Cipria",
          dni:72301399,
          telefono:981234377,
          correo:"domcipria12322@gmail.com"
        },
        {
          id:9,
          nombre:"Diana Quintanilla",
          dni:72340033,
          telefono:907821290,
          correo:"dianquinta_129@gmail.com"
        },
        {
          id:10,
          nombre:"Cinthia Nuñez",
          dni:72321177,
          telefono:971137842,
          correo:"cinthinuñ01999@gmail.com"
        }
      ],
      administrador:[
        {
          id_administrador:1,
          persona_id_persona:{
            id:6
          }
        },
        {
          id_administrador:2,

          persona_id_persona:{
            id:7
          }

        },
        {
          id_administrador:3,

          persona_id_persona:{
            id:9
          }

        }
      ],
      agricultor: [
        {
          id: 1,
          direccion: "Mz G Lote 13, Villa el Salvador",
          persona_id_persona: 1
        },
        {
            id: 2,
            direccion: "Mz A Lote 7, Villa Maria del Triunfo",
            persona_id_persona: 3
        },
        {
            id: 3,
            direccion: "Mz F Lote 21, La Molina",

            persona_id_persona:2 
        },
        {
            id: 4,
            direccion: "Mz S Lote 27, San Isidro",

            persona_id_persona:4

        },
        {
            id: 5,
            direccion: "Mz F Lote 19, Ventanilla",

            persona_id_persona:5

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
              mayorista_id_mayorista:{
              id:1
            }
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
              mayorista_id_mayorista:{
              id:2
            }
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
              mayorista_id_mayorista:{
              id:3
            }
        }
      ],
      tipos: [
        {
          id: 1,
          Nombre: "Tuberculos"
        },
        {
          id: 2,
          Nombre: "Semillas"
        },
        {
          id: 3,
          Nombre: "Raíces"
        },
        {
          id: 4,
          Nombre: "Tallos"
        }
      ],
      productos: [
        {
          id: 1,
          Nombre: "Haba",
          Precio: 10
        },
        {
          id: 2,
          Nombre: "Papa",
          Precio: 7
        },
        {
          id: 3,
          Nombre: "Rábano",
          Precio: 6
        },
        {
          id: 4,
          Nombre: "Espárrago",
          Precio: 5
        }
      ],
      mayoristas: [
        {
            id: 1,
            rubro: "Frutas",
            RUC: "32121",
            nombre: "Juan Gonzales"
        },
        {

          id: 2,
          rubro: "Verduras",
          RUC: "34329",
          nombre: "Nancy Guevara"
        },
        {
            id: 3,
            rubro: "Frutas",
            RUC: "9372",
            nombre: "Liliana Prado"
         }
    ],
    acuerdos: [
        {
            id: 1,
            descuento: 0.05,
            fechaInicio: new Date(2022, 8, 5),
            fechaFin: new Date(2022, 10, 5),
            agricultor:{
                id:12
            },
            mayorista:{
                id:13
            }
        },
        {
            id: 2,
            descuento: 0.05,
            fechaInicio: new Date(2022, 8, 5),
            fechaFin: new Date(2022, 10, 5),
            agricultor:{
                id:12
            },
            mayorista:{
                id:14
            }
        },
        {
            id: 3,
            descuento: 0.05,
            fechaInicio: new Date(2022, 8, 10),
            fechaFin: new Date(2022, 10, 5),
            agricultor:{
                id:15
            },
            mayorista:{
                id:16
            }
        }
    ],
    promociones:[
      {
          id_promocion: 1,
          agricultor:{
            id_agricultor: 1
          },
          producto:{
            id_producto: 3
          },
          fechaInicio:new Date(2022,9,17),
          fechaFin:new Date(2022,10,17)
      },
      {
          id_promocion: 2,
          agricultor:{
          id_agricultor: 2
          },
          producto:{
          id_producto: 2
          },
          fechaInicio:new Date(2022,11,17),
          fechaFin:new Date(2022,12,17)
      },
      {
          id_promocion: 3,
          agricultor:{
          id_agricultor: 3
          },
          producto:{
          id_producto: 1
          },
          fechaInicio:new Date(2022,7,17),
          fechaFin:new Date(2022,8,17)
      }
  ],
  publicaciones:[
      {
          id: 1,
          contenido:"frutas",
          agricultor:{
          id_agricultor: 3
          },
          producto:{
          id_producto: 3
          }
      },
      {
          id: 2,
          contenido: "verduras",
          agricultor:{
          id_agricultor: 4
          },
          producto:{
          id_producto: 2
          }
      },
      {
          id: 3,
          contenido: "legumbres",
          agricultor:{
          id_agricultor: 5
          },
          producto:{
          id_producto: 1
          }
      }
  ],

      detalleorden:[
        {
          dorden:{
            id_orden:1,
          },
          producto:{
            id_producto:1,
          }
        },
        {
          dorden:{
            id_orden:2,
          },
          producto:{
            id_producto:2,
          }
        },
        {
          dorden:{
            id_orden:3,
          },
          producto:{
            id_producto:3,
          }
        }
    ]

    }




    return data
  }
