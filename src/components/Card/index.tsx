import { Container, Card, H4 } from "./style";
import Link from 'next/link'

export default function CardComponent({ user }) {
  return (
    <Container>
      <Card>
        <div className="image">
          <img src={user.image} alt={user.name}></img>
        </div>
        <div>
          <h4>{user.name}</h4>
        </div>
        <div>
          <p>{user.description}</p>
        </div>
        <Link href={"/"}><H4 whileHover={{transform:"translateX(5px)"}}>Assista</H4></Link>
      </Card>
    </Container>
  );
}
