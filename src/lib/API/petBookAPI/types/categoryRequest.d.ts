export interface CategoryListPayload {
  header?: object;
}

export interface CategoryItem {
  id: number;
  name: string;
}

export interface CategoryListResponse extends CommonRequestResult {
  result: Array<CategoryItem>;
}
