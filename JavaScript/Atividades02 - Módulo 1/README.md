## Exercícios Avançados de JavaScript com Node.js

Este projeto contém 9 exercícios escritos em JavaScript com Node.js, distribuídos em três seções principais: estruturas de controle avançadas, funções/recursão e manipulação de arrays e objetos.

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
2. Navegue até a pasta raiz do projeto (a pasta que contém este `README.md` e os arquivos de exercícios).
3. Instale a única dependência necessária (`prompt-sync`) executando o comando:

   ```bash
   npm install
   ```

#### Como Executar os Exercícios

Cada exercício é um arquivo .js individual.

Certifique-se de que você está no terminal, na pasta raiz do projeto.

Para rodar um exercício específico, utilize o comando node seguido do caminho para o arquivo do exercício. Por exemplo, para executar o arquivo date_validation.js:
```bash
node JavaScript/date_validation.js
```

Substitua date_validation.js pelo nome do exercício que deseja executar.

#### Observvação
🚨 Este projeto utiliza apenas a biblioteca _prompt-sync_ para permitir a entrada de dados pelo usuário diretamente no terminal durante a execução dos scripts Node.js. Todas as outras lógicas são implementadas com JavaScript puro.

![image](https://github.com/user-attachments/assets/ecc46064-7188-4453-b363-b407e7bcef41)


Curso Dev Fullstack +Prati e Codifica
Seção 1: Estruturas de Controle Avançadas

✅ 1. Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (considerando meses com 28 a 31 dias e ano bissexto para fevereiro) e false caso contrário.

✅ 2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

✅ 3. Palavras Únicas
Dada uma string como "olá olá mundo mundo", use if/else e for para extrair todas as palavras únicas e exibi-las em um array.
Seção 2: Funções e Recursão

✅ 4. Fatorial Recursivo
Implemente function fatorial(n) de forma recursiva. Trate n < 0 lançando um Error, e n === 0 retornando 1.

✅ 5. Debounce
Crie function debounce(fn, delay) que receba uma função fn e um delay em milissegundos, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.

✅ 6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (com base nos argumentos), retornando resultados instantâneos nas invocações repetidas.
Seção 3: Arrays e Objetos Complexos

✅ 7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map e sort.

✅ 8. Agrupamento por Propriedade
Com vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma total de seus total.

✅ 9. Conversão Entre Formatos
Escreva duas funções:
• paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
• objetoParaPares(obj) faz o inverso, retornando um array de pares a partir de um objeto.

