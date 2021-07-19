import { motion } from "framer-motion";
import styled from "styled-components";

export const Carrossel = styled(motion.div)`
  display: flex;
  flex: 1;
  width: 90%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin-left: 10%;
 @media screen and (max-width: 1024px){
    flex-direction: column-reverse;
    margin-left: 5%;
    height: 90vh;
    min-height: 400px;
  }
`;

export const SectionText = styled(motion.div)`
  width: 40%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  z-index: 10;
    @media screen and (max-width: 1024px){
       align-items: center;
     height: max-content;
     width: 90%;
    }
    @media screen and (max-width: 768px) {
     align-items: center;
     height: max-content;
     width: 90%;
    }
  div h1{
    color: ${props => props.theme.colors.title};
    font-weight: 700;
    font-size: clamp(40px, 4vw, 200px);
    @media screen and (max-width: 1024px){
      text-align: center;
      font-size: clamp(22px, 4vh, 200px);
    }
  }
  div h3{
    color: ${props => props.theme.colors.title};
    font-size: clamp(24px, 1vw , 200px);
    @media screen and (max-width: 1024px){
      text-align: center;
      font-size: clamp(20px, 3vh + 1px, 200px);
    }
  }
  div p{
    color: ${props => props.theme.colors.title};
    font-size: clamp(20px, 1vw + 5px, 25px);
    width: 75%;
    margin-bottom: 5%;
    @media screen and (max-width: 1024px){
      text-align: center;
      font-size: clamp(20px, 3vh - 5px, 200px);
      margin: auto;
      margin-top: 15px;
      margin-bottom: 10px
    }
  }
`
export const H4 = styled(motion.h4)`
    width: min-content;
    border-radius: 50px;
    padding: 3% 6%;
    cursor: pointer;
      z-index: 10;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.backgroundColor};
    font-family: 'Roboto', sans-serif;
    font-size: clamp(20px, 1vw, 27px);
    &:hover{
      background-color: ${props => props.theme.colors.secound};
    }
 @media screen and (max-width: 1024px){
      text-align: center;
      margin: auto
    }
`

export const SectionImg = styled(motion.div)`
  width: 45%;
  z-index: 10;

  @media screen and (max-width: 1024px){
    width: 60%;
    margin-right: none;
  }
`
