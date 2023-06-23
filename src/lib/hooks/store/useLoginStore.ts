import { create } from "zustand";

interface LoginStore {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  check: boolean;
  setCheck: () => void;
}

// set 함수를 통해서만 상태를 변경할 수 있다
const useLoginStore = create<LoginStore>((set) => ({
  email: "",
  setEmail: (value: string) =>
    set((state) => ({
      ...state,
      email: value,
    })),
  password: "",
  setPassword: (value: string) =>
    set((state) => ({
      ...state,
      password: value,
    })),
  check: false,
  setCheck: () =>
    set((state) => ({
      ...state,
      check: !state.check,
    })),
}));

export default useLoginStore;

// 하나의 필드에 겹치는 로직이 많아지면, 이렇게 분리해서 사용할 수 있다

// email: {
//   value: '',
//   setValue: (value: string) =>
//     set((state) => ({
//       email: {
//         ...state.email,
//         value,
//       },
//     })),
// },
// password: {
//   value: '',
//   setValue: (value: string) =>
//     set((state) => ({
//       password: {
//         ...state.password,
//         value,
//       },
//     })),
// },
// check: {
//   value: false,
//   setValue: (value: boolean) =>
//     set((state) => ({
//       check: {
//         ...state.check,
//         value,
//       },
//     })),
// },
