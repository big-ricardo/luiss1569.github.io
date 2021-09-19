import Link from 'next/link'

import { Container, SectionItens } from "./styles"

export default function CarrosselContainer({ social_networks = [] }) {

  return (
    <>
      <Container>
        <SectionItens>
          {social_networks.length > 0 && social_networks.map((social, key) => (
            <a key={key} href={social.Link} target="_blank"><img src={social.Image} /></a>
          ))}

        </SectionItens><br /><br /><br />
        <SectionItens>
          <a target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"><img alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" style={{ maxWidth: "100%" }} /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"><img alt="Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" style={{ maxWidth: "100%" }} /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"><img alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" style={{ maxWidth: "100%" }} /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"><img alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" style={{ maxWidth: "100%" }} /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"><img alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" style={{ maxWidth: "100%" }} /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"><img alt="Python" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" style={{ maxWidth: "100%" }} /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/elixir/elixir-original.svg"><img alt="Elixir" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/elixir/elixir-original.svg" style={{ maxWidth: "100%" }} /></a>

        </SectionItens>
      </Container>
    </>
  );
};
