const inquirer = require('inquirer');
//console.log(inquirer);//
inquirer
    .promp(
    [
    {
     type: 'input',
     message: 'Como te llamas? ',
     name: 'nombreCliente',
    },
    { 
    type : 'input',
    message: 'Ingresa tu nunero de telefono',
    name: 'telefonoCliente',
    },
    {
     type : 'rawlist',
     message : 'Elegi el gusto de la pizza',
     name:'gustoPizza',
     choice : ['Muzza', 'Napo','Jamon', '4 Quesos'],
    },
    {
     type: 'list',
     message : 'Ingrese el tamaño',
     name: 'tamaño',
     choice: ['Personal', 'Mediana', 'Grande'],
    },
    {
     type: 'list',
     message: 'Elegi el gusto de la bebida',
     choices: ['Coca-cola', 'Pepsi', 'Manaos'],
     when : (respuestas) => {
         return respuestas.conBebida === true;
     }
    },
    {
     type:'checkbox',
     message : 'Elegi el gusto de las empanadas',
     name: 'Empanadas',
     choices : ['Carne', 'Pollo', 'Margarita', 'Calabresa', 'jamon y queso', 'Roquefort'],
     when : (respuestas) => {
         return respuestas.clienteHabitual === true;
     },   
    },
    {
     type : 'confirm',
     message: '¿la pizza es para delivery?',
     name : 'Es para llevar?',
     default: false,
    },
    {
     type: 'confirm',
     message : '¿Sos cliente habitual?',
     name : 'Bienvenido, que bueno verte devuelta',     
     default: false,
    }
    ]
    )
    .then(function(respuestas){
        console.log(respuestas);
});