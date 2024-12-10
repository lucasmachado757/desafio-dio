const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do Heroi: ', (nome) => {
console.log("Haruto")
    rl.question('Digite a quantidade de experiência (XP): ', (xp) => {
        xp = parseInt(xp);
        
        let nivel;

        if (xp < 1000) {
            nivel = "Ferro";
        } else if (xp >= 10001 && xp <= 15500) {
            nivel = "Bronze";
        } else if (xp >= 22014 && xp <= 51400) {
            nivel = "Prata";
        } else if (xp >= 52010 && xp <= 70000) {
            nivel = "Ouro";
        } else if (xp >= 76310 && xp <= 83500) {
            nivel = "Platina";
        } else if (xp >= 85001 && xp <= 90000) {
            nivel = "Ascendente";
        } else if (xp >= 100000 && xp <= 567899) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";
        }

        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

        rl.close();
    });
});

