import Link from 'next/link'

import {Container, SectionText} from "./styles"

export default function CarrosselContainer() {

  return (
    <>
      <br /> <br />
      <Container>
        <SectionText>
          <h3 className="title">Sobre</h3>
          <p>Sou Luis Ricardo, tenho 19 anos, sou formado como Técnico em Informática pelo Cep- Centro Educação Profissional Tancredo Neves, atualmente estou cursando Sistemas da Informação na Universidade Federal de Itajubá - UNIFEI. Também trabalho como desenvolvedor FullStack como estagiário na empresa <a href='https://www.tech4h.com.br' target="_blank">Tech4Humans Brasil</a>.</p>
        </SectionText>
      </Container>
    </>
  );
};
