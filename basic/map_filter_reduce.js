
// Q1. Given an array of objects users, print fullname.

// const arr=[1,2,3,4,5]

// const sum=arr.reduce((acc, next)=>(acc+next),0)
// console.log(sum);

// ---------------------------------------------------------------

// Q3.Print object having marks greater than 60 and rollNumber greater than 15.

// let student =[
//     {name:"Smith",rollNumber:31,marks:80},
//     {name:"Jenny",rollNumber:15,marks:69},
//     {name:"John",rollNumber:16,marks:35},
//     {name:"Tiger",rollNumber:7,marks:55}
//    ];

// const newSt=student.filter((item)=> item.marks>60 && item.rollNumber>15)
// console.log(newSt);

//-------------------------------------------------------------

// Q4.Print sum of marks of all the student

// let student =[
//     {name:"Smith",rollNumber:31,marks:80},
//     {name:"Jenny",rollNumber:15,marks:69},
//     {name:"John",rollNumber:16,marks:35},
//     {name:"Tiger",rollNumber:7,marks:55}
//    ];

//    const newST=student.reduce((acc,item)=>(acc+item.marks),0)
//    console.log(newST);


   //-------------------------------------------------------------

//    Q5.List of all firstName from array whose age is more than 30
// const users=[
//   {firstName:"john",lastName:"Biden",age:26},
//   {firstName:"jimmy",lastName:"Cob",age:75},
//   {firstName:"Sam",lastName:"Lewis",age:50},
//   {firstName:"Ronald",lastName:"Mathew",age:26},  
// ];
// //Chaining
// const output=users.filter((x)=>x.age<30).map((x)=>x.firstName);
// console.log(output);

//-------------------------------------------------------------------------------

// Q6.Print the names of students who scored more than 60
// let student =[
//  {name:"Smith",rollNumber:31,marks:80},
//  {name:"Jenny",rollNumber:15,marks:69},
//  {name:"John",rollNumber:16,marks:35},
//  {name:"Tiger",rollNumber:7,marks:55}
// ];

// const anotherSt=student.filter((item)=>(item.marks>60)).map((item)=> item.name)
// console.log(anotherSt);

// ------------------------------------------------------------------------------
// Q7.Print total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
let student =[
 {name:"Smith",rollNumber:31,marks:80},
 {name:"Jenny",rollNumber:15,marks:69},
 {name:"John",rollNumber:16,marks:35},
 {name:"Tiger",rollNumber:7,marks:55}
];

const newST=student.map((item)=> {
    
    if(item.marks<60)
{
item.marks+=20;
}
return item;}).reduce((acc, item)=>(acc+item.marks),0)
console.log(newST);


