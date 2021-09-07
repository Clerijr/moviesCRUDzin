/*!
    * Start Bootstrap - SB Admin v7.0.3 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 
const movieArr = [
    {
        "_id": "6134393c22995f5f6cdef9e4",
        "name": "THE PRINCESS BRIDE",
        "director": "Rob Reiner",
        "year": 1987,
        "stars": 4,
        "review": "A delightfully postmodern fairy tale, The Princess Bride is a deft, intelligent mix of swashbuckling, romance, and comedy that takes an age-old damsel-in-distress story and makes it fresh.",
        "__v": 0
    },
    {
        "_id": "613689dc13f94183ea29a8a8",
        "name": "Heidenreich - Ebert",
        "director": "Tasha Hamill",
        "year": 177,
        "stars": 4.5,
        "review": "Dolorem in aut.",
        "gender": "Consultant",
        "__v": 0
    },
    {
        "_id": "613689dd13f94183ea29a8aa",
        "name": "Veum, King and Rice",
        "director": "Carlos Greenfelder",
        "year": 21,
        "stars": 4.5,
        "review": "Pariatur id et nobis voluptatem veritatis sint.",
        "gender": "Coordinator",
        "__v": 0
    },
    {
        "_id": "613689de13f94183ea29a8ac",
        "name": "Padberg - Runolfsdottir",
        "director": "Ms. Leo Zieme",
        "year": 314,
        "stars": 4.5,
        "review": "Harum minima odio vitae voluptatem.",
        "gender": "Orchestrator",
        "__v": 0
    },
    {
        "_id": "613689de13f94183ea29a8ae",
        "name": "Carroll - Rodriguez",
        "director": "Miss Terence Strosin",
        "year": 383,
        "stars": 4.5,
        "review": "Quasi error reprehenderit est aliquid sequi perferendis ab.",
        "gender": "Executive",
        "__v": 0
    },
    {
        "_id": "613689df13f94183ea29a8b0",
        "name": "Wiegand, Heaney and Johnston",
        "director": "Mrs. Rachel Lemke",
        "year": 295,
        "stars": 4.5,
        "review": "Consequatur rem ipsa fugit sunt.",
        "gender": "Engineer",
        "__v": 0
    },
    {
        "_id": "613689df13f94183ea29a8b2",
        "name": "Mertz and Sons",
        "director": "Timothy Stroman PhD",
        "year": 548,
        "stars": 4.5,
        "review": "Repellendus omnis omnis velit fugiat est.",
        "gender": "Director",
        "__v": 0
    },
    {
        "_id": "613689df13f94183ea29a8b4",
        "name": "Kutch - Stroman",
        "director": "David Okuneva",
        "year": 336,
        "stars": 4.5,
        "review": "Est dolor maiores autem necessitatibus quisquam molestias qui reiciendis adipisci.",
        "gender": "Coordinator",
        "__v": 0
    },
    {
        "_id": "613689e013f94183ea29a8b6",
        "name": "Bartell - Predovic",
        "director": "Dr. Cary Schroeder",
        "year": 499,
        "stars": 4.5,
        "review": "Voluptatum et eos velit ipsum cumque adipisci molestias aliquam dolorem.",
        "gender": "Associate",
        "__v": 0
    },
    {
        "_id": "613689e013f94183ea29a8b8",
        "name": "Schneider LLC",
        "director": "Brittany Olson",
        "year": 558,
        "stars": 4.5,
        "review": "Sapiente perferendis beatae dicta iure deserunt dolor in deleniti.",
        "gender": "Liaison",
        "__v": 0
    },
    {
        "_id": "613689e013f94183ea29a8ba",
        "name": "Walsh and Sons",
        "director": "Gregory Hegmann",
        "year": 328,
        "stars": 4.5,
        "review": "Ea deserunt voluptas natus fugit.",
        "gender": "Associate",
        "__v": 0
    },
    {
        "_id": "613689e113f94183ea29a8bc",
        "name": "Ondricka, Harris and Lang",
        "director": "Elbert Sporer PhD",
        "year": 520,
        "stars": 4.5,
        "review": "Est quas aut placeat maiores enim soluta placeat consequuntur.",
        "gender": "Manager",
        "__v": 0
    },
    {
        "_id": "613689e113f94183ea29a8be",
        "name": "Moen LLC",
        "director": "Bob Ferry",
        "year": 662,
        "stars": 4.5,
        "review": "Earum rerum nam qui deserunt architecto nisi.",
        "gender": "Strategist",
        "__v": 0
    }
]

var t = "";
for (var i = 0; i < movieArr.length; i++){
      var tr = "<tr>";
      tr += "<td class='text-center'>"+movieArr[i].name+"</td>";
      tr += "<td class='text-center'>"+movieArr[i].director+"</td>";
      tr += "<td class='text-center'>"+movieArr[i].year+"</td>";
      tr += "<td class='text-center'>"+movieArr[i].stars+"</td>";
      tr += "<td class='text-center'>"+movieArr[i].gender+"</td>";
      tr += "<td class='text-center'>"+movieArr[i].review+"</td>";
      tr += "</tr>";
      t += tr;
}
document.getElementById("moviesTable").innerHTML += t;
