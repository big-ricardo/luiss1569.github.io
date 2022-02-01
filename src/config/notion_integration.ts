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

    return format;
  });

  return response;
};

const QueryDBGeneric = async (props) => {
  const response = await notion.databases
    .query({
      ...props,
    })
    .then(({ results }: any) => {
      return results?.map((result) => result.properties);
    })
    .catch((e) => console.log(e));

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
