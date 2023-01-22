import { userIdContext } from "@pages/community/list/[articleId]";
import { useContext } from "react";

export default function useUserId() {
    return useContext(userIdContext);
}
