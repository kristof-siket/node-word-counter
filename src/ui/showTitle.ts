import figlet from "figlet";
import { APP_TITLE } from "../utils/contants";

const showTitle = () => {
  console.log(figlet.textSync(APP_TITLE));
};

export default showTitle;
