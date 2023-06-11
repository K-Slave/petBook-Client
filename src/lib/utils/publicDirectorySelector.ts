const publicDirectorySelector =
  process.env.NODE_ENV === "production"
    ? "https://petbook.site"
    : "http://localhost:3000";

export default publicDirectorySelector;
