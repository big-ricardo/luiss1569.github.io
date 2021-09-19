import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 350px;
  align-items: center;
  padding: 5px;
  border:2px solid ${props => props.theme.colors.primary};
  border-radius: 20px;
  min-height: 445px;
  max-height: 450px;

  div.image{
    width: 90%;
    height: 190px;
    margin-top: 10px;
    margin-bottom: 10px;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 5px;
    max-width: 90%;

    p{
      text-align: center;
    }
  }`

export const H4 = styled(motion.h4)`
    width: min-content;
    border-radius: 50px;
    padding: 3% 6%;
    cursor: pointer;
      z-index: 10;
    background-color: ${props => props.theme.colors.secound};
    color: ${props => props.theme.colors.backgroundColor};
    font-family: 'Roboto', sans-serif;
    font-size: clamp(15px, 1vw, 27px);
    margin-top: 15px;
    margin-bottom: 20px;
    &:hover{
      background-color: ${props => props.theme.colors.secound};
    }
 @media screen and (max-width: 1024px){
      text-align: center;
      margin: auto
    }
`
