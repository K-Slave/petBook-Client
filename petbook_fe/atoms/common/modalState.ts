import { atom } from "recoil";

const modalState = atom<{
  Component:((props: any) => JSX.Element) | null;
  props: object;
}>({
  key: "modalState",
  default: {
    Component: null,
    props: {},
  },
});

export default modalState;
