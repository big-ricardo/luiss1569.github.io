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

export default function OppositeContentTimeline() {
  const theme = React.useContext(ThemeContext);
  return (
    <Container>
      <h3 className="title">Trajetória</h3>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Time whileHover={{transform:"translateX(-5px)"}}>
              2017 - 2019
            </Time>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" style={{borderColor: theme.colors.secondary}}/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Curse whileHover={{transform:"translateX(5px)"}}>
              Técnico em Informática
            </Curse>
            <Institution whileHover={{transform:"translateX(5px)"}}>CEP - Centro Educação Profissional Tancredo Neves</Institution>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}
