import { Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import Service from "../../components/common/Service";
import { services } from "../api/service";

const ServicesPage = () => {
  return (
    <div>
      <Head>
        <title>JProg IT & Design Company Services</title>
        <meta
          name="description"
          content="JProg IT & Design Company Prices List"
        />
      </Head>
      <section id="services">
        <Container maxWidth="lg" className="mt-5">
          <Typography className="text-center position-relative underlined text-uppercase mb-3">
            <span className="title text-underlined">HIZMATLARIMIZ</span>
            <span className="text-shadowed">faqat siz uchun</span>
          </Typography>
          <Typography className="sub-title text-center mb-3">
            <span className="text-underlined">
              Kichik va o`rta hajmdagi saytlar
            </span>
          </Typography>
          <Grid container className="mb-5" spacing={3}>
            {services.small.map((service, index) => (
              <Grid item md={3} key={index}>
                <Service hoverable active={index == 1} {...service} />
              </Grid>
            ))}
          </Grid>
          <Typography id="big_services" className="sub-title text-center mb-3">
            <span className="text-underlined">Katta hajmdagi saytlar</span>
          </Typography>
          <Grid container className="mb-5" spacing={3}>
            {services.big.map((service, index) => (
              <Grid item md={3} key={index}>
                <Service hoverable active={index == 1} {...service} />
              </Grid>
            ))}
          </Grid>
          <Typography
            id="additional_services"
            className="sub-title text-center mb-3"
          >
            <span className="text-underlined">Qo`shimcha hizmatlar</span>
          </Typography>
          <Grid container className="mb-5" spacing={3}>
            {services.additional.map((service, index) => (
              <Grid item md={3} key={index}>
                <Service hoverable active={index == 1} {...service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default ServicesPage;
