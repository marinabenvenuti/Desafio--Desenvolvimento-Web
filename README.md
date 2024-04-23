## Sobre o Projeto
Este é um projeto desenvolvido para a segunda etapa do processo seletivo para Desenvolvedor Web Full Stack do Laboratório Bridge. A proposta é construir uma aplicação web que permita que o usuário insira um número inteiro k e calcule o número de inteiros positivos primos n MENORES que k, por exemplo, se a entrada for 10, a saída do programa deve ser 4. O desafio tinha alguns bônus que foram incorporados, sendo eles:

#### Armazenamento e apresentação do histórico de números enviados pelo usuário:
Para o armazenamento do histórico do usuário, foi utilizado o armazenamento do local storage do navegador.

#### Definição de limites e validações para que a aplicação não apresente erros:
Ao apertar o botão de enviar, o campo de input não pode conter um valor menor do que zero ou estar vazio. Para a exibição de alertas informando isso ao usuário, foi utilizado o [SweetAlert2](https://sweetalert2.github.io/).

#### Realização de testes unitários no backend:
Foi realizada uma suíte de testes com dois simples testes unitários no Spring Boot. Para realizar os testes, execute o comando `./mvnw clean test` no diretório "backend/primes/" do projeto.

## O Algoritmo 
O algoritmo implementado no código do backend calcula a quantidade de números primos antes de um número K. Para isso, ele percorre todos os números menores que K (e maiores que zero) e verifica se cada um é primo ou não. Esse algoritmo é um pouco custoso, mas é possível otimizá-lo através de um teorema do "Teste de Primalidade", que prova que para verificarmos se um certo número n é primo, apenas precisamos testar se ele é divisível por algum número no intervalo [0, √n]. Confira: [Primality Test - Wikipedia](https://en.wikipedia.org/wiki/Primality_test)

Esse algoritmo é eficiente para números pequenos. No entanto, se utilizarmos números muito grandes, ele não será adequado. Uma forma de "resolver" isso é utilizar alguma função de contagem de primos (prime-counting function). No entanto, essas funções são aproximações e não se comportam muito bem para valores pequenos. A melhor aproximação atualmente é n / ln(n). Neste link: você pode conferir uma tabela que mostra a % de erro dessa aproximação para diferentes tamanhos de números. [Prime-counting function - Wikipedia](https://en.wikipedia.org/wiki/Prime-counting_function)

Como essa aproximação não se comporta muito bem com números menores, optei por utilizar o meu algoritmo, que apesar de ser mais custoso, nos garante certeza do resultado.

## Tecnologias Utilizadas
* Para o frontend, foi utilizada a biblioteca [React](https://react.dev/), conforme a sugestão do laboratório, em conjunto com o [Bootstrap](https://react-bootstrap.netlify.app/) para a estilização;
* Para a implementação do backend, foi utilizado [Java](https://www.java.com/pt-BR/) em conjunto com o [Spring Boot](https://spring.io/projects/spring-boot), conforme a sugestão do laboratório;
* Por fim, para a incoporação entre o backend e o frontend, foi utilizada a Api [Axios](https://axios-http.com/ptbr/docs/api_intro).

## Como Executar este Projeto?
#### - Clone este repositório através do comando: git clone https://github.com/marinabenvenuti/desafio-desenvolvimento-web.git
#### - Frontend:
Para a execução do frontend, execute os seguintes comandos no diretório `desafio-desenvolvimento-web/frontend`:
1. `npm install`
2. `npm start`

#### - Backend:
Para executar o backend, você precisará de um ambiente de desenvolvimento capaz de rodar uma aplicação Spring Boot, como o IntelliJ IDEA. Em seguida, localize o arquivo `PrimesApplication.java` no seguinte diretório:

`desafio-desenvolvimento-web/backend/primes/src/main/java/com/marina/primes`

Execute este arquivo para iniciar a aplicação.



