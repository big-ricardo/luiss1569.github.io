import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //font-family: 'Sigmar One', cursive;
    font-family: 'Ubuntu', sans-serif;
  }

  html{
    margin-bottom: 20px;
  }

  h3.title{
    color: ${props => props.theme.colors.primary};
    font-size: clamp(28px, 1vw , 200px);
    @media screen and (max-width: 1024px){
      text-align: center;
      font-size: clamp(20px, 3vh + 1px, 200px);
    }
  }
`
