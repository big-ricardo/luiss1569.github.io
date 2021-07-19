import Carrossel from './Carrossel'
import About from './About'
import Network from './Network'
import Recents from './Recents'

export default function Home() {
  return (
    <div>
        <Carrossel />
        <Network/>
        <About/>
        <Recents/>
    </div>
  )
}
