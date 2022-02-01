import { Container, Card, Link } from "./style";

export default function CardComponent({ project }) {
  return (
    <Container>
      <Card>
        <div className="image">
          <img src={project.Image} alt={project.Name}></img>
        </div>
        <div>
          <h4>{project.Name}</h4>
        </div>
        <div>
          <p>{project.Description}</p>
        </div>
        <Link
          whileHover={{ transform: "translateX(5px)" }}
          target="_blank"
          href={project.Link}
        >
          <p>Veja</p>
        </Link>
      </Card>
    </Container>
  );
}
