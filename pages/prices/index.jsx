import { Container, Grid } from "@mui/material";
import Head from "next/head";
import { services } from "../api/service";
import Price from "../../components/common/Price";

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
            <Grid container className="mb-5" direction="row" spacing={3}>
              {services.small.map((service, index) => (
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
