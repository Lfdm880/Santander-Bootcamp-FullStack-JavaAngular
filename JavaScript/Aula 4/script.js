var jogador1 = 0;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores sao validos') : console.log('jogadores inválidos');
if (jogador1 > 0) {
    console.log('jogador 1 marcou ponto')
} else if (jogador2 > 0) {
    console.log('jogador 2 marcou ponto')
}
else {
    console.log('Ninguém nao marcou')
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break
    case placar = jogador2 > jogador1:
        console.log('jogador 1 ganhou');

        break

    
}