import { GetStaticProps } from "next";
import Head from "next/head";
import IndexPage from "@/src/views/Index";
import {
  ProjectsDBQuery,
  SocialNetworkDbQuery,
  ExperiencesDbQuery,
  AboutDbQuery,
} from "@/src/config/notion_integration";

export default function Home({ projects, social_networks, experiences, about }) {
  console.log(about);
  return (
    <div>
      <Head>
        <title>Luis Ricardo</title>
      </Head>
      <IndexPage
        projects={projects}
        social_networks={social_networks}
        experiences={experiences}
        about={about}
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects: any = await ProjectsDBQuery({
    filter: {
      property: "View",
      checkbox: {
        equals: true,
      },
    },
  });

  const social_networks: any = await SocialNetworkDbQuery({
    filter: {
      property: "View",
      checkbox: {
        equals: true,
      },
    },
  });

  const experiences: any = await ExperiencesDbQuery({
    filter: {
      property: "View",
      checkbox: {
        equals: true,
      },
    },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  const about: any = await AboutDbQuery({
    filter: {
      property: "View",
      checkbox: {
        equals: true,
      },
    },
  });

  return {
    props: {
      projects,
      social_networks,
      experiences,
      about,
    },
    revalidate: 3500,
  };
};
