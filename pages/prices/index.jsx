import { Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import { services } from "../api/service";
import Price from "../../components/common/Price";
import { useMemo } from "react";

const additionalInsideServices = services.additional.filter(
  (service) => !service.outsource
);

const index = () => {
  return (
    <div>
      <Head>
        <title>JProg IT & Design Company Prices</title>
        <meta
          name="description"
          content="JProg IT & Design Company Prices List"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="prices">
          <Container maxWidth="lg">
            <Typography className="sub-title mb-3 text-center">
              Kichik hajmdagi saytlar
            </Typography>
            <Grid container className="mb-5" direction="row" spacing={3}>
              {services.small.map((service, index) => (
                <Grid item md={4} key={index}>
                  <Price key={index} {...service} />
                </Grid>
              ))}
            </Grid>
            <Typography className="sub-title mb-3 text-center">
              Katta hajmdagi saytlar
            </Typography>
            <Grid container className="mb-5" direction="row" spacing={3}>
              {services.big.map((service, index) => (
                <Grid item md={4} key={index}>
                  <Price key={index} {...service} />
                </Grid>
              ))}
            </Grid>
            <Typography className="sub-title mb-3 text-center">
              Qo`shimcha hizmatlar
            </Typography>
            <Grid container className="mb-5" direction="row" spacing={3}>
              {additionalInsideServices.map((service, index) => (
                <Grid item md={4} key={index}>
                  <Price key={index} {...service} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default index;