import Link from 'next/link'

import { Container, SectionItems, Tech } from "./styles"

export default function CarrosselContainer({ social_networks = [] }) {

  return (
    <>
      <Container>
        <br /><br />
        <SectionItems>
          {social_networks?.length > 0 && social_networks.map((social, key) => (
            <a key={key} href={social.Link} target="_blank"><img src={social.Image} /></a>
          ))}

        </SectionItems><br /><br /><br />
        <SectionItems>
          <Tech alt="Js" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" style={{ maxWidth: "100%" }} />
          <Tech alt="Ts" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" style={{ maxWidth: "100%" }} />
          <Tech alt="React" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" style={{ maxWidth: "100%" }} />
          <Tech alt="HTML" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" style={{ maxWidth: "100%" }} />
          <Tech alt="CSS" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" style={{ maxWidth: "100%" }} />
          <Tech alt="Python" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" style={{ maxWidth: "100%" }}/>
          <Tech alt="Elixir" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/elixir/elixir-original.svg" style={{ maxWidth: "100%" }} />

        </SectionItems>
      </Container>
    </>
  );
};
