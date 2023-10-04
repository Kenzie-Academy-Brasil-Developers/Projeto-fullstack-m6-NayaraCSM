import handleErrors from "./handleErrors";
import checkValidBody from "./checkValidBody.middleware";
import checkIsAdvertiser from "./checkIsAdvertiser.middleware";
import checkTokenUser from "./checkTokenUser.middleware";
import checkToken from "./checkToken.middleware";
import checkIdExist from "./checkIdExist.middleware";
import checkUniqueEmail from "./checkUniqueEmail.middleware";
import checkAddressUnique from "./checkAddressUnique.middleware";

export default {
  handleErrors,
  checkValidBody,
  checkIsAdvertiser,
  checkTokenUser,
  checkToken,
  checkIdExist,
  checkUniqueEmail,
  checkAddressUnique,
};
