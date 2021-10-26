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



