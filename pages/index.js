import Head from "next/head";
import { Container, Grid, Typography } from "@mui/material";

import Carousel from "../components/landing/Carousel";
import Service from "../components/common/Service";

import { services } from "./api/service";
import Partner from "../components/landing/Partner";

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>JProg IT & Design Agency</title>
        <meta
          name="description"
          content="Create your own website for your own business"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="main">
        <Container maxWidth="lg">
          <Carousel />
        </Container>
      </section>
      <section id="services" className="mb-3">
        <Container maxWidth="lg">
          <Typography className="title text-center mb-3">
            HIZMATLARIMIZ
          </Typography>
          <Typography className="sub-title text-center mb-3">
            Kichik va o`rta hajmdagi saytlar
          </Typography>
          <Grid container className="mb-5" direction="row" spacing={3}>
            {services.small.map((service, index) => (
              <Grid item md={4} key={index}>
                <Service {...service} />
              </Grid>
            ))}
          </Grid>
          <Typography className="sub-title text-center mb-3">
            Katta hajmdagi saytlar
          </Typography>
          <Grid container className="mb-5" direction="row" spacing={3}>
            {services.big.map((service, index) => (
              <Grid item md={4} key={index}>
                <Service {...service} />
              </Grid>
            ))}
          </Grid>
          <Typography className="sub-title text-center mb-3">
            Qo`shimcha hizmatlar
          </Typography>
          <Grid container className="mb-5" direction="row" spacing={3}>
            {services.additional.map((service, index) => (
              <Grid item md={4} key={index}>
                <Service {...service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <section id="partners" className="mb-5">
        <Container maxWidth="lg">
          <Typography className="title text-center mb-3">
            HAMKORLARIMIZ
          </Typography>
          <Partner companyName={"OBSESS"} description={"Marketing Agency"} />
        </Container>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      services,
    },
  };
}
