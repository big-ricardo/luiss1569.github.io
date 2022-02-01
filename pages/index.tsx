import { GetStaticProps } from "next";
import Head from 'next/head'
import IndexPage from "@/src/views/Index"
import { ProjectsDBQuery, SocialNetworkDbQuery, ExperiencesDbQuery } from "@/src/config/notion_integration"

export default function Home({ projects,  social_networks, experiences }) {
  return (
    <div>
      <Head>
        <title>Luis Ricardo</title>
      </Head>
      <IndexPage
        projects={projects}
        social_networks={social_networks}
        experiences={experiences}
      />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const projects: any = await ProjectsDBQuery({
    filter: {
      property: "View",
      checkbox: {
        equals: true
      },
    }
  })

  const social_networks: any = await SocialNetworkDbQuery({
    filter: {
      property: "View",
      checkbox: {
        equals: true
      },
    }
  })

  const experiences: any = await ExperiencesDbQuery({
    filter: {
      property: "View",
      checkbox: {
        equals: true
      },
    },
    sorts: [{ property: "Date", direction: "descending" }]
  })

  const experiences_type = {
    study: "162061ee-d4f2-46ca-9042-20012410cb2e",
    work: "4b2b7b9c-33e4-4dd3-91f9-5a69e0d91ed6",
    volunteer: "6cf1cb90-9da5-4daf-bb02-d0b6fa085e62",
  }

  const studies = experiences.filter((experience) => experience.Type.id === experiences_type.study)
  const works = experiences.filter((experience) => experience.Type.id === experiences_type.work)
  const volunteers = experiences.filter((experience) => experience.Type.id === experiences_type.volunteer)

  return {
    props: {
      projects,
      social_networks,
      experiences: {
        studies,
        works,
        volunteers,
      }
    },
    revalidate: 10
  };
};
