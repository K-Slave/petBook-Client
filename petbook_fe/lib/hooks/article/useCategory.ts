import { useRouter } from "next/router";

export default function useCategory() {
    const router = useRouter();
    const { category } = router.query;
    if (category === undefined) {
            return {
            categoryId: 0,
            categoryName: '전체'
        };
    }
    const split = (category as string).split("_");
    return {
        categoryId: Number(split[1]),
        categoryName: split[0]
    };
}
