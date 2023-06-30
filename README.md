
# Projeto de Visualização de PDFs com React e TypeScript

Este  é  um  projeto  em  React  com  TypeScript  que  permite  fazer  o  upload  e  visualizar  arquivos  PDF  usando  a  biblioteca  react-pdf.

## Pré-requisitos

Antes  de  executar  o  projeto, verifique  se  você possui  os  seguintes  requisitos:

-  Node.js  instalado  em  seu  sistema. 
- npm (ou yarn) instalado  em  seu  sistema.

## Como usar

Siga  as  etapas  abaixo  para  usar  o  projeto:

1. Clone este repositório em sua máquina local:
`https://github.com/TelesAlan/PDFViewer.git`
2. Navegue até o diretório do projeto:
`cd PDFViewer`
3.  Instale as dependências do projeto:
`npm i` ou `yarn`  
4.  Inicie o servidor de desenvolvimento:
`npm start` ou `yarn start`
5. Abra o navegador e acesse `http://localhost:3000` para ver o aplicativo em funcionamento.
6. Clique no botão "Selecionar arquivo" para fazer o upload de um arquivo PDF. Após o upload bem-sucedido, o PDF será exibido no visualizador.
7.  Para visualizar um novo PDF, basta repetir o passo 6 e selecionar outro arquivo.

## Implementação


O projeto utiliza a biblioteca `react-pdf` para renderizar e exibir os arquivos PDF. O componente principal é o `PDFReader`, localizado no arquivo `src/components/PDFReader/index.tsx`. Ele é responsável pelo visualizador de PDF, onde o arquivo selecionado é exibido. 

Além disso, o componente `FileInput`, localizado no arquivo `src/components/FileInput/index.tsx`, desempenha um papel fundamental. Ele possui um estado `selectedFile` para armazenar o arquivo PDF selecionado pelo usuário. Quando o usuário faz o upload de um arquivo, o componente `FileInput` exibe o PDF usando o componente `PDFReader`. 

Dessa forma, o componente `FileInput` é responsável por lidar com a seleção do arquivo e o componente `PDFReader` é responsável por renderizar e exibir o PDF selecionado. 

Certifique-se de explorar e personalizar esses componentes de acordo com suas necessidades e requisitos do projeto.

## Suporte
Se você tiver algum problema ou dúvida, sinta-se à vontade para abrir uma **issue** neste repositório.

## Contribuição
Contribuições são bem-vindas! Se você deseja melhorar este projeto, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie uma nova branch: "**git checkout -b minha-branch**".
3. Faça suas modificações e commit: "**git commit -m 'Minhas alterações'**".
4. Envie para o repositório remoto: "**git push origin minha-branch**".
5. Abra uma **pull request** explicando suas alterações.
## Licença
Este projeto está licenciado sob a MIT License. Sinta-se livre para usá-lo da maneira que preferir.
