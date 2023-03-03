
//Object --> {}

// const accaunt = { 
// name: "webbrain",
// major: "footer", }
// Object.freeze( accaunt);
// accaunt.major = 55454;
// accaunt["major"] = "it center";
// delete accaunt.name;
// console.log(accaunt);            //{ name: 'webbrain', major: 'footer' } chunki malumotlar muzlabtikib quyiladi || freeze || borligi uchun.
//=======================================


// const accaunt = { 
// name: "webbrain",
// major: "footer", }
// Object.seal( accaunt);
// accaunt.major = 55454;
// accaunt["major"] = "it center";
// delete accaunt.name;
// console.log(accaunt);            //{ name: 'webbrain', major: 'it center' } chunki malumotlarni uzgartirsa buladi || seal --> taxrirlab beradi||.
//=======================================

// const acc1 ={ name:"webbrain", major:"Full Stack Developer"};
// const acc2 ={ name:"webbrain", major:"Full Stack Developer"};
// const acc3 = acc1;

// console.log( acc1 == acc3 );
// console.log( acc1 === acc3 );   // true , true -->  chiqadi chunki acc3 ni acc1 ga tenglab quyabdi natijada qiymatlar true qaytaryabdi.
//=======================================

// let acc1 = {
//     name: "tursinxon",
//     major: "front end",
//     STUDENTS: 200,
//     FOUNDES:2020,
// }
// for ( let i in acc1){
//     console.log(i);
// }
