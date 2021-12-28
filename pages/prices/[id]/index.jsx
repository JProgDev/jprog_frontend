import { Container } from "@mui/material";
import Head from "next/head";
import { services } from "../../api/service";
import Price from "../../../components/common/Price";

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
      <section id="prices">
        <Container maxWidth="lg">
          {services.small.map((service, index) => (
            <Price key={index} {...service} />
          ))}
        </Container>
      </section>
    </div>
  );
};

export default index;
