import { useRouter } from "next/router";

export default function usePage() {
  const router = useRouter();
  const pageParam = Number(router.query?.page);
  const currentPage = Number.isNaN(pageParam) ? 1 : pageParam;
  return currentPage;
}
