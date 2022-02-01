import Carrossel from './Carrossel'
import About from './About'
import Network from './Network'
import Recents from './Projects'
import Timeline from './TimeLine'

export default function Home({ projects,  social_networks, experiences }) {
  return (
    <div>
      <Carrossel />
      <Network  social_networks={ social_networks} />
      <About />
      <Recents projects={ projects } />
      <Timeline experiences={ experiences }/>
    </div>
  )
}
