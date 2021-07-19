import { Carrossel, SectionText, SectionImg,H4 } from "./styles";
import Link from 'next/link'

export default function CarrosselView() {

  return (
    <>
      <Carrossel>
        <SectionText>
          <div>
            <h1>Luis Ricardo</h1>
            <h3>Sistemas de Informação | UNIFEI</h3>
          </div>
          <div>
            <p>Entusiasta das melhores tecnologias de desenvolvimento</p>
            <Link href={"/"}><H4 whileHover={{transform:"translateX(5px)"}}>COMEÇAR</H4></Link>
          </div>
        </SectionText>
        <SectionImg whileHover={{ scale: 1.1 }}>
          <img src="/carrossel.svg" alt="" />
        </SectionImg>
      </Carrossel>
    </>
  );
};
