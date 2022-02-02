import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const SectionText = styled(motion.div)`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  p {
    color: ${(props) => props.theme.colors.title};
    font-size: clamp(15px, 1vw + 14px, 25px);
    margin-top: 30px;
    margin-bottom: 5%;

    a {
      text-decoration: none;
      color: inherit;
      font-weight: bold;
    }
  }
`;

export const SectionSkills = styled(motion.div)`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 50px;
  }

  .skills{
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    h3{
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
