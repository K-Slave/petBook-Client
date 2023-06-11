import publicDirectorySelector from "@lib/utils/publicDirectorySelector";

const STORAGE_PATH =
  process.env.NEXT_PUBLIC_STORAGE ||
  "https://objectstorage.ap-seoul-1.oraclecloud.com/n/cnkpahvshifr/b/petbook-image/o/assets";

const PUBLIC_PATH = publicDirectorySelector;

const REGISTER_IMG_PATH = `${PUBLIC_PATH}/img/common/register`;

const inputImg = {
  face_wink_off: `${REGISTER_IMG_PATH}/face_wink.svg`,
  face_wink_on: `${REGISTER_IMG_PATH}/face_wink_active.svg`,
  keyhole_off: `${REGISTER_IMG_PATH}/lock_keyhole.svg`,
  keyhole_on: `${REGISTER_IMG_PATH}/lock_keyhole_active.svg`,
  check_false: `${STORAGE_PATH}/Round_Checkbox_False.png`,
  check_true: `${STORAGE_PATH}/Round_Checkbox_True.png`,
};

export default inputImg;
