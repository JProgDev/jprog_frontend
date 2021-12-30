import { Box, Container, Grid, MenuItem, TextField } from "@mui/material";
import Head from "next/head";

import { services } from "../../api/service";
import Price from "../../../components/common/Price";
import Button from "../../../components/common/Button";

const PriceDetails = ({ service }) => {
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
      <section id="prices" className="pt-2">
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={4}>
              <Price {...service} />
            </Grid>
            <Grid item md={8}>
              <Box
                component="form"
                sx={{
                  backgroundColor: "#ffff",
                  p: 2,
                  borderRadius: "1rem",
                  "& .MuiTextField-root": { my: 1, width: "100%" },
                  "& .MuiGrid-item": { p: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <Grid container>
                  <Grid item md={5}>
                    <TextField required name="name" label="Ismingiz" />
                    <TextField
                      required
                      name="telNumber"
                      label="Telefon raqamingiz"
                    />
                    <Button>Jo`natish</Button>
                  </Grid>
                  <Grid item md={7}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Saytingizni qanday tasavvur qilasiz"
                      multiline
                      rows={4}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export async function getStaticPaths() {
  const smallSitesPaths = services.small.map((service) => ({
    params: { id: service.id },
  }));
  const bigSitesPaths = services.big.map((service) => ({
    params: { id: service.id },
  }));
  const additionalSitesPaths = services.big
    .filter((service) => !service.outsource)
    .map((service) => ({
      params: { id: service.id },
    }));
  const paths = [...smallSitesPaths, ...additionalSitesPaths, ...bigSitesPaths];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  let service = services.small.find((service) => service.id == id);
  if (!service) {
    service = services.big.find((service) => service.id == id);
  }
  if (!service) {
    service = services.additional.find((service) => service.id == id);
  }
  return {
    props: {
      service,
    },
  };
}

export default PriceDetails;
