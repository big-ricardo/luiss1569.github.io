import ProgressBar from "@/src/components/ProgressBar";
import Link from "next/link";

import { Container, SectionText, SectionSkills } from "./styles";

export default function CarrosselContainer({about:{resume, soft, technical}}) {
  return (
    <>
      <Container>
        <SectionText>
          <h3 className="title" id="about">Sobre Mim</h3> <br /> <br />
          {!resume.Text?.length ? resume.Text.map((text, index) => (
            <p key={index}>{text}</p>
          )) : (
            <p>{resume.Text}</p>
          )}
        </SectionText>
        <SectionSkills>
          <div className="skills">
          <h3>Habilidades Técnicas</h3>
            <ProgressBar data={technical} />
          </div>
          <div className="skills">
          <h3>Habilidades Interpessoais</h3>
            <ProgressBar data={soft} />
          </div>
        </SectionSkills>
      </Container>
    </>
  );
}
