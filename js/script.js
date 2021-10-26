const eMail = prompt("Inserire eMailS");

const eMailist = ['Anthony',
'Andrea B',
'Federico',
'Cristian',
'Davide T',
'Alberto',
'Mauro',
'Matteo D',
'Michele',
'Matteo F',
'Andrea F',
'Simone P',
'Mattia G',
'Larisa',
'Manuel',
'Matteo L',
'Francesco',
'Morena',
'Mattia M',
'Simone F',
'Mariano',
'Vitali',
'Gianluca',
'Giuseppe',
'Salvatore',
'Giada',
'Giulia Sa',
'Benjamin',
'Giulia So',
'Luca S',
'Davide C',
'Luigi',
'Luca V'];

for (let i = 0; i <     eMailist.length; i++ ){
    if(eMail === eMailist[i]){
        const nome = document.getElementById("control");
        control.innerHTML = 'eMail valida';
        break;
    }
    else{
        const nome = document.getElementById("control");
        control.innerHTML = 'eMail non valida';
    }
}


let pg = Math.floor(Math.random() * 6) + 1;
let cpu = Math.floor(Math.random() * 6) + 1;

const dicepg = document.getElementById("dicepg");
dicepg.innerHTML = pg;

const dicecpu = document.getElementById("dicecpu");
dicecpu.innerHTML = cpu;

if (pg > cpu){
    const winner = document.getElementById("winner");
    winner.innerHTML = 'il vincitore è il giocatore';
} else if (pg < cpu){
    const winner = document.getElementById("winner");
    winner.innerHTML = 'il vincitore è il computer';
} else {
    const winner = document.getElementById("winner");
    winner.innerHTML = 'il vincitore non è nessuno, o entrambi, come preferisci';
}


