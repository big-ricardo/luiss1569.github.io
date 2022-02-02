import Carrossel from "./Carrossel";
import About from "./About";
import Network from "./Network";
import Recents from "./Projects";
import Timeline from "./TimeLine";
import Lottie from "react-lottie";
import animationData from "../../lotties/robotHello.json";

export default function Home({ projects, social_networks, experiences, about }) {
  return (
    <div>
      <Carrossel />
      <Network social_networks={social_networks} />
      <About about={about} />
      <Recents projects={projects} />
      <Timeline experiences={experiences} />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "clamp(150px, 20vw, 300px)",
          zIndex: 10,
        }}
      >
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          speed={0.8}
        />
      </div>
    </div>
  );
}
