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



    // CONTENEDOR PRINCIPAL
    let contenedor = document.getElementById('container');



for(let i = 0; i < users.length; i++){
    if(users[i].email.endsWith('@academlo.com') === true){

        //CREAMOS TABLAS Y INGRESAMOS TEXTO DENTRO DE ELLAS
        let newRow = document.createElement('tr');
        contenedor.appendChild(newRow);

        let userName = document.createElement('td');
        userName.innerText = users[i].name;

        let userEmail = document.createElement('td');
        userEmail.innerText =  users[i].email;

        let userAge = document.createElement('td');
        userAge.innerText = users[i].age;

        let userGender = document.createElement('td');
        userGender.innerText = users[i].gender;

        let socialContainer = document.createElement('div');



        //RECORRIDO DEL CAMPO SOCIAL
        for(let index = 0; index < users[i].social.length; index++){
            let userSocial = document.createElement('td');
            userSocial.innerText = users[i].social[index].url;
            socialContainer.appendChild(userSocial);
        }



        //INGRESO DE LAS TABLAS A LA TABLA PRINCIPAL COMO HIJAS
        newRow.appendChild(userName);
        newRow.appendChild(userEmail);
        newRow.appendChild(userAge);
        newRow.appendChild(userGender);
        newRow.appendChild(socialContainer);
    }
}
