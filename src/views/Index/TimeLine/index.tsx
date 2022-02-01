import { useContext, useMemo } from "react";
import Timeline from "@/src/components/Timeline";
import { Container } from "./style";
import { ThemeContext } from "styled-components";

export default function OppositeContentTimeline({ experiences }) {
  const theme = useContext(ThemeContext);
  const colors = useMemo(() => {
    return [
      theme.colors.secondary,
      theme.colors.primary,
      theme.colors.backgroundColor,
    ];
  }, [theme]);

  return (
    <>
      <br /> <br /> <br /> <br /> <br />
      <Container>
        <h3 className="title">Experiência</h3>
        <Timeline data={experiences.works} colors={colors} />
      </Container>
      <Container>
        <h3 className="title">Formação Acadêmica</h3>
        <Timeline data={experiences.studies} colors={colors} />
      </Container>
      <Container>
        <h3 className="title">Experiência de Voluntariado</h3>
        <Timeline data={experiences.volunteers} colors={colors} />
      </Container>
    </>
  );
}
