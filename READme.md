# Functional Programming

## Diferenças entre Imperativo e Declarativo

| Imperativo | Declarativo |
| --- | --- |
| Foco no Fluxo | Foco na Lógica |
| Estados Mutáveis | Imutabilidade |
| Como | O que |
| Maior quantidade de código | Menor quantidade de código |
| Baixno nível de escalabilidade | Alto nível de escalabilidade |
| Mais conhecido | Menos conhecido |
| Mais explícito | Menos explícito |

## Examples of code:

→ Imperative Paradigm

```jsx
const notas = [9, 7, 6, 4, 10]

function media(notas) {
	let total = 0
	for(let i = 0; i < notas.length; i++) {
			total += notas[i]
	}

	return total / notas.length
}

const mediaTurma = media(notas)
console.log(`Média é ${mediaTurma}`) 
```

→ Declarative paradigm

```jsx
const notas = [9, 7, 6, 4, 10]

const somar = (a, b) => a + b
const dividir = (a, b) => a / b

const mediaTurma = dividir(notas.reduce(somar), notas.length)

console.log(`Média é ${mediaTurma}`) 
```

## First Class Functions

Funções são valores.

```jsx
function dobro(x) {
	return x * 2 
}

dobro(20)
```

→ Composição de Funções

```jsx
const exagerado = composicao(gritar, enfatizar)

exagerado('PARA')
```

---

## Por que a programação funcional foi adotada tardiamente?

A grande culpada: **Memória**

- A programação funcional foi criada em 1957, antes da Programação Estruturada e antes da Orientação a Objetos.
- No entanto, a programação funcional não era viável na época, devido ao alto custo da memória.

## Valor vs Referência

```java
int a = 2;
int b = a;
```

Neste caso, o programa está ocupando mais memória do que o necessário porque foi feita uma cópia do valor, mesmo havendo espaço disponível.

A decisão de fazer a cópia do valor foi tomada porque um valor inteiro é um tipo básico e primitivo que consome pouca memória. Por isso, é mais lógico gerar uma cópia do valor do que fazer a mesma variável apontar para o mesmo endereço de memória.

```java
Object a = new Object();
```

Quando lidamos com objetos, as coisas mudam um pouco. Quando criamos um objeto, ele geralmente ocupa um espaço grande na memória.

Em uma variável, não é armazenado o conteúdo do objeto, mas sim uma referência para o lugar onde o objeto está na memória. Por exemplo, se criarmos um objeto B que recebe o valor do objeto A, é copiada a referência para o local na memória.

Isso significa que teremos duas variáveis apontando para o mesmo lugar na memória.

---

## PLoP

- Place-Oriented Programming;
- Nova informações substituem as antigas;
- Surgiu de uma limitação do início da computação
- Pouca RAM e pouco disco

1940 → I invented a bit of memory

1953 → I invented a byte of memory

1966 → 1K

1978 → 32k

2011 → Look, 100 terabytes

2038 → What memory?

## Acoplamento Temporal

O acoplamento temporal é um conceito na programação que se refere ao grau em que duas partes de um programa dependem do tempo de execução uma da outra. Em outras palavras, o acoplamento temporal descreve como uma parte do programa está ligada a outra parte do programa em termos de tempo de execução.

Um exemplo comum de acoplamento temporal é quando um trecho de código espera que outro trecho de código termine de executar antes de continuar. Isso pode levar a problemas de desempenho e confiabilidade, especialmente se o tempo de execução de uma parte do programa não puder ser previsto com precisão.

Para minimizar o acoplamento temporal, é recomendável dividir o programa em módulos independentes e bem definidos, que possam executar de forma autônoma, sem depender do tempo de execução de outros módulos. Isso pode ajudar a melhorar a eficiência, a escalabilidade e a manutenção do programa.

## Por que mudar?

