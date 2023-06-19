export interface CategoryListPayload {
  header?: object;
}

export interface CategoryItem {
  id: number;
  name: string;
}

export type CategoryListResponse = Array<CategoryItem>;
