import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  margin-top: 100px;
`
export const Curse = styled(motion.h3)`
  color: ${props => props.theme.colors.title};
  font-size: clamp(15px, 1vw + 15px, 25px);

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Institution = styled(motion.h5)`
  color: ${props => props.theme.colors.title};
  font-size: clamp(12px, 1em - 1px, 20px);
  opacity: 0.9;
  padding-bottom: 20px;
`
export const Time = styled(motion.h4)`
  color: ${props => props.theme.colors.title};
  opacity: 0.8;
  font-size: clamp(12px, 1em, 25px);
`
