import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
 @media screen and (max-width: 1024px){

  }
`;

export const SectionItens = styled(motion.div)`
  width: 80%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 10;
  gap: 10px;
    @media screen and (max-width: 1024px){
     width: 90%;
    }
    @media screen and (max-width: 768px) {
     width: 90%;
    }
  p{
    color: ${props => props.theme.colors.title};
    font-size: clamp(22px, 1vw + 5px, 25px);
    margin-top: 30px;
    margin-bottom: 5%;
    @media screen and (max-width: 1024px){
      text-align: center;
      font-size: clamp(22px, 3vh - 5px, 200px);
      margin-bottom: 10px
    }
  }
`
