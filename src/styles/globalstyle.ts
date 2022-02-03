import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //font-family: 'Sigmar One', cursive;
    font-family: 'Ubuntu', sans-serif;
    user-select: none;
  }

  html{
    padding-bottom: clamp(30px, 5%, 100px);
    max-width: 1920px;
    margin: auto;
    scroll-behavior: smooth;
  }

  body{
    background: ${(props) => props.theme.colors.background};
  }

  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: none;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 20px;
    border: 1px solid ${(props) => props.theme.colors.background};
  }

  h3.title, h3.simple-title{
    color: ${(props) => props.theme.colors.primary};
    font-size: clamp(25px, 1vw , 150px);
    transition: all 0.3s ease-in-out;
    margin-top: 50px;
    text-transform: capitalize;
    @media screen and (max-width: 1024px){
      text-align: center;
      font-size: clamp(20px, 3vh + 1px, 200px);
    }
    &:hover{
      color: ${(props) => props.theme.colors.secondary};
      transform: scale(1.1);
      filter: drop-shadow(0px 5px 10px ${(props) => props.theme.colors.shadow});
    }
  }

  h3.title{
    text-transform: uppercase;
    font-size: clamp(28px, 1vw , 200px);
    &:hover{

      &:before, &:after{
        background-color: ${(props) => props.theme.colors.backgroundColor};
        width: 30%;
      }
    }

    &:before, &:after{
      margin: auto;
      content: '';
      display: block;
      background: ${(props) => props.theme.colors.third};
      width: 90%;
      height: 2px;
      transition: all 0.3s ease-in-out;
      margin-top: 10px;
      position: relative;
      opacity: 0.7;
    }

    &:before{
      width: 50%;
      top: 2.2em;
    }
  }
`;
