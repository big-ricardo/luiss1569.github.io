import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const SectionText = styled.h4`
  color: ${props => props.theme.colors.text};
  text-align: center;
  font-weight: inherit;
  font-size: clamp(11px, 1em , 22px);
  width: 90%;
`
export const Divider = styled(motion.div)`
  height: 1px;
  background-color: ${props => props.theme.colors.primary};
  margin-top: 30px;
  margin-bottom: 60px;
  animation: slidein 2s ease infinite;

  @keyframes slidein {
  0% {
    width: 70%;
  }
  60% {
    width: 90%;
  }
  100% {
    width: 70%;
  }
}
`
