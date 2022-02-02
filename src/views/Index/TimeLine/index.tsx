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
      <br /> <br /> <br /><br /> <br />
      <Container>
        <h3 className="title" style={{margin: 0}}>Carreira</h3>
        <br /> <br /> <br /> <br />
        <h3 className="simple-title" style={{margin: 0}}>Experiência</h3>
        <Timeline data={experiences.works} colors={colors} />
      </Container>
      <Container>
        <h3 className="simple-title" style={{margin: 0}}>Formação Acadêmica</h3>
        <Timeline data={experiences.studies} colors={colors} />
      </Container>
      <Container>
        <h3 className="simple-title" style={{margin: 0}}>Experiência de Voluntariado</h3>
        <Timeline data={experiences.volunteers} colors={colors} />
      </Container>
    </>
  );
}
