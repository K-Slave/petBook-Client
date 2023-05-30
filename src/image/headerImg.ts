const STORAGE_PATH =
  process.env.NEXT_PUBLIC_STORAGE ||
  "https://objectstorage.ap-seoul-1.oraclecloud.com/n/cnkpahvshifr/b/petbook-image/o/assets";

const headerImg = {
  illust_img_placeholder: `${STORAGE_PATH}/illust_img_placeholder.png`,
  petbook_logo: `${STORAGE_PATH}/petbook_logo.png`,
};

export default headerImg;
