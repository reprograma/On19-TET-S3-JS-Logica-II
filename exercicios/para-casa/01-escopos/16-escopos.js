/*
  Não altere nada no código, apenas adicione um valor a variável 'resposta'!
  Execute o código e veja se acertou no terminal
  ex: const resposta = 5;
*/
console.clear(); //Irá limpar o terminal para você
const resposta = 11; //insira o valor da final variável 'estudo' aqui
let estudo = 10;
const multiplicador = 2;

if (estudo === 10) {
  estudo = 10;
  if (estudo === 10) {
    estudo = 10;
    if (estudo === 10) {
      estudo = 10;
      if (estudo === 10) {
        estudo = 11;
        if (estudo === 11) {
          estudo = 11;
          if (estudo === 11) {
            estudo = 11;
            if (estudo === 11) {
              estudo = 11; //aqui foi feita a última reatribuição do escopo global neste aninhamento de if com valor true
              if (estudo !== 11) {
                estudo = 11;
                if (estudo === 11) {
                  estudo = 11;
                  if (estudo === 11) {
                    estudo = 11;
                    if (estudo === 11) {
                      estudo = 11;
                      if (estudo === 11) {
                        estudo = 11;
                        if (estudo === 11) {
                          estudo = 11;
                          if (estudo === 11) {
                            estudo = 15;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

if (estudo === resposta) {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}

/*
  Você consegue justificar sua resposta?
  Comente o código como foi a manipulação dos valores
  ex:
  let estudo = 1 //aqui foi feita a atribuição no escopo global
*/

