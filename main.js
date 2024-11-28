let words = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'Gul', 'mango', sabzi, 'limon'];


let user = words.filter(word => word.includes('n'));
console.log(user, "'n' harfi ishtirok etgan so'zlar");


let admin = words.filter(word => !word.includes('n'));
console.log(admin, "'n' harfi ishtirok etmagan so'zlar");