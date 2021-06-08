const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
];



for(let i = 0; i < users.length; i++){
    if(users[i].email.endsWith('@academlo.com') === true){
        
        // AGREGO CONTENEDOR TR POR CADA ELEMENTO positivo
        let contenedor = document.getElementById('container');

        (function(){
            let Fila = document.createElement('tr');
            Fila.setAttribute('id', 'Fila');
            contenedor.appendChild(Fila);


        // INSERTA DE DATOS

            // Nombre
            let Name = document.createElement('td');
            Name.innerText = users[i].name;
            Fila.appendChild(Name);

            // Email
            let Email = document.createElement('td');
            Email.innerText = users[i].email;
            Fila.appendChild(Email);

            // Edad
            let Edad = document.createElement('td');
            Edad.innerText = users[i].age;
            Fila.appendChild(Edad);

            // Sexo
            let Sexo = document.createElement('td');
            Sexo.innerText = users[i].gender;
            Fila.appendChild(Sexo);

            // Redes Sociales
            let Redes = document.createElement('td');
            Fila.appendChild(Redes);

            let Lista = document.createElement('ul');
            Redes.appendChild(Lista);
            

            // MEJORAR CODIGO

            let Elements = document.createElement('li');
            Lista.appendChild(Elements);

            let Networks1 = document.createElement('a');
            Networks1.innerText = users[i].social[0].url;
            Lista.appendChild(Networks1);

            let Networks2 = document.createElement('a');
            Networks2.innerText = users[i].social[1].url;
            Lista.appendChild(Networks2);

            
        })();

    }
}
