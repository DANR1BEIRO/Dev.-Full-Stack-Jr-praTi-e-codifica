## Exercícios de JavaScript com Node.js

Este projeto contém 15 exercícios escritos em JavaScript com Node.js, focados em lógica de programação e estruturas de controle.

#### Configuração e Execução Local dos Exercícios

Siga os passos abaixo para configurar o ambiente e executar os exercícios localmente.

#### Pré-requisitos

Antes de começar, você precisa ter o Node.js instalado na sua máquina. Recomenda-se a versão 14 ou superior. Você pode baixá-lo em [nodejs.org](https://nodejs.org/). Além disso, para clonar o repositório, é necessário ter o Git instalado. Você pode baixá-lo em [git-scm.com](https://git-scm.com/). Se optar por apenas baixar os arquivos, não será necessário instalar o Git.

#### Obtendo os Arquivos do Projeto

Você pode obter os arquivos do projeto de duas maneiras: clonando o repositório (se familiarizado com Git) ou baixando diretamente como um arquivo ZIP (sem necessidade de Git). Escolha uma das opções abaixo.

##### Opção 1: Clonar o Repositório (Usando Git)

Se você optar por trabalhar com o código a partir de um repositório Git público, siga os passos abaixo para clonar o repositório para sua máquina local:

1. **Verifique se o Git está instalado:**
   * Abra o terminal ou prompt de comando e digite `git --version`. Se o Git estiver instalado, você verá a versão atual. Caso contrário, baixe e instale o Git em [git-scm.com](https://git-scm.com/).
2. **Escolha um local no seu computador:**
   * Navegue até a pasta onde você deseja salvar o projeto usando o comando `cd` no terminal (exemplo: `cd Documents/Projetos`).
3. **Clone o repositório:**
   * No terminal, execute o comando abaixo, substituindo `<URL_DO_REPOSITORIO>` pela URL do repositório Git público que você está acessando (geralmente encontrada no botão "Clone" ou "Code" no GitHub):
     ```bash
     git clone <URL_DO_REPOSITORIO>
     ```
   * Exemplo: `git clone https://github.com/seuusuario/seurepositorio.git`
4. **Acesse a pasta clonada:**
   * Após o clone, navegue até a pasta do projeto com:
     ```bash
     cd <NOME_DA_PASTA_DO_REPOSITORIO>
     ```
   * Exemplo: `cd seurepositorio`

##### Opção 2: Baixar os Arquivos como ZIP (Sem Git)

Se você não deseja usar Git ou prefere uma abordagem mais simples, pode baixar os arquivos diretamente como um arquivo ZIP:

1. **Acesse o repositório online:**
   * Vá até a página do repositório no GitHub (ou outra plataforma Git) usando seu navegador.
2. **Localize o botão de download:**
   * No GitHub, clique no botão verde "Code" (ou similar) e selecione a opção "Download ZIP". Isso fará o download de um arquivo `.zip` contendo todos os arquivos do projeto.
3. **Extraia os arquivos:**
   * Após o download, localize o arquivo `.zip` no seu computador (geralmente na pasta "Downloads") e extraia-o para um local de sua preferência (clique com o botão direito e selecione "Extrair Tudo" ou use um programa como WinRAR ou 7-Zip).
4. **Acesse a pasta extraída:**
   * Navegue até a pasta extraída (geralmente terá o nome do repositório seguido de `-main` ou similar) usando o explorador de arquivos ou o terminal.

#### ⚙️ Instalação das Dependências

Após clonar o repositório ou baixar e extrair os arquivos:

1. Abra o terminal ou prompt de comando.
2. Navegue até a pasta raiz do projeto (a pasta que contém este `README.md` e a pasta `JavaScript`).
3. Instale a única dependência necessária (`prompt-sync`) executando o comando:

   ```bash
   npm install
   ```

#### Como Executar os Exercícios

Cada exercício é um arquivo .js individual localizado dentro da pasta JavaScript/.

Certifique-se de que você está no terminal, na pasta raiz do projeto.

Para rodar um exercício específico, utilize o comando node seguido do caminho para o arquivo do exercício. Por exemplo, para executar o exercicio1.js:

```bash
node JavaScript/exercicio1.js
```

Substitua exercicio1.js pelo nome do arquivo do exercício que deseja executar (ex: exercicio2.js, exercicio15.js, etc.).

### Observação

🚨 Este projeto utiliza apenas a biblioteca _prompt-sync_ para permitir a entrada de dados pelo usuário diretamente no terminal durante a execução dos scripts Node.js. Todas as outras lógicas são implementadas com JavaScript puro.

![image](https://github.com/user-attachments/assets/ecc46064-7188-4453-b363-b407e7bcef41)

Módulo 1: Desafios Propostos - Curso Dev Fullstack +Prati e Codifica

   ✅ 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
   ✅ 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
   ✅ 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
   ✅ 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
   ✅ 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
   ✅ 6. Ler três valores para os lados de um triângulo (A, B, C), verificar se formam um triângulo (A < B + C, B < A + C, C < A + B) e indicar o tipo (Isósceles: 2 lados iguais, Escaleno: todos diferentes, Equilátero: todos iguais).
   ✅ 7. Ler o número de maçãs compradas, calcular e escrever o valor total da compra (R0,30se<12,R0,30se<12,R 0,25 se >= 12).
   ✅ 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) diferentes e escrevê-los em ordem crescente.
   ✅ 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.
   ✅ 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
   ✅ 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
   ✅ 12. Crie um programa que exibe a tabuada (de 1 a 10) de um número fornecido pelo usuário utilizando um loop for.
   ✅ 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
   ✅ 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
   ✅ 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

