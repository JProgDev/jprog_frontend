import Image from "next/image";
import React from "react";

import classNames from "./Avatar.module.scss";

export const Avatar = ({ imgUrl, alt }) => {
  if(!imgUrl) return <></>
  return (
    <Image
      width={80}
      height={80}
      className={classNames.avatar}
      src={imgUrl}
      alt={alt}
    />
  );
};
