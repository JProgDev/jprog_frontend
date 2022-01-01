import Head from "next/head";
import Image from "next/image";
import { Container, Grid, Typography } from "@mui/material";

import Carousel from "../components/landing/Carousel";
import Service from "../components/common/Service";

import { services } from "./api/service";
import { advantages } from "./api/advantage";
import Partner from "../components/landing/Partner";
import { Advantage } from "../components/landing/Advantage/Advantage";

export default function HomePage({ services, advantages }) {
  return (
    <div>
      <Head>
        <title>JProg IT & Design Agency</title>
        <meta
          name="description"
          content="Create your own website for your own business"
        />
      </Head>

      <section id="main">
        <Container maxWidth="lg">
          <Carousel />
        </Container>
      </section>

      <section id="why_we" className="mb-5">
        <Container maxWidth="lg">
          <Typography className="text-uppercase position-relative text-center mb-3">
            <span className="title text-underlined">nima uchun biz</span>
            <span className="text-shadowed">avfzalliklar</span>
          </Typography>
          {advantages.map((advantage, index) => (
            <Advantage key={index} {...advantage} offset={+index} />
          ))}
        </Container>
      </section>
      <section id="services" className="mb-3">
        <Container maxWidth="lg">
          <Typography className="text-center position-relative underlined text-uppercase mb-3">
            <span className="title text-underlined">HIZMATLARIMIZ</span>
            <span className="text-shadowed">faqat siz uchun</span>
          </Typography>
          <Typography className="sub-title text-center mb-3">
            <span className="text-underlined">
              Kichik va o`rta hajmdagi saytlar
            </span>
          </Typography>
          <Grid container className="mb-5" direction="row" spacing={3}>
            {services.small.map((service, index) => (
              <Grid item md={4} key={index}>
                <Service {...service} />
              </Grid>
            ))}
          </Grid>
          <Typography id="big_services" className="sub-title text-center mb-3">
            <span className="text-underlined">Katta hajmdagi saytlar</span>
          </Typography>
          <Grid container className="mb-5" direction="row" spacing={3}>
            {services.big.map((service, index) => (
              <Grid item md={4} key={index}>
                <Service {...service} />
              </Grid>
            ))}
          </Grid>
          <Typography id="additional_services" className="sub-title text-center mb-3">
            <span className="text-underlined">Qo`shimcha hizmatlar</span>
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
          <Typography className="position-relative text-center mb-3">
            <span className="text-underlined title">HAMKORLARIMIZ</span>
            <span className="text-shadowed text-uppercase">birgalikda</span>
          </Typography>
          <Partner companyName={"OBSESS"} description={"Marketing Agentligi"} />
        </Container>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      services,
      advantages,
    },
  };
}