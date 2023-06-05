import publicDirectorySelector from "@lib/utils/publicDirectorySelector";

const PUBLIC_PATH = publicDirectorySelector;

const REGISTER_IMG_PATH = `${PUBLIC_PATH}/img/common/register`;

const inputImg = {
  face_wink_off: `${REGISTER_IMG_PATH}/face_wink.svg`,
  face_wink_on: `${REGISTER_IMG_PATH}/face_wink_active.svg`,
  keyhole_off: `${REGISTER_IMG_PATH}/lock_keyhole.svg`,
  keyhole_on: `${REGISTER_IMG_PATH}/lock_keyhole_active.svg`,
};

export default inputImg;
