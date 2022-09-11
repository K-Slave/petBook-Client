import fetchCore from "./fetchCore";

const fetchClient = fetchCore.create();

fetchClient.defaults.baseURL = "https://pypetbook.herokuapp.com";
// fetchClient.defaults.headers.common["X-CSRFToken"] =
//   "8q9PtlXoYBPowjwzxfTOGazF8NOoJm4tnyL9CmumIBD0dUrE0HLpssNX7ozd1ZEf";

export default fetchClient;
