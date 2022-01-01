import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Stack, Typography } from "@mui/material";

import Button from "../../common/Button";

import classNames from "./Carousel.module.scss";
import { carouselConfig } from "./Carousel.data";
import Image from "next/image";
import Link from "next/link";

export const Carousel = () => {
  return (
    <Slider {...carouselConfig}>
      <Stack
        justifyContent="space-around"
        alignItems="center"
        className={`${classNames["carousel-item"]} h-100vh`}
        direction="row"
        spacing={2}
      >
        <div className={classNames.content}>
          <Typography variant="h1" className="title" sx={{ mb: 3 }}>
            Internet tarmog`ida shaxsiy sahifangizga ega bo`ling
          </Typography>
          <Button variant="contained">
            <Link href="/#services" passHref>
              Buyurtma berish
            </Link>
          </Button>
        </div>
        <div className="content-center">
          <Image
            width={500}
            height={250}
            objectFit="fill"
            src="/images/devices.svg"
            alt="devices"
          />
        </div>
      </Stack>
      <Stack
        className={`${classNames["carousel-item"]} content-center`}
        direction="row"
        spacing={2}
      >
        <div className={classNames.content}>
          <Typography variant="h1" className="title" sx={{ mb: 3 }}>
            Biznesingiz jarayonini avtomatlashtiring
          </Typography>
          <Button variant="contained">
            <Link href="/#big_services" passHref>
              Buyurtma berish
            </Link>
          </Button>
        </div>
        <div className="content-center">
          <Image
            width={500}
            height={250}
            objectFit="fill"
            src="/images/devices.svg"
            alt="devices"
          />
        </div>
      </Stack>
      <Stack
        className={`${classNames["carousel-item"]} content-center`}
        direction="row"
        spacing={2}
      >
        <div className={classNames.content}>
          <Typography variant="h1" className="title" sx={{ mb: 3 }}>
            Marketing roqali biznesingizni yangi bosqichaga olib chiqing
          </Typography>
          <Button variant="contained">
            <Link href="/#additional_services" passHref>
              Buyurtma berish
            </Link>
          </Button>
        </div>
        <div className="content-center">
          <Image
            width={500}
            height={250}
            objectFit="fill"
            src="/images/devices.svg"
            alt="devices"
          />
        </div>
      </Stack>
    </Slider>
  );
};
