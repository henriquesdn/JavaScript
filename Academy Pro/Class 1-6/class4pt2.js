// Time A
let timeA = "Real Madrid";
let pontuacaoA = 0;

// Time B
let timeB = "Barcelona";
let pontuacaoB = 0;


function addPlacar (placarTime, placarTimeAdversario, pontuacaoTime) {
    if (placarTime > placarTimeAdversario) {
        pontuacaoTime += 1;
    } else if (placarTime === placarTimeAdversario) {
        
    } else {
        switch(true) {
            case pontuacaoTime > 0:
                pontuacaoTime -= 1;
                break;
            default:
                break;
        }
    }

    return pontuacaoTime;
}

pontuacaoA = addPlacar(1, 1, pontuacaoA);
pontuacaoA = addPlacar(3, 0, pontuacaoA);
pontuacaoA = addPlacar(3, 1, pontuacaoA);

pontuacaoB = addPlacar(1, 2, pontuacaoB);
pontuacaoB = addPlacar(2, 2, pontuacaoB);
pontuacaoB = addPlacar(2, 0, pontuacaoB);

console.log(`O ${timeA} fez ${pontuacaoA} pontos.`);
console.log(`O ${timeB} fez ${pontuacaoB} pontos.`);