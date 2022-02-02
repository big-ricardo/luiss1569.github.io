import { Client } from "@notionhq/client";

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_ACCESS_TOKEN,
});

export const ProjectsDBQuery = async (props = {}) => {
  const response = await QueryDBGeneric({
    database_id: process.env.NOTION_PROJECTS_DB_ID,
    ...props,
  }).then((result) => {
    let keys = null;
    const array = result.map((obj) => {
      keys = Object.keys(obj);
      return keys.map(function (key) {
        return obj[key];
      });
    });

    const format = array.map((element) => {
      let object = {};
      element.forEach((item, i) => {
        const key = keys[i];
        const obj = convertDataToObj(item, key);
        object = { ...object, ...obj };
      });
      return object;
    });

    return format;
  });

  return response;
};

export const SocialNetworkDbQuery = async (props = {}) => {
  const response = await QueryDBGeneric({
    database_id: process.env.NOTION_SOCIAL_NETWORK_DB_ID,
    ...props,
  }).then((result) => {
    let keys = null;
    const array = result.map((obj) => {
      keys = Object.keys(obj);
      return keys.map(function (key) {
        return obj[key];
      });
    });

    const format = array.map((element) => {
      let object = {};
      element.forEach((item, i) => {
        const key = keys[i];
        const obj = convertDataToObj(item, key);
        object = { ...object, ...obj };
      });
      return object;
    });

    return format;
  });

  return response;
};

export const ExperiencesDbQuery = async (props = {}) => {
  const response = await QueryDBGeneric({
    database_id: process.env.NOTION_EXPERIENCES_DB_ID,
    ...props,
  }).then((result) => {
    let keys = null;
    const array = result.map((obj) => {
      keys = Object.keys(obj);
      return keys.map(function (key) {
        return obj[key];
      });
    });

    const format = array.map((element) => {
      let object = {};
      element.forEach((item, i) => {
        const key = keys[i];
        const obj = convertDataToObj(item, key);
        object = { ...object, ...obj };
      });
      return object;
    });

    return format || [];
  });

  const experiences_type = {
    study: "162061ee-d4f2-46ca-9042-20012410cb2e",
    work: "4b2b7b9c-33e4-4dd3-91f9-5a69e0d91ed6",
    volunteer: "6cf1cb90-9da5-4daf-bb02-d0b6fa085e62",
  };

  const studies = response.filter(
    (experience) => experience.Type.id === experiences_type.study
  );
  const works = response.filter(
    (experience) => experience.Type.id === experiences_type.work
  );
  const volunteers = response.filter(
    (experience) => experience.Type.id === experiences_type.volunteer
  );

  return {
    studies,
    works,
    volunteers,
  };
};

export const AboutDbQuery = async (props = {}) => {
  const response = await QueryDBGeneric({
    database_id: process.env.NOTION_ABOUT_DB_ID,
    ...props,
  }).then((result) => {
    let keys = null;
    const array = result.map((obj) => {
      keys = Object.keys(obj);
      return keys.map(function (key) {
        return obj[key];
      });
    });

    const format = array.map((element) => {
      let object = {};
      element.forEach((item, i) => {
        const key = keys[i];
        const obj = convertDataToObj(item, key);
        object = { ...object, ...obj };
      });
      return object;
    });

    return format || [];
  });

  const about_type = {
    resume: "d76ee424-310b-4954-a31f-ad4456023fc8",
    soft: "ba072743-3401-40b1-8aa9-cedea7604500",
    technical: "d5b09297-785d-422c-b151-829c3467388a",
  };

  const resume = response.filter(
    (experience) => experience.Type.id === about_type.resume
  );
  const soft = response.filter(
    (experience) => experience.Type.id === about_type.soft
  );
  const technical = response.filter(
    (experience) => experience.Type.id === about_type.technical
  );

  return {
    resume: resume?.[0],
    soft,
    technical,
  };
};

const QueryDBGeneric = async (props) => {
  const response = await notion.databases
    .query({
      ...props,
    })
    .then(({ results }: any) => {
      return results?.map((result) => result.properties);
    })
    .catch((e) => console.log(e.message));

  return response || [];
};

const convertDataToObj = (item: any, key: string) => {
  switch (item.type) {
    case "rich_text":
      if (item.rich_text.length < 1) return {};
      return {
        [key]:
          item.rich_text.length > 1
            ? item.rich_text.map((text) => text?.plain_text)
            : item.rich_text[0]?.plain_text,
      };
      break;
    case "title":
      return { [key]: item.title[0].plain_text };
      break;
    case "multi_select":
      return { [key]: item.multi_select };
      break;
    case "email":
      return { [key]: item.email };
      break;
    case "url":
      return { [key]: item.url };
      break;
    case "files":
      if (item.files.length < 1) return {};
      return {
        [key]:
          item.files.length > 1
            ? item.files.map((arq) => arq.file.url)
            : item.files[0].file.url,
      };
      break;
    case "checkbox":
      return { [key]: item.checkbox };
      break;
    case "number":
      return { [key]: item.number };
      break;
    case "select":
      return { [key]: item.select };
      break;
    case "date":
      return { [key]: item.date };
      break;
    case "phone_number":
      return { [key]: item.phone_number };
      break;
    case "formula":
      return convertDataToObj(item.formula, key);
      break;
    default:
      return "";
      break;
  }
};
