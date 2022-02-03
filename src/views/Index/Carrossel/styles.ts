import { motion } from "framer-motion";
import styled from "styled-components";

export const Carrossel = styled(motion.div)`
  display: flex;
  flex: 1;
  width: 90%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 83vh;
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    margin-left: 5%;
    height: 90vh;
    min-height: 400px;
    justify-content: space-evenly;
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
  transition: 0.3s ease-in-out;
  &:hover {
    h1,h2,h3,p{
      transform: scale(1.01);
      filter: drop-shadow(0px 12px 5px ${(props) => props.theme.colors.shadow});
    }
  }
  @media screen and (max-width: 1024px) {
    align-items: center;
    height: max-content;
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    height: max-content;
    width: 90%;
  }
  div h1 {
    color: ${(props) => props.theme.colors.title};
    font-weight: 700;
    font-size: clamp(35px, 1vw + 2em, 100px);
    transition: 0.3s ease-in-out;
    text-transform: uppercase;
    @media screen and (max-width: 1024px) {
      text-align: center;
    }
  }
  div h3 {
    color: ${(props) => props.theme.colors.title};
    font-size: clamp(24px, 1vw, 200px);
    transition: 0.3s ease-in-out;
    @media screen and (max-width: 1024px) {
      text-align: center;
      font-size: clamp(20px, 3vh + 1px, 200px);
    }
  }
  div p {
    color: ${(props) => props.theme.colors.title};
    font-size: clamp(20px, 1vw + 5px, 25px);
    width: 75%;
    margin-bottom: 5%;
    transition: 0.3s ease-in-out;
    @media screen and (max-width: 1024px) {
      text-align: center;
      font-size: clamp(20px, 3vh - 5px, 200px);
      margin: auto;
      margin-top: 15px;
      margin-bottom: 10px;
    }
  }
`;
export const Button = styled.div`
  width: min-content;
  border-radius: 50px;
  padding: 3% 6%;
  cursor: pointer;
  z-index: 10;
  transition: 0.5s;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.backgroundColor};
  font-family: "Roboto", sans-serif;
  font-size: clamp(16px, 1vw, 27px);
  font-weight: 700;
  text-transform: uppercase;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    transform: translateX(5px);
    box-shadow: 0px 0px 10px 0px ${(props) => props.theme.colors.secondary};
  }
  @media screen and (max-width: 1024px) {
    text-align: center;
    margin: auto;
  }
`;

export const SectionImg = styled.div`
  width: 35%;
  z-index: 10;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0px 12px 5px ${({ theme }) => theme.colors.shadow});
  }

  @media screen and (max-width: 1024px) {
    width: 60%;
    margin-right: none;
  }
`;
