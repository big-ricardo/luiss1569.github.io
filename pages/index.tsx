import { GetStaticProps } from "next";
import Head from 'next/head'
import IndexPage from "@/src/views/Index"
import { ProjectsDBQuery, SocialNetworkDbQuery } from "@/src/config/notion_integration"

export default function Home({ projects,  social_networks }) {
  return (
    <div>
      <Head>
        <title>Luis Ricardo</title>
      </Head>
      <IndexPage projects={projects}  social_networks={ social_networks} />
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

  return {
    props: {
      projects,
      social_networks
    },
    revalidate: 10
  };
};
