let domain: Array<string> = [];

// 인자에 빈 배열을 담으면 localhost 에서만 콘솔 출력
// 인자에 스트링 배열을 담으면, 해당 문자열이 포함되는 url 에서만 콘솔 출력
// 만약 url 이 ip 주소값 등이라면, 포트번호만 담아도 됨.
// 출력되고 싶지 않은 주소만 걸러낸다면, 해당 주소를 localConsoleInit 에 매개변수로 전달하고 exceptedConsole 을 사용

// ex
// localConsoleInit(['/list?query', '3000'])
// localConsole('dd') => localhost, 197.125.18.2:3000, /list?query=*** : 'dd'
// exceptedConsole('dd') => '/list?query', '3000' 을 제외한 모든 url : 'dd'

class LocalConsoleInstance {
  public domain: Array<string> = [];

  public console;

  constructor() {
    if (process.env.NODE_ENV !== "production") {
      this.console = console;
    }

    if (process.env.NODE_ENV === "production") {
      delete this.console;
    }

    return this;
  }
}

const localConsole = new LocalConsoleInstance()?.console;

export default localConsole;

// if (allowDomain) {
//   domain = allowDomain;
//   // if (domain.length > 0) {
//   //   if (
//   //     domain.find((item: string) => window.location.href.includes(item))
//   //   ) {
//   //     if (option) {
//   //       console.log(msg, option);
//   //       return;
//   //     }
//   //     console.log(msg);
//   //   }
//   // }
// }

export function InitlocalConsole(userDomain: Array<string>) {
  domain = userDomain;
}

export const exceptedConsole = {
  log(msg?: any, option?: any): void {
    if (domain.length > 0) {
      if (domain.find((item: string) => window.location.href.includes(item))) {
        return;
      }

      if (option) {
        console.log(msg, option);
        return;
      }

      console.log(msg);
    }
  },

  dir(obj?: any, option?: any): void {
    if (domain.length > 0) {
      if (domain.find((item: string) => window.location.href.includes(item))) {
        return;
      }

      if (option) {
        console.log(obj, option);
        return;
      }

      console.log(obj);
    }
  },
};

// const localConsole = {
//   log(msg?: any, option?: any): void {
//     try {
//       if (window.location.href.includes("localhost")) {
//         if (option) {
//           console.log(msg, option);
//           return;
//         }
//         console.log(msg);
//         return;
//       }

//       if (domain.length > 0) {
//         if (
//           domain.find((item: string) => window.location.href.includes(item))
//         ) {
//           if (option) {
//             console.log(msg, option);
//             return;
//           }
//           console.log(msg);
//         }
//       }
//     } catch (e) {
//       console.warn(e);
//     }
//   },

//   dir(obj?: any, option?: any): void {
//     try {
//       if (window.location.href.includes("localhost")) {
//         if (option) {
//           console.dir(obj, option);
//           return;
//         }

//         console.dir(obj);
//         return;
//       }

//       if (domain.length > 0) {
//         if (
//           domain.find((item: string) => window.location.href.includes(item))
//         ) {
//           if (option) {
//             console.dir(obj, option);
//             return;
//           }
//           console.dir(obj);
//         }
//       }
//     } catch (e) {
//       console.warn(e);
//     }
//   },
//   error(data?: any) {
//     try {
//       if (window.location.href.includes("localhost")) {
//         console.error(data);
//         return;
//       }

//       if (domain.length > 0) {
//         if (
//           domain.find((item: string) => window.location.href.includes(item))
//         ) {
//           console.error(data);
//         }
//       }
//     } catch (e) {
//       console.warn(e);
//     }
//   },
// };

// export default localConsole;
