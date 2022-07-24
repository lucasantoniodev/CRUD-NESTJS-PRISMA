<h1>CRUD utilizando NestJS, Prisma e Mysql</h1>
<p>ROTAS</p>
<ol>
    <li>Criar novo livro: (POST) "/api/book"</li>
    <li>Buscar todos os livros: (GET) - "/api/books"</li>
    <li>Buscar livro por ID ou Bar_code: (GET) - "/api/book?{query}={id}"</li>
    <li>Atualizar livro: (PUT) - "/api/{id}"</li>
    <li>Deletar livro: (DELETE) - "/api/book/{id}"</li>
</ol>
<p>Referência: https://youtu.be/0Idug0e9tPw</p>
<h2>Passo a Passo</h2>
<p>NestJS</p>
<ol>
    <li>Instalando o Nestjs na máquina: npm i -g @nestjs/cli</li>
    <li>Criando novo projeto: nest new <nome-do-projeto></nome-do-projeto></li>
    <li>Gerar recurso completo (Module, controller, service, dto e entity): nest g resource</li>
</ol>
<p>Prisma</p>
<ol>
    <li>Instalando o prisma: npm install prisma --save-dev</li>
    <li>Configurações iniciais do prisma: yarn prisma init</li>
    <li>Arquivo .env: DATABASE_URL="<database>://<user>:<password>@localhost:3308/library"</li>
    <li>Criando model do prisma: https://prnt.sc/7PkpvQbEGgGL</li>
    <li>Criando Migration "table": yarn prisma migration dev</li>
    <li>Service para o Arquivo de inicialização: nest g service</li>
    <li>Arquivo: https://prnt.sc/e0EQrAoYSmJS</li>
    <li>Referência do prisma/nestjs: https://docs.nestjs.com/recipes/prisma</li>
</ol>