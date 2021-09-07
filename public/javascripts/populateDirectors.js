/*!
    * Start Bootstrap - SB Admin v7.0.3 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 
const directorArr = [
    {
        "_id": "61377082753056056aa043df",
        "name": "Guillermo Del Toro",
        "nationality": "Mexican",
        "age": 56,
        "awards": [
            "2018 Best Picture",
            "2018 Best Director"
        ],
        "__v": 0
    },
    {
        "_id": "6137754bc5a5d77b41e029ac",
        "name": "Nelson Von",
        "nationality": "Lithuania",
        "age": 374,
        "awards": [
            "Sleek Rubber Car",
            "Incredible Granite Table",
            "Tasty Cotton Pizza",
            "Incredible Concrete Gloves",
            "Handmade Metal Ball"
        ],
        "__v": 0
    },
    {
        "_id": "6137754cc5a5d77b41e029ae",
        "name": "Carl Tremblay MD",
        "nationality": "Bulgaria",
        "age": 649,
        "awards": [
            "Incredible Plastic Chicken",
            "Fantastic Wooden Tuna",
            "Practical Metal Gloves",
            "Gorgeous Soft Keyboard",
            "Rustic Wooden Keyboard"
        ],
        "__v": 0
    },
    {
        "_id": "6137754dc5a5d77b41e029b0",
        "name": "Rebecca VonRueden",
        "nationality": "Barbados",
        "age": 374,
        "awards": [
            "Gorgeous Plastic Pizza",
            "Fantastic Metal Ball",
            "Ergonomic Rubber Keyboard",
            "Tasty Rubber Chair",
            "Awesome Cotton Towels"
        ],
        "__v": 0
    },
    {
        "_id": "6137754dc5a5d77b41e029b2",
        "name": "Lois Kuphal",
        "nationality": "Lithuania",
        "age": 377,
        "awards": [
            "Intelligent Concrete Bike",
            "Intelligent Steel Soap",
            "Handmade Granite Mouse",
            "Generic Frozen Computer",
            "Handcrafted Rubber Chair"
        ],
        "__v": 0
    },
    {
        "_id": "6137754ec5a5d77b41e029b4",
        "name": "Mercedes Schimmel V",
        "nationality": "Nigeria",
        "age": 957,
        "awards": [
            "Intelligent Granite Soap",
            "Refined Metal Fish",
            "Sleek Fresh Fish",
            "Refined Steel Tuna",
            "Generic Rubber Sausages"
        ],
        "__v": 0
    },
    {
        "_id": "6137754ec5a5d77b41e029b6",
        "name": "Reginald Cummerata",
        "nationality": "Nepal",
        "age": 311,
        "awards": [
            "Generic Wooden Chicken",
            "Practical Steel Pants",
            "Incredible Granite Cheese",
            "Licensed Rubber Chips",
            "Practical Fresh Salad"
        ],
        "__v": 0
    },
    {
        "_id": "6137754fc5a5d77b41e029b8",
        "name": "Angela Hauck",
        "nationality": "Lithuania",
        "age": 447,
        "awards": [
            "Gorgeous Granite Hat",
            "Tasty Steel Fish",
            "Tasty Soft Pizza",
            "Rustic Concrete Shoes",
            "Licensed Cotton Sausages"
        ],
        "__v": 0
    },
    {
        "_id": "6137754fc5a5d77b41e029ba",
        "name": "Daryl Hartmann DVM",
        "nationality": "Christmas Island",
        "age": 715,
        "awards": [
            "Practical Granite Hat",
            "Fantastic Frozen Salad",
            "Awesome Rubber Cheese",
            "Gorgeous Plastic Bike",
            "Handmade Granite Table"
        ],
        "__v": 0
    },
    {
        "_id": "6137754fc5a5d77b41e029bc",
        "name": "Wilson Gutkowski",
        "nationality": "Macedonia",
        "age": 906,
        "awards": [
            "Refined Steel Pizza",
            "Sleek Fresh Hat",
            "Tasty Concrete Tuna",
            "Fantastic Soft Sausages",
            "Unbranded Rubber Hat"
        ],
        "__v": 0
    }
]

var d = "";
for (var i = 0; i < directorArr.length; i++){
      var tr = "<tr>";
      tr += "<td class='text-center'>"+directorArr[i].name+"</td>";
      tr += "<td class='text-center'>"+directorArr[i].nationality+"</td>";
      tr += "<td class='text-center'>"+directorArr[i].age+"</td>";
      tr += "<td class='text-center'>"+directorArr[i].awards+"</td>";
      tr += "</tr>";
      d += tr;
}

document.getElementById("directorsTable").innerHTML += d;