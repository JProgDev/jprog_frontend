import { Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import { services } from "../api/service";
import Price from "../../components/common/Price";

const PricesPage = ({ services, additionalInsideServices }) => {
  return (
    <div>
      <Head>
        <title>JProg IT & Design Company Prices</title>
        <meta
          name="description"
          content="JProg IT & Design Company Prices List"
        />
      </Head>
      <section id="prices" className="pt-2">
        <Container maxWidth="lg">
          <Typography className="sub-title mb-3 text-center">
            Kichik hajmdagi saytlar
          </Typography>
          <Grid container className="mb-5" direction="row" spacing={3}>
            {services.small.map((service, index) => (
              <Grid item md={3} key={index}>
                <Price hoverable active={index == 1} key={index} {...service} />
              </Grid>
            ))}
          </Grid>
          <Typography className="sub-title mb-3 text-center">
            Katta hajmdagi saytlar
          </Typography>
          <Grid container className="mb-5" direction="row" spacing={3}>
            {services.big.map((service, index) => (
              <Grid item md={3} key={index}>
                <Price hoverable active={index == 1} {...service} />
              </Grid>
            ))}
          </Grid>
          <Typography className="sub-title mb-3 text-center">
            Qo`shimcha hizmatlar
          </Typography>
          <Grid container className="mb-5" direction="row" spacing={3}>
            {additionalInsideServices.map((service, index) => (
              <Grid item md={3} key={index}>
                <Price hoverable active={index == 1} key={index} {...service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const additionalInsideServices = services.additional.filter(
    (service) => !service.outsource
  );

  return {
    props: {
      services,
      additionalInsideServices,
    },
  };
}
export default PricesPage;