- Programação funconal é mais simples;
- Torna mais fácil de escrever e manter;
- Não possui acoplamento temporal;
- Poucos problemas de concorrência;
- Trabalha com imutabilidade.

## Como funciona o Javascript

### HEAP

Em JavaScript, a heap é a parte da memória do computador onde objetos são armazenados. Ela é gerenciada pelo coletor de lixo (garbage collector) do JavaScript e é responsável por alocar e desalocar memória para objetos dinamicamente criados e removidos durante a execução do programa.

A heap do JavaScript é onde os valores de objetos, arrays, funções e outros tipos de dados complexos são armazenados. Quando um objeto é criado, ele é alocado na heap e pode ser acessado através de uma referência. Quando o objeto não é mais necessário, o coletor de lixo libera a memória ocupada por ele, marcando-o como "coletável".

O gerenciamento eficiente da heap é importante para garantir que um programa JavaScript execute de forma eficiente e sem falhas. É importante evitar vazamentos de memória (memory leaks) que ocorrem quando objetos são alocados na heap, mas nunca são removidos, ocupando espaço desnecessário e tornando o programa lento e instável. O uso excessivo da heap também pode levar a problemas de desempenho, pois o coletor de lixo precisa gastar mais tempo para gerenciar a memória alocada.

### STACK

Em JavaScript, a stack é uma estrutura de dados usada para armazenar informações sobre a execução do código. É uma pilha que contém uma série de frames (quadros), cada um dos quais representa um contexto de execução.

A stack é usada para rastrear a ordem de execução das funções. Sempre que uma função é chamada, um novo quadro é adicionado à stack. Esse quadro contém informações sobre a função, incluindo seu nome, parâmetros e variáveis locais. Quando a função retorna, o quadro é removido da stack e a execução continua a partir do ponto em que a função foi chamada.

A stack é importante para garantir que o código seja executado na ordem correta. Ela é usada para controlar a execução de funções e garantir que as variáveis locais de uma função não interfiram com as variáveis de outra função que está sendo executada simultaneamente. Além disso, a stack é usada para detectar erros de execução, como estouros de pilha (stack overflow), que ocorrem quando a quantidade de informações armazenadas na stack excede o limite máximo permitido pelo ambiente de execução.

Em resumo, a stack é uma estrutura de dados crucial na execução de código JavaScript, e seu uso adequado é importante para garantir que o código seja executado de forma eficiente e sem erros.

### EVENT QUEUE

A Event Queue (fila de eventos) é uma parte importante do modelo de programação assíncrona do JavaScript. Ela é uma fila (ou lista) de eventos (ou tarefas) que aguardam para serem executados. Cada evento na fila é associado a uma função de callback que será executada quando o evento for processado.

Os eventos na fila são adicionados sempre que ocorre uma ação assíncrona no programa, como uma requisição AJAX, uma animação, um evento de temporizador ou a entrada do usuário. Quando um evento é adicionado à fila, ele aguarda até que a pilha de execução esteja vazia para ser processado.

O processamento dos eventos da fila é feito pelo loop de eventos (event loop) do JavaScript. O loop de eventos é responsável por verificar continuamente se há eventos na fila, e se houver, executá-los em ordem. Ele pega o primeiro evento na fila e executa sua função de callback até que a função retorne. Em seguida, ele pega o próximo evento na fila e repete o processo.

O uso da fila de eventos permite que o JavaScript execute tarefas assíncronas sem bloquear a execução do código síncrono. Isso é importante para garantir que a interface do usuário não fique travada enquanto o código executa tarefas demoradas ou aguarda eventos externos. Além disso, o uso de callbacks permite que o código assíncrono seja executado de forma não linear, o que é fundamental para o desenvolvimento de aplicações complexas e responsivas.

Em resumo, a fila de eventos é uma parte fundamental do modelo de programação assíncrona do JavaScript, e seu uso adequado é importante para garantir que o código seja executado de forma eficiente e responsiva.

##