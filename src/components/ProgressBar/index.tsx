import { memo } from "react";
import { Container } from "./style";

function CardComponent({ data }) {
  return (
    <Container>
      {data.length ? (
        data.map((skill, index) => <ProgressItem key={index} data={skill} />)
      ) : (
        <ProgressItem data={data} />
      )}
    </Container>
  );
}

const ProgressItem = ({ data, key = 0 }) => (
  <div key={key} className="content">
    <h4>{data.Name}</h4>
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${data.Text}%` }}
        aria-valuenow={data.text}
      >
      </div>
      <span
          style={{
            left: `${data.Text}%`,
          }}
        >
          {data.Text}%
        </span>
        <div
        className="progress-bar-dummies"
        style={{ width: `${100 - Number(data.Text)}%` }}
        aria-valuenow={data.text}
      />
  </div>
    </div>
);

export default memo(CardComponent);
