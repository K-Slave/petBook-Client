import { STORAGE_PATH } from "@lib/globalConst";
import publicDirectorySelector from "@lib/utils/publicDirectorySelector";

const PUBLIC_PATH = publicDirectorySelector;

const REGISTER_IMG_PATH = `${PUBLIC_PATH}/img/common/register`;

const commonImg = {
  error_helper: `${STORAGE_PATH}/Error_Helper_Icon.svg`,
};

export default commonImg;
