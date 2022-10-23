import { atom } from "recoil";

const categoryState = atom<{ id: number; name: string }>({
  key: "categoryState",
  default: {
    id: 0,
    name: "전체",
  },
});

export default categoryState;
