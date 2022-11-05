import { CategoryItem } from "@lib/API/petBookAPI/types/categoryRequestSpr";
import { atom } from "recoil";

const categoryState = atom<CategoryItem>({
  key: "categoryState",
  default: {
    id: 0,
    name: "전체",
  },
});

export default categoryState;
