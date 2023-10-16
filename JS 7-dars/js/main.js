/* indexof - matn ichidan so'zlarning tartib raqamini aniqlash */

/*let matn = "sen gapir men esa sen bilan yozib boramz";*/
/*let birinchiSenIndeksi = matn.indexOf('sen');*/
/*console.log(matn.indexOf('sen',birinchiSenIndeksi +1));*/

/* replace - matndagi so'zni almashtirib qo'yish */

/*let matn = "Salom hammaga! salom berdim hammaga! salom salom";*/
/*console.log(matn.replace(/salom|hammaga|berdim/gi,'alik'));*/
/*let yangiMatn = matn.replace(/salom|hammaga/gi,function (soz){
    if (soz == 'Salom' || soz == 'salom'){
        return 'alik';
    }
    else if (soz == 'hammaga'){
        return 'barchaga';
    }
})*/
/*console.log(yangiMatn)*/

/* slide - matn ichidan kerakli qismini ajratib olish */

/*let matn = "Quyosh sharqdan chiqib g'arbga botadi"*/
/*console.log(matn.slice(-15));*/

/* Pop & Push - arrayga ma'lumot qo'shish va ma'lumotni o'chirish */

/*let list = [];*/
/*list.push('Dell');*/
/*list.push('45')*/
/*list.push('HP')*/
/*list.push('78')*/
/*list.push('Sony')*/
/*list.push('89')*/
/*console.log(list)*/
/*console.log(list.pop())*/
/*console.log(list)*/
/*console.log(list.pop())*/
/*console.log(list)*/
/*console.log(list.pop())*/
/*console.log(list)*/
/*console.log(list.pop())*/
/*console.log(list)*/
/*console.log(list.length);*/

/* unshift & shift - arrayga ma'lumot qo'shish va ma'lumotni o'chirish*/

/*let list = [];*/
/*list.unshift('iPhone');*/
/*list.unshift('15');*/
/*list.unshift('Samsung');*/
/*list.unshift('23');*/
/*list.unshift('ReDMi');*/
/*list.unshift('13');*/
/*console.log(list)*/
/*console.log(list.shift())*/
/*console.log(list);*/
/*console.log(list.length);*/
/*console.log(list.shift());*/
/*console.log(list);*/
/*console.log(list.shift());*/
/*console.log(list);*/
/*console.log(list.shift());*/

/*let list = ['Sevinch', 'Fazilat','Baxtiyor', 'Nomonjon', 'Abdulloh','Muhammadali', 'Abdulaziz', 'Sunnatbek']*/

/*console.log(list.sort().reverse())*/

let sonlar = [110,95,7,777,56,9,510,11];
let tartiblanganSonlar =  sonlar.sort(function (a,b){
    return a-b;
})

console.log(tartiblanganSonlar.reverse());





