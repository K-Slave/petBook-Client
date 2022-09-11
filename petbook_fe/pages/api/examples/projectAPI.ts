import axios from "axios";

// pypetbook.herokuapp.com/

const req = {
  // 더 많은 옵션 : https://axios-http.com/kr/docs/req_config
  // 응답 스키마 : https://axios-http.com/kr/docs/res_schema

  // Create
  post(url: string, payload: any) {
    return axios({
      method: "post",
      baseURL: "https://yoonocean-zum-board-backend.herokuapp.com/api/project",
      url: url,
      headers: { "create-project-request": "XMLHttpRequest" },
      data: JSON.stringify(payload),
      timeout: 7000,
    });
  },

  // Read
  getList(url: string) {
    return axios({
      method: "get",
      baseURL: "https://yoonocean-zum-board-backend.herokuapp.com/api/project",
      url: url,
      headers: { "get-projects-request": "XMLHttpRequest" },
      timeout: 7000,
    });
  },

  get(url: string) {
    return axios({
      method: "get",
      baseURL: "https://yoonocean-zum-board-backend.herokuapp.com/api/project",
      url: url,
      headers: { "get-one-project-request": "XMLHttpRequest" },
      //params: id,
      timeout: 7000,
    }); //
  },

  // Update
  patch(url: string, payload: any) {
    return axios({
      method: "patch",
      baseURL: "https://yoonocean-zum-board-backend.herokuapp.com/api/project",
      url: url,
      //params: id,
      headers: { "patch-project-request": "XMLHttpRequest" },
      data: JSON.stringify(payload),
      timeout: 7000,
    });
  },

  // Delete
  delete(url: string) {
    return axios({
      method: "delete",
      baseURL: "https://yoonocean-zum-board-backend.herokuapp.com/api/project",
      url: url,
      //params: id,
      headers: { "delete-project-request": "XMLHttpRequest" },
      timeout: 7000,
    });
  },
};

export default req;

/* 

추후 구현할 인스턴스형 코드

import qs from "qs";
import Client from "./Client";

// Create
export const writeProject = ({ title, section, body  }) =>
  Client.post("/Projects", { title, section, body });

// Read
export const readProject = (id) => Client.get(`/Projects/${id}`);

export const listProjects = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return Client.get(`/Projects?${queryString}`);
};

export const updateProject = ({ id, title, body, tags }) =>
  Client.patch(`/Projects/${id}`, {
    title,
    body,
    tags,
  });

export const removeProject = (id) => Client.delete(`/Projects/${id}`);
*/
