const eMail = prompt("Inserire eMailS");

const eMailist = [
    'simonefranzoni99@gmail.com',
    'qualcosa@hotmail.it',
    'franzoni1999@gmail.com',
];

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


