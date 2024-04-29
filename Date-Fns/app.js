
// ======================== Date Fns =============================
// let myTime1 = dateFns.format(new Date(2024, 3, 20, 13, 45, 30), "MM/dd/yyy HH:mm:ss");


let Time1 = dateFns.format(new Date(2024,3,20,13,45,30),"MM/dd/yyyy HH:mm:ss");
let Time2 = dateFns.format(new Date(2024,3,20,13,45),"E dd/M/yyyy HH:mm");
let Time3 = dateFns.format(new Date(2024,3,20,3,45),"yyyy-MM-dd h:mm EEEE");
let Time4 = dateFns.format(new Date(2024,3,20,13,45,30),"MMMM do,yyyy hh.mm.ss a");
let Time5 = dateFns.format(new Date(2024,3,20,13,45,30),"dd MMMM yyyy 'at' hh:mm a");



console.log(Time1)
console.log(Time2)
console.log(Time3)
console.log(Time4)
console.log(Time5)