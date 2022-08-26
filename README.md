
# Front-end Localizasoft (DESKTOP)

Aplicação front-end desenvolvida em NextJS para dar vida ao Localizasoft e suas funcionalidades.


## Tecnologias utilizadas

 - [Typescript](https://www.typescriptlang.org/)
 - [ReactJS](https://pt-br.reactjs.org/docs/getting-started.html)
 - [NextJS](https://nextjs.org/docs/getting-started)
 - [TanStack Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)
 - [Axios](https://axios-http.com/ptbr/docs/intro)
 - [tailwindcss](https://tailwindcss.com/)
 - [MaterialUI](https://mui.com/pt/)
 - [react-dropzone](https://react-dropzone.js.org/)
 - [moment](https://momentjs.com/)
 - [nookies](https://www.npmjs.com/package/nookies)
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar a seguinte variável de ambiente no seu .env

`NEXT_PUBLIC_API_BASE_URL`

Lembrando que, por se tratar de Next, o nome do arquivo que irá conter as variáveis de ambiente deve ser *.env.local* ao invés de apenas *.env*



## Instalação

Para instalar e rodar o projeto localmente, basta seguir os seguintes passos:

- Clonar este repositório
- Adicionar a variável de ambiente necessária
- Navegar com um terminal até a pasta do projeto e rodar:

```
npm install
```

- Aguardar o processo de instalação e rodar:

```
npm run dev
```

*Ps: Caso queira utilizar o back-end local, o mesmo deverá ser iniciado também, para isso, siga os passos de instalação do back-end clicando [aqui](https://github.com/localizasoft/localizaativo/tree/main/backend)*


    
## Funcionalidades (USUÁRIO PADRÃO)

- Login de usuários
- "Esqueci minha senha"
- Registro de usuário
- Manuseio de itens com base na empresa do usuário logado

## Funcionalidades (USUÁRIO ADMINISTRADOR)

- Login de usuários
- "Esqueci minha senha"
- Registro de usuário
- Manuseio de itens com base na empresa do usuário logado
- Manuseio de empresas
- Manuseio de usuários



## Rotas

    login: '/login',
    home: '/',
    register: '/register',
    resetPassword: '/resetPassword'
## Arquitetura utilizada

O código fonte em questão foi arquiteturado seguindo os princípios [SOLID](https://www.treinaweb.com.br/blog/principios-solid-single-responsability-principle?gclid=Cj0KCQjwxveXBhDDARIsAI0Q0x0k_4QBIr69yLAPQyRPjyOB2lfsANf3gV4zvJVQPUvxfpo65_mEcmgaAsxzEALw_wcB) e subdividos em pastas de maneira estratégica, a qual permite um código limpo e legível.

---

## Estrutura de pastas

Todas as pastas citadas abaixo estão dentro do source do projeto (src)

- **components**

Componentes utilizados para compor a página por completo, dentro dela contém uma subpasta especial, "shared", nela existem todos componentes que são reutilizáveis em toda a aplicação.

- **config**

Até o momento, contém apenas configurações relacionadas ao roteamento, tanto da api, quanto da aplicação.

- **hooks**

Hooks customizados que facilitam o desenvolvimento, contribuindo com o reaproveitamento de código.

- **icons**

Todos os ícones do sistema devem ser colocados aqui, seguindo a mesma estrutura dos demais.

- **pages**

Este diretório contem todas as páginas da aplicação, assim como a raiz, a qual é o ponto de partida do React.

O roteamento de páginas funciona de maneira automática, devido ao NextJS, para melhor compreensão, [leia](https://nextjs.org/docs/routing/introduction)

- **services**

Toda camada de serviço e suas configurações devem estar contidas aqui.

- **styles**

O projeto utiliza tailwind como fonte de estilização principal, contudo, existem casos específicos que a utilização do tailwind não é viável, portanto, estilizações em arquivos CSS devem estar contidas neste diretório.

- **utils**

Funções auxiliares.
## Observações sobre pastas e arquivos fora de src

- **public**

Todo arquivo de imagem, exceto SVG's, devem estar contidos aqui.

- **tailwind.config.js**

Toda configuração do tailwind é realizada aqui. Para detalhes clique [aqui](https://tailwindcss.com/docs/configuration)

## Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Branco            | ![#fff](https://via.placeholder.com/10/fff?text=+) #fff          |
| Cinza             | ![#f7f7f7](https://via.placeholder.com/10/f7f7f7?text=+) #f7f7f7 |
| Cinza escuro      | ![#374151](https://via.placeholder.com/10/374151?text=+) #374151 |
| Ciano             | ![#0891b2](https://via.placeholder.com/10/0891b2?text=+) #0891b2 |


## Licença

Todos direitos reservados - [Localizasoftware](https://www.localizasoft.com.br/).

