import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  flex: 1;
  width:100%;
  padding: 20px;
  gap: 1em;
`

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: clamp(30px, 1vw, 70px);
  cursor: pointer;
`
