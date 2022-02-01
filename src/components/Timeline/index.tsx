import { useCallback, memo } from "react";
import { Time, Curse, Institution } from "./style";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const TimeLine = ({ data, colors }) => {
  const variantType = useCallback((date) => {
    return new Date(date).getTime() < new Date().getTime();
  }, []);

  return (
    <>
      <br /> <br />
      <Timeline position="alternate">
        {data.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Time
                whileHover={{
                  transform: index % 2 ? "translateX(5px)" : "translateX(-5px)",
                }}
              >
                {item.Time}
              </Time>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                variant={variantType(item.Date.end) ? "outlined" : "filled"}
                style={{
                  borderColor: colors[index % 2],
                  backgroundColor: variantType(item.Date.end)
                    ? colors[index % 2]
                    : colors[2],
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Curse
                whileHover={{
                  transform: index % 2 ? "translateX(-5px)" : "translateX(5px)",
                }}
              >
                {item.Name}
              </Curse>
              <Institution
                whileHover={{
                  transform: index % 2 ? "translateX(-5px)" : "translateX(5px)",
                }}
              >
                {item.Desc}
              </Institution>
            </TimelineContent>
          </TimelineItem>
        ))}
        <TimelineItem>
          <TimelineOppositeContent>
            <Time></Time>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              style={{
                borderColor: colors[2],
                backgroundColor: colors[2],
              }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <Curse></Curse>
            <Institution></Institution>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default memo(TimeLine);
