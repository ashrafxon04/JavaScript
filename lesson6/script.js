// let user = {
//     name: "John",
//     surname: "Smith",
// }
// user.name = "Pete";

// delete user.name;

// console.log(user);

// ==========================================================

// nomer2

// let schedule = {};

// const isEmpty = (schedule) => {
//   if (Object.keys(schedule).length == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isEmpty(schedule));

// ===============
// let meniu = {
//   width: 200,
//   height: 300,
//   title: "My meniu",
// };
// const multiplyNumeric = (meniu) => {
//   for (let i in meniu) {
//     if (typeof meniu[i] == "number") {
//       meniu[i] *= 2;
//     } else {
//       meniu[i];
//     }
//   }
// };
// multiplyNumeric(meniu);

// console.log(meniu);



// Create an object:
// const dasturchi = {
//   ism: "Ashrafxon",
//   yosh: 19,
//   salomlashish: function() {
//     console.log('salomalekum mening ismim :' + this.ism);
//   }
// }

// console.log(dasturchi.salomlashish()); // this methodi dan foydalanib object ichidagi xsusiyatlarini ishlatdik.

//

// const dasturchi = {
//   ism:"ashrafxon",
//   yosh: 19,
// }
// console.log(Object.keys(dasturchi));  //objectda faqat key larni qaytaradi
// console.log(Object.values(dasturchi));  //objecda faqat value larni qaytaradi
// console.log(Object.assign(dasturchi));  //bu 2 ta valueni togridan togri tengla quyadi
// console.log(Object.entries(dasturchi));  //bu bizga har bir qatorni array korinishida qaytarib beradi
// console.log(Object.freeze(dasturchi));  //bu malumotlarni muzlatadi
// console.log(Object.seal(dasturchi)); // bu objecda bor malumotni taxrirlashimizga imkon beradi
// console.log('ism' in dasturchi);  // bu object ichida malumot bor yuqligini aniqlab beradi "true" qaytsa malumot bor "false" qaytsa malumot yuq.
// for (let i in dasturchi){       // malumotni yani key larni ketma ket chiqarib beradi
//   console.log(i);
// }

