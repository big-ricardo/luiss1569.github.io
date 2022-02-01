import { memo } from "react";
import Lottie from 'react-lottie';
import {Container, SectionText, Divider} from "./style.ts";

function CardComponent() {

  return (
    <Container>
      <Divider />
      <SectionText>
        © {new Date().getFullYear()} Todos os direitos reservados
      </SectionText>
    </Container>
  );
}

export default memo(CardComponent);
