import React from "react";

import classNames from "./Partner.module.scss";

export const Partner = ({ companyName, description }) => {
  return (
    <div className={classNames["partner-box"]}>
      <span className={classNames["company-name"]}>{companyName}</span>
      <span className={classNames.description}>{description}</span>
    </div>
  );
};
