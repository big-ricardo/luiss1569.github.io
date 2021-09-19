import Carrossel from './Carrossel'
import About from './About'
import Network from './Network'
import Recents from './Projects'

export default function Home({ projects,  social_networks }) {
  return (
    <div>
      <Carrossel />
      <Network  social_networks={ social_networks} />
      <About />
      <Recents projects={projects} />
    </div>
  )
}
