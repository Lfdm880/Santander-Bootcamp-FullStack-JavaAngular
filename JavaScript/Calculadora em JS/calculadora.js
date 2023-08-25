function calculadora() {
    const operacao = prompt("Escolha uma operação:\n 1- Soma(+)\n 2- Subtração(-)\n 3- Divisao Real (/)\n 4- Multiplicação(*)\n 5- Divisao Intera (%)\n 6- Potenciação(**)")//O prompt é uma função incorporada do JavaScript que permite interagir com o usuário por meio de caixas de diálogo
    if (!operacao || operacao >= 7) {
        alert("por favor insira uma opção válida")
        calculadora();
        alert("por favor insira uma opção válida")
    } else {
        let n1 = Number(prompt("insira o primeiro valor")); //a funcao Number() vai converter o valor de string para um number
        let n2 = Number(prompt("insira o segundo valor"));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos')
            calculadora()
        } else {

            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao()
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao()
            }
            function divReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao()
            }
            function multiplica() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao()
            }
            function divInt() {
                resultado = n1 % n2;
                alert(`o resto da divisão entre ${n1} e ${n2} é = ${resultado}`);
                novaOperacao()
            }
            function potencia() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} = ${resultado}`);
                novaOperacao()
            }
            function novaOperacao() {
                let opcao = prompt("Deseja fazer uma nova operaçãon?\n 1- Sim \n 2- Nâo")
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert("Até mais")
                } else {
                    alert("Digite uma opção válida");
                    novaOperacao()
                }


            }


            if (operacao == 1) {
                soma();
            } else if (operacao == 2) {
                subtracao();

            } else if (operacao == 3) {
                divReal();
            } else if (operacao == 4) {
                multiplica();

            } else if (operacao == 5) {
                divInt();
            } else if (operacao == 6) {
                potencia();
            }

            // switch (operacao) {
            //     case 1:
            //         soma();
            //         break
            //     case 2:
            //         subtracao();
            //         break
            //     case 2:
            //         divReal();
            //         break
            //     case 4:
            //         multiplica();
            //         break
            //     case 5:
            //         divInt();
            //         break
            //     case 6:
            //         potencia();
            //         break

            // }
        }
    }
}

calculadora();