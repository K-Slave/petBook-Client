let domain: Array<string> = [];

// 인자에 빈 배열을 담으면 localhost 에서만 콘솔 출력
// 인자에 스트링 배열을 담으면, 해당 문자열이 포함되는 url 에서만 콘솔 출력
// 만약 url 이 ip 주소값 등이라면, 포트번호만 담아도 됨.
// 출력되고 싶지 않은 주소만 걸러낸다면, 해당 주소를 localConsoleInit 에 매개변수로 전달하고 exceptedConsole 을 사용

// ex
// localConsoleInit(['/list?query', '3000'])
// localConsole('dd') => localhost, 197.125.18.2:3000, /list?query=*** : 'dd'
// exceptedConsole('dd') => '/list?query', '3000' 을 제외한 모든 url : 'dd'

export function InitlocalConsole(userDomain: Array<string>) {
  domain = userDomain;
}

export const exceptedConsole = {
  log(msg: any, option: any): void {
    if (domain.length > 0) {
      if (domain.find((item: string) => window.location.href.includes(item))) {
        return;
      }

      return console.log(msg, option.length > 0 ? option : " ");
    }
  },

  dir(obj: any, option: any): void {
    if (domain.length > 0) {
      if (domain.find((item: string) => window.location.href.includes(item))) {
        return;
      }

      return console.dir(obj, option ? option : " ");
    }
  },
};

const localConsole = {
  log(msg: any, option: any = ""): void {
    try {
      if (window.location.href.includes("localhost")) {
        console.log(msg, option);
        return;
      }

      if (domain.length > 0) {
        console.log(msg, option);
        return;
      }
    } catch (e) {}
  },

  dir(obj: any, option: any = " "): void {
    try {
      if (window.location.href.includes("localhost"))
        return console.dir(obj, option);

      if (domain.length > 0) {
        return console.dir(obj, option);
      }
    } catch (e) {}
  },
};

export default localConsole;
