# Projeto Fundo Mágico com IA e N8N

## 1. Resumo

O projeto "Fundo Mágico" é uma aplicação web front-end desenvolvida para demonstrar a integração de tecnologias web modernas com sistemas de automação e inteligência artificial. A aplicação permite que os usuários gerem dinamicamente estilos de fundo (backgrounds) para websites, simplesmente descrevendo em texto o resultado visual desejado. O sistema interpreta a descrição, processa-a através de um workflow de automação e retorna os códigos HTML e CSS correspondentes, além de uma pré-visualização em tempo real.

## 2. Objetivo do Projeto

O objetivo principal é fornecer uma prova de conceito sobre a utilização de uma arquitetura desacoplada, onde o front-end (cliente) consome serviços de um orquestrador de workflows (N8N) que, por sua vez, integra-se a uma API de Inteligência Artificial generativa. Este projeto visa ilustrar uma aplicação prática e criativa da IA no desenvolvimento web, simplificando a criação de designs personalizados.

## 3. Proposta Acadêmica

A aplicação serve como um estudo de caso na disciplina de Interação Humano-Computador e Engenharia de Software. A proposta central é explorar como interfaces intuitivas, baseadas em linguagem natural, podem abstrair a complexidade técnica da codificação (HTML/CSS). O usuário final não necessita de conhecimento técnico para criar um design, focando apenas na sua intenção criativa. O projeto demonstra a viabilidade de sistemas que traduzem a intenção do usuário em código funcional, um paradigma crescente na era das IAs generativas.

## 4. Tecnologias Utilizadas

- **Front-End:**
  - **HTML5:** Estruturação semântica do conteúdo.
  - **CSS3:** Estilização e design responsivo.
  - **JavaScript (ES6+):** Manipulação do DOM, interatividade e comunicação assíncrona (Fetch API) com o back-end.

- **Back-End (Workflow):**
  - **N8N:** Plataforma de automação de workflows utilizada como orquestradora. O N8N recebe a requisição do front-end, processa os dados e interage com a API de IA para gerar o código.

- **Inteligência Artificial:**
  - **API de IA Generativa (implícita):** Um modelo de linguagem avançado que interpreta o texto do usuário e gera o código CSS correspondente.

## 5. Estrutura de Arquivos

```
/
├── index.html               # Arquivo principal da aplicação
├── README.md                # Documentação do projeto
└── src/
    ├── assets/              # Imagens e outros recursos estáticos
    │   └── bg.JPG
    ├── css/
    │   ├── reset.css        # Normalização dos estilos padrão dos navegadores
    │   ├── style.css        # Estilos principais da aplicação
    │   └── responsivo.css   # Estilos para dispositivos móveis
    └── js/
        └── index.js         # Lógica principal da aplicação
```

## 6. Como Utilizar

1.  Abra o arquivo `index.html` em um navegador web.
2.  Na caixa de texto principal, descreva o fundo que você deseja criar (ex: "um céu estrelado com uma lua crescente").
3.  Clique no botão "Gerar background Mágico".
4.  Aguarde o processamento.
5.  A aplicação exibirá uma pré-visualização do fundo gerado, juntamente com os blocos de código HTML e CSS que podem ser copiados e utilizados em outros projetos.