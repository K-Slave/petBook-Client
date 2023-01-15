import { useRouter } from "next/router";

export default function useSearchText() {
  const router = useRouter();
  const { query } = router.query;
  return query === undefined ? "" : (query as string);
}
