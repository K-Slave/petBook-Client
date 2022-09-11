import fetchCore from "./fetchCore";

const fetchClient = fetchCore.create();

fetchClient.defaults.baseURL = "https://pypetbook.herokuapp.com";

export default fetchClient;
