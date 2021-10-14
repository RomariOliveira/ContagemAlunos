let numAlunos = 5;
let listaAlunos = ["Romário", "Roberto", "Romulo", "Rivaldo", "Roberval", "Ricardo", "Rose", "Raquel"];
let cont = 0

for (let cont = 0; cont < listaAlunos.length; cont++) {
    // console.log(cont)  //para colocar um comentário usar "CRTL + ;"

    if (cont == 0) {
        console.log(cont + ": ZERO: " + listaAlunos[cont]) // concatenação de variável com STRING

    } else if (cont % 2 == 1) {
        console.log(`${cont}: ÌMPAR: ${listaAlunos[cont]}`)  // Interpolação utilizar dua crases `$():`

    } else {
        console.log(`${cont}: PAR: ${listaAlunos[cont]}`) // `${}`
    }
}

/*
while (cont < listaAlunos.length) {
    if (cont == 0) {
        console.log(cont + ": ZERO: " + listaAlunos[cont]) // concatenação de variável com STRING

    } else if (cont % 2 == 1) {
        console.log(`${cont}: ÌMPAR: ${listaAlunos[cont]}`)  // Interpolação utilizar dua crases `$():`

    } else {
        console.log(`${cont}: PAR: ${listaAlunos[cont]}`) // `${}`
    }

    cont++;

}
*/
