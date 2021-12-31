import { Container, Grid } from "@mui/material";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={2}>
            <Image
              width={200}
              height={200}
              src="/images/logo.svg"
              alt="JProg logo"
            />
          </Grid>
          <Grid item xs={10}>
            JProg - bir guruh o`zbek dasturchilaridan iborat`
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutPage;
