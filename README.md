# API MARVEL DEVELOPER

Este projeto tem o objetivo de listar, pesquisar e detalhar os personagens da Marvel através das APIs listadas na página Marvel Developer Portal. No detalhamento do personagem, você conseguirá ver a imagem, descrição, comics, events, series, id e data de modificação se todos os dados estiverem disponíveis pelas APIs.

**[Deploy](https://marvel-lucaasgevaerd.vercel.app)**

Neste projeto, eu utilizei a React como framework e TypeScript como linguagem, em questão de estilização eu usei o Styled-components. As APIs da Marvel precisam de fornecimento de hash unindo PUBLIC_KEY + PRIVATE_KEY + data, do qual eu utilizei O MD5 para criar os hashs e o Axios para efetuar as requisições.





## Instalação e uso

*Se você deseja instalar e executar este projeto, siga estas etapas:*

1. Faça um fork deste repositório;
2. Clone a sua bifurcação para obter uma cópia local;
3. Use o comando **cd marvel** para entrar na pasta principal do projeto, aqui se você preferir, poderá abrí-lo com editor de códigos favorito;
4. Ainda no terminal, utilize o comando npm install ou npm i para baixar as dependências do projeto;
5. Você terá que acessar o site da **[Marvel](https://developer.marvel.com/)** para obter as suas chaves PUBLIC_KEY e PRIVATE_KEY;
6. Obtendo as chaves, você terá que criar um arquivo na raiz do projeto com o nome **.env** e dentro dele adicione o VITE_BASE_URL:https://gateway.marvel.com:443/v1/public, abaixo do VITE_BASE_URL adicione o VITE_PRIVATE_KEY:SUA_CHAVE_PRIVADA_AQUI e por último, abaixo do VITE_PRIVATE_KEY adicione VITE_PUBLIC_KEY:SUA_CHAVE_PÚBLICA_AQUI;
7. Por fim, utilize o comando npm run dev para executar em modo Desenvolvedor, ou npm run host para executar em modo servidor e poder acessar de outros dispositivos dentro da sua própria rede.





## Contribuição

*Se você deseja enviar uma melhoria, por favor, siga estas etapas:*

1. Siga os passos da seção **INSTALAÇÃO E USO**;
2. Crie uma nova branch (git checkout -b minha-melhoria);
3. Faça as alterações desejadas;
4. Envie as alterações (git commit -m 'Adicionando minha melhoria');
5. Envie a branch (git push origin minha-melhoria)
6. Abra uma solicitação de pull.

> Obs.: Se você encontrar algum problema ou tiver alguma sugestão, abra uma issue e eu ajudarei.





## Autor

**Lucas Gevaerd - [Linkedin](https://br.linkedin.com/in/lucaasgevaerd)**
