const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

/*
// Modo de iterar um array no formato padrão
// A
for(let i = 0; i < filmes.length; i = i + 1){

  console.log(`Filme: ${filmes[i].titulo}
Ano de lançamento: ${filmes[i].ano}
Diretor: ${filmes[i].diretor}`)
// B
for(let j = 0; j < filmes[i].elenco.length; j = j + 1){

  console.log(`${j + 1}º Ator do elenco: ${filmes[i].elenco[j]}`)

}
console.log(`-------------------------------------------------`)

}

// Modo de iterar um array usanado for...in e for...of
// A
for(let i in filmes){

  console.log(`Filme: ${filmes[i].titulo}
Ano de lançamento: ${filmes[i].ano}
Diretor: ${filmes[i].diretor}`)
// B
for(let j of filmes[i].elenco){

  console.log(`${filmes[i].elenco.indexOf(j) + 1}º Ator do elenco: ${j}`)

}
console.log(`-------------------------------------------------`)

}
*/

// let bimestre1 = [10, 10, 10, 10];
// let bimestre2 = [8, 9, 5, 7];
// let bimestre3 = [5, 8, 9.5, 7];
// let bimestre4 = [10, 10, 8, 9];

// let notaDoAno = [bimestre1, bimestre2, bimestre3, bimestre4];

// for(let i = 0; i < notaDoAno.length; i = i + 1){

//   let somaNotas = 0;

//   for(let j = 0; j < notaDoAno[i].length; j = j + 1){

//     somaNotas = somaNotas + notaDoAno[i][j]

//   }
//   let media = somaNotas / notaDoAno.length
//   console.log(`A soma das notas do ${i+1}° Bimestre é: ${somaNotas.toFixed(2)}
// A média das notas do ${i+1}º Bimestre é: ${media.toFixed(2)}`)
//   console.log(`-------------------------------------------`)
// }


let bimestre1 = [10, 10, 10, 10];
let bimestre2 = [8, 9, 5, 7];
let bimestre3 = [5, 8, 9.5, 7];
let bimestre4 = [10, 10, 8, 9];

let notaDoAno = [bimestre1, bimestre2, bimestre3, bimestre4];

for(let i in notaDoAno){

  let somaNotas = 0;

  for(let j of notaDoAno[i]){

    somaNotas = somaNotas + j

  }
  let media = somaNotas / notaDoAno.length
  console.log(`A soma das notas do ${parseInt(i)+1}° Bimestre é: ${somaNotas.toFixed(2)}
A média das notas do ${parseInt(i)+1}º Bimestre é: ${media.toFixed(2)}`)
  console.log(`-------------------------------------------`)
}