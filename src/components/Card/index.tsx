import { Container, Card, H4 } from "./style";
import Link from 'next/link'

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
        <Link href={project.Link}><H4 whileHover={{transform:"translateX(5px)"}}>Veja</H4></Link>
      </Card>
    </Container>
  );
}
