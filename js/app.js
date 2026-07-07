// class Customer{
//     name;
//     age;
//     address;

//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//     getName(){
//         return this.name;
//     }
//     setName(name){
//         this.name = name;
//     }
// }

// let customer1 = new Customer("Sharadha", 20, "Bangalore");
// console.log(customer1);
// console.log(customer1.getName());

// ---------------------------------------------

// let customer2 = {
//     name: "John",
//     age: 25,
//     address: "New York",
//     salary: 50000,
//     items: [
//         {
//             id: 1,
//             name: "item1",
//             price: 100,
//             variants: [
//                 {
//                     id: 1,
//                     name: "variant1",
//                     price: 10
//                 },
//                 {
//                     id: 2,
//                     name: "variant2",
//                     price: 20

//                 }
//             ]
//         }, {
//             id: 2,
//             name: "item2",
//             price: 200
//         }, {
//             id: 3,
//             name: "item3",
//             price: 300
//         }
//     ],
//     father: {
//         name: "Doe",
//         age: 50,
//         address: "New York"
//     }
// };
// console.log(customer2.name);
// console.log(customer2.age);
// console.log(customer2.address);
// console.log(customer2.salary);
// console.log(customer2.items[2].name);
// console.log(customer2.father.name);

// DOM (Document Object Model) Manipulation -----------------------------------------------

// document.write("<h2>Hello, World! 02</h2>");

// console.log(document.title);


// let heading = document.getElementById("heading");

// heading.innerText = "Gavindu";

// console.log(heading.);

// function changeHeading() {
//     heading.innerText = "Gavindu";
//     console.log("Clicked");
// }

// let number = 0;
// function changeHeading1() {
//     heading.innerText = "Gavindu"+(++number);
//     console.log("Clicked");
// }

// function changeHeading2() {
//     heading.innerText = "Gavindu"+(--number);
//     console.log("Clicked");
// }

// function changeHeading() {

//     let txtInput = document.getElementById("inputText");

//     let userInput = txtInput.value;

//     console.log(userInput);

//     let heading = document.getElementById("heading");

//     heading.innerText=userInput;

// }

// function changeHeading1() {

//     let txtInput1 = document.getElementById("inputText01");
//     let txtInput2 = document.getElementById("inputText02");

//     let number1 = Number(txtInput1.value);
//     let number2 = Number(txtInput2.value);

//     let answer = number1 + number2;

//     let heading = document.getElementById("heading");

//     heading.innerText = answer;
// }

// function changeHeading2() {

//     let txtInput1 = document.getElementById("inputText01");
//     let txtInput2 = document.getElementById("inputText02");

//     let number1 = Number(txtInput1.value);
//     let number2 = Number(txtInput2.value);

//     let answer = number1 - number2;

//     let heading = document.getElementById("heading");

//     heading.innerText = answer;
// }

let customerList = [];

function btnAddCustomerOnAction(){
    let txtName = document.getElementById("txtName").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtSalary = document.getElementById("txtSalary").value;

    let customer={
        name:txtName,
        address:txtAddress,
        age:txtAge,
        email:txtEmail,
        salary:txtSalary
    }

    customerList.push(customer);
    loadTable();

    console.log(customerList);
      
}

function loadTable(){
    let tblCustomers = document.getElementById("tblCustomers");

    let body ="";

    for(let i =0; i<customerList.length; i++){
            body +=
                    `<tr>
                        <td>${customerList[i].name}</td>
                        <td>${customerList[i].address}</td>
                        <td>${customerList[i].age}</td>
                        <td>${customerList[i].email}</td>
                        <td>${customerList[i].salary}</td>
                    </tr>`;
    }

    tblCustomers.innerHTML=body;

    console.log(tblCustomers)
    
}