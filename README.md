# Case de Capacitação: Front-end (Semana 3) - Meta Consultoria

Este repositório contém a estrutura inicial para a primeira parte do case final de desenvolvimento de sites da Meta Consultoria. O foco desta etapa é a migração para o Next.js 15 e a organização modular do projeto.

## Objetivo

O objetivo deste case é capacitar o consultor na utilização do Next.js 15, integrando componentes do Shadcn/ui e aplicando conceitos de Server Side Rendering (SSR).

## Tecnologias Utilizadas

* Next.js 15 (App Router)
* React 19
* Tailwind CSS v4
* Shadcn/ui
* Lucide React (Iconografia)

## Instruções de Configuração

1. Clone o repositório em sua máquina local.
2. Execute o comando npm install para instalar as dependências.
3. Utilize npm run dev para iniciar o ambiente de desenvolvimento.

## Tarefas do Case

As tarefas a seguir devem ser executadas seguindo as boas práticas de desenvolvimento apresentadas nas aulas.

### 1. Componentização do Footer
O rodapé do site encontra-se atualmente codificado diretamente no arquivo page.tsx.
* Tarefa: Criar um componente isolado para o Footer em src/components/footer.tsx.
* Requisito: O componente deve ser importado e utilizado de forma global ou na página principal, mantendo a consistência visual.

### 2. Criação de Páginas de Serviço
O site deve possuir páginas detalhadas para cada um dos três serviços listados na Home: Gestão de Negócios, Otimização de Processos e Planejamento Financeiro.
* Tarefa: Implementar rotas que permitam acessar os detalhes de cada serviço.
* Requisito: Cada página deve conter o Header, o Footer, uma descrição técnica aprofundada e ao menos uma imagem ilustrativa.

## Material de Apoio

### Aulas Recomendadas (Udemy)
Para a execução deste case, é fundamental assistir às aulas do módulo de Next.js (do vídeo 100 ao 140), com atenção especial aos seguintes tópicos:
* Server vs Client Components (Aula 106).
* Estrutura de layout e metadata (Aula 127).
* Roteamento dinâmico (Aula 130).
* Geração de metadados dinâmicos (Aula 133).

### Links Úteis
* Introdução ao Next.js: https://www.youtube.com/watch?v=QsSUbuYeEFk
* Documentação Tailwind CSS: https://tailwindcss.com
* Documentação Shadcn/ui: https://ui.shadcn.com/docs/cli

## Prazo e Entrega
A entrega deve ser realizada em uma semana através do envio do link do repositório no GitHub para o coordenador de tecnologia e desenvolvimento da empresa júnior meta consultoria. A segunda parte deste case abordará otimizações de SEO e publicação em ambiente de produção.