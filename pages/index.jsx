import Head from "next/head";
import { Container, Grid, Typography } from "@mui/material";

import Carousel from "../components/landing/Carousel";

import { services } from "./api/service";
import { advantages } from "./api/advantage";
import Partner from "../components/landing/Partner";
import Service from "../components/common/Service";
import Advantage from "../components/landing/Advantage";

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

      <section id="why_we" className="mt-5">
        <Container maxWidth="lg">
          <Typography className="text-uppercase position-relative text-center mb-3">
            <span className="title text-underlined">nima uchun biz</span>
            <span className="text-shadowed">avfzalliklar</span>
          </Typography>
          {advantages.map((advantage, index) => (
            <Advantage
              data-aos="fade-left"
              key={index}
              {...advantage}
              offset={+index}
            />
          ))}
        </Container>
      </section>
      <section id="services" className="mt-5 pt-5">
        <Container maxWidth="lg">
          <Typography className="text-center position-relative underlined text-uppercase mb-3">
            <span className="title text-underlined">HIZMATLARIMIZ</span>
            <span className="text-shadowed">faqat siz uchun</span>
          </Typography>
          <Grid container className="mb-5" direction="row" spacing={3}>
            {services.map((service, index) => (
              <Grid item md={3} key={index}>
                <Service hoverable active={index == 1} {...service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <section id="partners" className="my-5 pt-5">
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
  const sortedServices = [
    services.small[0],
    services.small[1],
    services.big[2],
    services.small[2],
  ];
  return {
    props: {
      services: sortedServices,
      advantages,
    },
  };
}
