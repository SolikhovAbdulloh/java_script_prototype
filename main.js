
// delete arr[2]

// arr.push("gul"); arrayning oxiridan qoshadi
// arr.push("pul");
// arr.push("hul");
// arr.pop() oxirgi indexni olib tashlaydi
// arr.pop()
// arr.pop()

// arr.unshift("salom"); index boshiga qoshish
// arr.unshift("salom");
// arr.unshift("salom");
// arr.unshift('salom')

// arr.shift(); boshidan olib tashlash
// arr.shift();

// arr.splice(2 ,'jjj')

// let arr2 = [1,2,3,4,5]

// console.log(arr.indexOf(undefined)); arraydagi stringni indexni qaytaradi 2 qaytadi
// console.log(arr.lastIndexOf(undefined))

// arr2 = arr2.concat(arr) arraydagi indexlarni qoshish

// function funcFive(a,b){
//     count = 0
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] % 5 === 0){
//             arr.splice(i , 1)
//         }
//         count++
//     }
//     console.log(arr);
//     console.log(count)

// }


// funcFive(arr)

// function calc (n,m){
//     let count = 0;

//     for(let i = n ; i <= m ; i++ ){
//         if(!String(i).includes('5'))
//             count++

//     }
//     return count
// }

// console.log(calc(4,17));

// "use strict"

// a = 30

// console.log(a);

// console.log(arr.reverse());

//bu foreEach() metodi arr ni interatsiya uchun ishlatiladi call back funksiya qabul qiladi. return qaytarmaydi

// arr.forEach(function (itm, index, arr) { 
//   console.log(itm);

// });
// let arr = [1, 1, 3, 5, 5, 7, 7, 9];


// let newarr = arr.map(function (itm , index, Array)  {
//    return  itm + 2})
// // })
//     console.log(newarr)

// let users = [
//   {
//     Id: 1,
//     surname: "solikhov",
//     name: "abdulloh",
//     age: 25,
//     price:1000,
//   },
//   {
//     id: 3,
//     surname: "tolipov",
//     name: "jura",
//     age: 20,
//     price:2000,
//   },
// ];

//   filter function

// let juftsonlar = arr.filter((son) => {
//   return son % 2 == 0;
// });

// console.log(juftsonlar);

// let object = users.filter((item)=>item.age > 10) saralash uchun kerak bizga

// console.log(object);


// let produce = users.reduce((acc,value)=>{
//     return (acc += value.age);

// },0)
//     console.log(produce);  yigindisni hisbolash uchun ishlatiladi asosan count orqali qilingan funk ga oxshash



//some()bu huddi || vazifasini bajardi yani true bita bolsa true qaytaradi

// let arr4 = arr.some((item) => item % 2 === 0); 

// console.log(arr4);


// && vazifasi bir xil

// let juftsonlar =arr.every((item) => item % 2 === 1)

// console.log(juftsonlar);


//find() bu yerda shart togri bolsa birinchi true miqdorni qaytaradi aks holda undefined qaytaradi

// let topilganson = arr.find((son) => son > 8)
            
// console.log(topilganson)



// Array.prototype.myForeach = function (cb){
//     for(let i = 0 ; i < this.length ; i++)
//         cb(this[i] , i , this)
// }

// users.myForeach((item)=>{
//     item.name = 'Hayrulloh'    
// })

// console.log(users);
                                                      
                                                   //Homework
 //1-masala
// Array.prototype.myMap = function (cb){
//     let this2 = []

//     for(let i = 0 ; i < this.length ; i++){
//         this2.push(cb(this[i],i,this))
//     }
//     return this2

// }

// let arr6 = arr.myMap((itm)=>{

//      return itm * 2; 
// });

    

// console.log(arr6);

//2-masala

// Array.prototype.myRoduce = function (cb) {
//   let this2 = 0;

//   for (let i = 0; i < this.length; i++) {
//     this2 += cb(this[i], i, this);
//   }

//   console.log(this2); 
//   return this2;
// };
    
//     let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.myRoduce((item) => item);

// console.log(sum); 

// Array.prototype.Myfilter = function (cb) {
//     let newArray = []; 

//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)) {
//             newArray.push(this[i]); 
//         }
//     }
//     return newArray; 
// };

// let numbers = [1, 4, 3, 2, 5];
// let Numbers = numbers.Myfilter((item) => item % 2 == 0);

// console.log(Numbers);


//4-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.MySome = function (cb){

//     for(let i = 0 ; i < this.length ; i++ ){
//         if(cb(this[i],i,this)){
//             return true
            
//         }
//     }
//     return false
// }
    
//     let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.MySome((item) => item % 2 == 0);

// console.log(sum); 

  //5-masala

// Array.prototype.Myfind = function (cb){

//     let newArr = []

//     for(let i = 0 ; i < this.length ; i++ ){
//         if(cb(this[i],i,this)){
//             return true
            
//         }
//     }
//     return undefined
// }
    
//     let numbers = [5, 1];
// let sum = numbers.Myfind((item) => item % 2 == 0);

// console.log(sum); 


// 6-masala


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.Myevery = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     if (!cb(this[i], i, this)) {
//       return false;
//     }
//   }
//   return true;
// };

// let numbers = [2, 2, 6, 4, 4];
// let sum = numbers.Myevery((item) => item % 2 == 0);

// console.log(sum); 


  


