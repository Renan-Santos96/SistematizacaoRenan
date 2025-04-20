# SistematizacaoRenan
# Clínica Vital - Projeto Front-end

## Descrição do Projeto

Este é o projeto de front-end para a Clínica Vital, uma clínica focada em oferecer saúde com excelência e cuidado. A página inicial apresenta informações sobre a clínica, opções de agendamento, um carrossel de imagens e informações de contato.

## Funcionalidades

* **Barra de Navegação:** Navegação intuitiva para as seções principais do site: "Home", "Sobre nós", "Agendamento" e "Resultados de exames". Inclui também um campo de pesquisa.
* **Carrossel de Imagens:** Apresenta imagens relevantes para a clínica, proporcionando uma experiência visual atraente.
* **Seção de Agendamento:** Um formulário para pacientes interessados em agendar consultas, coletando informações como nome, data de nascimento, e-mail, cidade e estado.
* **Seção "Sobre nós":** Informa os visitantes sobre a história, missão e valores da Clínica Vital.
* **Rodapé:** Contém informações de contato essenciais, como endereço, telefone, perfil do Instagram e CNPJ.

## Tecnologias Utilizadas

* **HTML:** Estrutura da página web.
* **CSS:** Estilização visual da página, incluindo:
    * Fonte personalizada ('Bellota', cursive do Google Fonts).
    * Cores de fundo e elementos visuais temáticos.
    * Layout responsivo utilizando Bootstrap.
    * Estilização personalizada para o cabeçalho, barra de navegação, carrossel, cards e rodapé.
* **Bootstrap:** Framework CSS para facilitar a criação de layouts responsivos e componentes de interface.
* **JavaScript:** Utilizado para funcionalidades dinâmicas (mencionado nas tags `<script>`, embora o código não esteja incluído aqui).

## Como Utilizar

Para visualizar este projeto, basta abrir o arquivo `index.html` em qualquer navegador web moderno. Certifique-se de que os arquivos CSS (`index.css`) e quaisquer arquivos JavaScript (`index.js`) estejam no mesmo diretório ou nos caminhos especificados no HTML. As imagens do carrossel devem estar no caminho relativo especificado no HTML (`../SistematizacaoRenan/imagens/`).

## Estrutura de Arquivos
SistematizacaoRenan
├── imagens/ 
│ ├── Clinica.png
│ ├── clinica2.png
│ ├── Exames.png
│ ├── Imagemmed1.png 
│ ├── Imagemmed2.png 
│ └── Imagemmed3.png 
├── index.html 
├── index.css 
└── index.js

## Considerações sobre o Código 
* A fonte 'Bellota' está sendo importada do Google Fonts. 
* O Bootstrap CSS e JavaScript estão sendo utilizados através de links CDN. 
* Há estilos personalizados definidos no arquivo `index.css` para complementar o Bootstrap e criar a identidade visual da Clínica Vital. 
* O JavaScript (`index.js`) é referenciado, indicando que pode haver interatividade na página (como a funcionalidade dos botões "Sobre nós" e "Agendamento"). 