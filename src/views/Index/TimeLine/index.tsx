import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import { Container, Time, Curse, Institution } from './style';
import { ThemeContext } from 'styled-components';

export default function OppositeContentTimeline({ experiences }) {
  const theme = React.useContext(ThemeContext);
  const colors = [theme.colors.secondary, theme.colors.primary];

  return (
    <>
      <Container>
        <h3 className="title">Experiência</h3>
        <TimeLine data={experiences.works} colors={colors} />
      </Container>
      <Container>
        <h3 className="title">Formação Acadêmica</h3>
        <TimeLine data={experiences.studies} colors={colors} />
      </Container>
      <Container>
        <h3 className="title">Experiência de Voluntariado</h3>
        <TimeLine data={experiences.volunteers} colors={colors} />
      </Container>
    </>
  );
}

const TimeLine = ({ data, colors }) => {

  const variantType = React.useCallback((date) => {
    return (new Date(date).getTime() < new Date().getTime())
  }, []);

  return (
    <>
      <br />
      <Timeline position="alternate">
        {data.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Time whileHover={{ transform: index % 2 ? "translateX(5px)" : "translateX(-5px)" }}>
                {item.Time}
              </Time>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant={`${variantType(item.Date.end) ? "outline" : "filled"} `} style={{ borderColor: colors[index % 2], backgroundColor: variantType(item.Date.end) ? colors[index % 2] : '' }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Curse whileHover={{ transform: index % 2 ? "translateX(-5px)" : "translateX(5px)" }}>
                {item.Name}
              </Curse>
              <Institution whileHover={{ transform: index % 2 ? "translateX(-5px)" : "translateX(5px)" }}>
                {item.Desc}
              </Institution>
            </TimelineContent>
          </TimelineItem>
        ))}
        <TimelineItem >
          <TimelineOppositeContent>
            <Time >

            </Time>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot style={{ borderColor: colors[data.length % 2], backgroundColor: colors[data.length % 2] }} />
          </TimelineSeparator>
          <TimelineContent>
            <Curse>

            </Curse>
            <Institution>
            </Institution>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  )
};
