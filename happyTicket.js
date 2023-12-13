export default function happyTicket(str) {
let strSplit = str.split('');
if(strSplit.length % 2 === 0) {
let sum_1 = 0;
let sum_2 = 0;
let half_1 = strSplit.slice(0, strSplit.length / 2);
for (const el of half_1) {
    sum_1 += +el;
}
let half_2 = strSplit.slice(strSplit.length / 2);
for (const el of half_2) {
    sum_2 += +el;
}
return sum_1 === sum_2;
}
return 'add digit';
}
