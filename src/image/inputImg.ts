import { STORAGE_PATH } from "@lib/globalConst";
import publicDirectorySelector from "@lib/utils/publicDirectorySelector";

const PUBLIC_PATH = publicDirectorySelector;

const REGISTER_IMG_PATH = `${PUBLIC_PATH}/img/common/register`;

const inputImg = {
  face_wink_off: `${REGISTER_IMG_PATH}/face_wink.svg`,
  face_wink_on: `${REGISTER_IMG_PATH}/face_wink_active.svg`,
  keyhole_off: `${REGISTER_IMG_PATH}/lock_keyhole.svg`,
  keyhole_on: `${REGISTER_IMG_PATH}/lock_keyhole_active.svg`,
  check_false: `${STORAGE_PATH}/Round_Checkbox_False.png`,
  check_true: `${STORAGE_PATH}/Round_Checkbox_True.png`,
  password_show: `${STORAGE_PATH}/Password_Eye_Show.png`,
  password_hide: `${STORAGE_PATH}/Password_Eye_Hide.png`,
};

export default inputImg;
