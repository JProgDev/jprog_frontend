import { Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import Service from "../../../components/common/Service";
import { services } from "../../api/service";

const SmallServicesPage = ({ services = [] }) => {
  return (
    <div>
      <Head>
        <title>JProg IT & Design Agency | Qo`shimcha hizmatlar</title>
        <meta
          name="description"
          content="Create your own website for your own business"
        />
      </Head>
      <section id="additional_services" className="mt-5">
        <Container maxWidth="lg">
          <Typography className="text-center position-relative underlined text-uppercase mb-3">
            <span className="title text-underlined">Qo`shimcha hizmatlar</span>
            <span className="text-shadowed">Faqat siz uchun</span>
          </Typography>
          <Grid container spacing={3} className="mb-5">
            {services.map((service, index) => (
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

export async function getStaticProps() {
  return {
    props: {
      services: services.small,
    },
  };
}

export default SmallServicesPage;
