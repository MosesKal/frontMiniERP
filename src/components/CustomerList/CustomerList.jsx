import { memo } from "react";
import PropTypes from "prop-types";
import resets from "../_resets.module.css";
import { ArowIcon } from "./ArowIcon.js";
import { ArrowDown2Icon } from "./ArrowDown2Icon.js";
import { ArrowDown3Icon } from "./ArrowDown3Icon.js";
import { ArrowDown4Icon } from "./ArrowDown4Icon.js";
import { ArrowDown5Icon } from "./ArrowDown5Icon.js";
import { CallIcon } from "./CallIcon.js";
import { CategoryIcon } from "./CategoryIcon.js";
import { ChartIcon } from "./ChartIcon.js";
import classes from "./CustomerList.module.css";
import { EditIcon } from "./EditIcon.js";
import { IconlyBoldActivityIcon } from "./IconlyBoldActivityIcon.js";
import { IconlyBoldCalendarIcon } from "./IconlyBoldCalendarIcon.js";
import { IconlyBoldDeleteIcon } from "./IconlyBoldDeleteIcon.js";
import { IconlyBoldDocumentIcon } from "./IconlyBoldDocumentIcon.js";
import { IconlyBoldNotificationIcon } from "./IconlyBoldNotificationIcon.js";
import { IconlyBoldSettingIcon } from "./IconlyBoldSettingIcon.js";
import { IconlyBoldTicketIcon } from "./IconlyBoldTicketIcon.js";
import { ImageBgIcon } from "./ImageBgIcon.js";
import { ImgBgIcon2 } from "./ImgBgIcon2.js";
import { ImgBgIcon3 } from "./ImgBgIcon3.js";
import { ImgBgIcon4 } from "./ImgBgIcon4.js";
import { ImgBgIcon5 } from "./ImgBgIcon5.js";
import { ImgBgIcon6 } from "./ImgBgIcon6.js";
import { ImgBgIcon7 } from "./ImgBgIcon7.js";
import { ImgBgIcon8 } from "./ImgBgIcon8.js";
import { ImgBgIcon9 } from "./ImgBgIcon9.js";
import { ImgBgIcon10 } from "./ImgBgIcon10.js";
import { ImgBgIcon11 } from "./ImgBgIcon11.js";
import { ImgBgIcon } from "./ImgBgIcon.js";
import { LocationIcon } from "./LocationIcon.js";
import { LogOutIcon } from "./LogOutIcon.js";
import { MenuIcon2 } from "./MenuIcon2.js";
import { MenuIcon3 } from "./MenuIcon3.js";
import { MenuIcon4 } from "./MenuIcon4.js";
import { MenuIcon5 } from "./MenuIcon5.js";
import { MenuIcon6 } from "./MenuIcon6.js";
import { MenuIcon7 } from "./MenuIcon7.js";
import { MenuIcon8 } from "./MenuIcon8.js";
import { MenuIcon9 } from "./MenuIcon9.js";
import { MenuIcon10 } from "./MenuIcon10.js";
import { MenuIcon11 } from "./MenuIcon11.js";
import { MenuIcon12 } from "./MenuIcon12.js";
import { MenuIcon } from "./MenuIcon.js";
import { MessageIcon } from "./MessageIcon.js";
import { PlusIcon } from "./PlusIcon.js";
import { ProgressBgIcon2 } from "./ProgressBgIcon2.js";
import { ProgressBgIcon } from "./ProgressBgIcon.js";
import { ProgressIcon2 } from "./ProgressIcon2.js";
import { ProgressIcon } from "./ProgressIcon.js";
import { SubtractIcon2 } from "./SubtractIcon2.js";
import { SubtractIcon } from "./SubtractIcon.js";

import classes from "./CustomerList.module.css";

const CustomerList = memo(function CustomerList(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.bg}></div>
      <ArowIcon />
      <ArrowDown2Icon />
      <ArrowDown3Icon />
      <ArrowDown4Icon />
      <ArrowDown5Icon />
      <CategoryIcon />
      {/* Ajoutez ici les autres composants nécessaires */}
    </div>
  );
});

CustomerList.propTypes = {
  className: PropTypes.string,
};

export default CustomerList;
