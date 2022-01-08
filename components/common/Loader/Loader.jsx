import React from "react";
import Image from "next/image";

import classNames from "./Loader.module.scss";

const loaderText = "O`zbekiston bo`ylab IT hizmatlari";
export const Loader = () => {
  return (
    <div className={classNames.loader}>
      <Image width={250} height={100} alt="JProg Logo" src="/images/logo_white.svg" />
      <div className={`${classNames["text-block"]} content-center`}>
        {loaderText}
        <span className={classNames["slide-text"]}>{loaderText}</span>
      </div>
    </div>
  );
};
