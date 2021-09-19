import { GetStaticProps } from "next";
import { Container, List } from './styles'
import Card from '@/src/components/Card'

export default function RecentsContainer({ projects = [] }) {

  return (
    <Container>
      <h3 className="title">Projetos Recentes</h3>
      <List>
        {projects.length > 0 ? (
          projects.map((project, key) => (
            <Card key={key} project={project}></Card>
          ))
        ) : (<></>)}
      </List>
    </Container>
  )
}
