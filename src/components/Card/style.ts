import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  perspective: 100px;
  perspective-origin: 50% -100%;
  border-radius: 20px;
  margin-top: 50px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: clamp(270px, 1vw + 350px, 90vw);
  align-items: center;
  padding: 5px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  min-height: 445px;
  max-height: 450px;
  border-radius: 20px;
  position: relative;
  transform-style: preserve-3d;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  transition: background-color 0.3s ease-in-out;

  &::before,
  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    border-radius: 20px;
    opacity: 0.8;
    transition: transform 0.2s ease-in-out;
  }

  &::before {
    background-color: ${(props) => props.theme.colors.primary};
    z-index: -1;
    transform: translate3D(0, 0, -5px);
  }
  &::after {
    background-color: ${(props) => props.theme.colors.secondary};
    z-index: -2;
    transform: translate3D(0, 0, -10px);
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    &::before {
      transform: translate3D(0, 0, 0px);
    }
    &::after {
      transform: translate3D(0, 0, -5px);
    }
  }

  a {
    padding: 10px;
  }

  div.image {
    width: 90%;
    height: 190px;
    margin-top: 10px;
    margin-bottom: 10px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 5px;
    max-width: 90%;

    h4 {
      font-size: clamp(15px, 1.6em, 35px);
      color: ${(props) => props.theme.colors.text};
    }

    p {
      text-align: center;
      font-size: clamp(12px, 1em, 25px);
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

export const Link = styled(motion.a)`
  border-radius: 50px;
  padding: 3% 6%;
  background-color: ${(props) => props.theme.colors.secondary};
  margin-top: 15px;
  margin-bottom: 20px;
  min-width: 80px;
  text-decoration: none;

  p {
    color: ${(props) => props.theme.colors.backgroundColor};
    font-size: clamp(15px, 1vw, 27px);
    margin: auto;
    text-align: center;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
  @media screen and (max-width: 1024px) {
    text-align: center;
    margin: auto;
  }
`;
