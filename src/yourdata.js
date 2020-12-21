// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Luis Ricardo",
  headerTagline: [
    //Line 1 For Header
    "Desenvolvimento Web",
    //Line 2 For Header
    "Mobile, Desktop,",
    //Line 3 For Header
    "de qualidade!",
  ],
  //   Header Paragraph
  headerParagraph:
    "Trabalho com as mais novas tecnologias do mercado trazendo consigo a melhor qualidade e desempenho. Fazendo designs dinâmicos garantindo a melhor experiência ao usuário.",

  //Contact Email
  contactEmail: "luisricardo0626@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, 
      title: "Itabaú Sorvetes", 
      para:
        "Site desenvolvido para a empresa Itabaú uma marca de Sorvetes Órganicos e Naturais.Um site bem dinâmico e audacioso para uma melhor aproximação entre eles e seus clientes", 
      imageSrc:
        "https://user-images.githubusercontent.com/39037985/102536441-5f16ed00-4088-11eb-87d9-3152d74ad3c3.jpg",
      url: "https://itabau.com.br",
    },
    {
      id: 2, 
      title: "Babearia Medeiros", 
      para:
        "Site desenvolvido como exemplo para uma barbearia local.", 
      imageSrc:
        "https://user-images.githubusercontent.com/39037985/101823439-82cab800-3b09-11eb-9385-486abc9464c4.jpg",
      url: "https://luiss1569.github.io/Site-Medeiros",
    },
    {
      id: 3, 
      title: "Jogo da Velha", 
      para:"Jogo da velha multiplayer ou single-player para de todos feito para diversão nessa quarentena.", 
      imageSrc:
        "https://user-images.githubusercontent.com/39037985/101823630-d2a97f00-3b09-11eb-85c8-586f06b6b229.jpg",
      url: "https://jogodaveia.herokuapp.com/",
    },
     {
      id: 4, 
      title: "Among Reactor", 
      para:
        "Among Reactor, um dos mini games do among us, feito em css puro e js.", 
      
      imageSrc:
        "https://user-images.githubusercontent.com/39037985/102727490-b45f3280-4304-11eb-9dc6-99b00e2fc075.jpg",
      url: "https://luiss1569.github.io/reactor-among-us/",
    },
    {
      id: 5, 
      title: "Getjob()", 
      para:
        "Plataforma para encontrar empregos para área de informática feito como TCC. Contendo um aplicativo!", 
      
      imageSrc:
        "https://user-images.githubusercontent.com/39037985/101824093-7eeb6580-3b0a-11eb-93c8-dfd5a28c6285.jpg",
      url: "https://thegetjob.herokuapp.com",
    },
    {
      id: 6, 
      title: "Game Snake", 
      para:
        "Famoso jogo da cobrinha feito em JS puro.", 
      
      imageSrc:
        "https://user-images.githubusercontent.com/39037985/101823915-3df35100-3b0a-11eb-869a-b667eb9f0757.jpg",
      url: "https://luiss1569.github.io/Jogo-Snake/",
    }
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "",
    },
    {
      id: 5,
      img: designIcon,
      para:
        "",
    },
    {
      id: 6,
      img: codeIcon,
      para:
        "",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Sobre mim",
  promotionPara:
    "Meu nome é Luis Ricardo, tenho 18 anos, estudo atualmente na Universidade Federal de Itajubá-UNIFEI, sou formado em Técnico em Informática" + 
    " pelo Centro de Educação Profissionalizante 'Tancredo Neves' onde me formei em 2019, deste lá venho buscando experiências. Onde ja trabalhei com " + 
    "várias tecnologias como React, React-Native, NodeJS, Electron, Flutter e varias linguagens. Com isso busco o melhor delas para fazer os projetos da melhor maneira possivel." + 
    "Trabalho com as mais novas tecnologias do mercado trazendo consigo a melhor qualidade e desempenho. Fazendo designs dinâmicos garantindo a melhor experiência ao usuário. Sistemas das mais variadas formas e tamanhos, tudo de acordo com suas necessidades.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Fale comigo por email",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/luiss1569" },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/luisricar_do",
    },
  ],
}
