import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
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
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  p {
    color: ${(props) => props.theme.colors.title};
    font-size: clamp(10px, 1vw + 15px, 22px);
    margin-top: 30px;
    margin-bottom: 5%;

    a {
      text-decoration: none;
      color: inherit;
      font-weight: bold;
    }
  }
`;
