// const petBookInstance = fetchCore.create();

// try {
//   // petBookInstance.defaults.baseURL = process.env.BACKEND_BASE_URL as string;
//   petBookInstance.defaults.baseURL = "https://pypetbook.herokuapp.com";
//   petBookInstance.defaults.headers.common["Content-Type"] = "application/json";
// } catch (error) {
//   console.error(error);
// }
/*
  todos : axios 인터셉터 구현, timeout 구현

  method: "post",
  url: url,
  data: JSON.stringify(payload),
  >> timeout: 7000,

  글로벌 설정 예시:
  
  // API 주소를 다른 곳으로 사용함
  client.defaults.baseURL = 'https://external-api-server.com/' 
  // 헤더 설정
  client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';
  // 인터셉터 설정
  axios.intercepter.response.use(\
    response => {
      // 요청 성공 시 특정 작업 수행
      return response;
    }, 
    error => {
      // 요청 실패 시 특정 작업 수행
      return Promise.reject(error);
    }
  })  
*/
export const donterr = "";
