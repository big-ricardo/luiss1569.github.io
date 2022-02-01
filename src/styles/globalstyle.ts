import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //font-family: 'Sigmar One', cursive;
    font-family: 'Ubuntu', sans-serif;
  }

  html{
    padding-bottom: clamp(30px, 5%, 100px);
    max-width: 1920px;
    margin: auto;
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

  h3.title{
    color: ${(props) => props.theme.colors.primary};
    font-size: clamp(28px, 1vw , 200px);
    @media screen and (max-width: 1024px){
      text-align: center;
      font-size: clamp(20px, 3vh + 1px, 200px);
    }
  }
`;
