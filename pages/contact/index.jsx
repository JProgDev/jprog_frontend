import { Box, Container, Grid, MenuItem, TextField } from "@mui/material";
import { services } from "../api/service";
import Button from "../../components/common/Button";

const ContactsPage = ({ servicesLabels }) => {
  return (
    <div className="pt-2">
      <Container maxWidth="lg">
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
              <TextField required name="telNumber" label="Telefon raqamingiz" />
              <TextField
                id="outlined-select-currency"
                select
                label="Hizmat turi"
                // onChange={handleChange}
              >
                {servicesLabels.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item md={7}>
              <TextField
                id="outlined-multiline-static"
                label="Saytingizni qanday tasavvur qilasiz"
                multiline
                rows={4}
              />
              <Box sx={{ mt: 1 }}>
                <Button>Jo`natish</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  const servicesLabels = [
    ...services.small.map((service) => service.title),
    ...services.big.map((service) => service.title),
  ];
  return {
    props: {
      servicesLabels,
    },
  };
}

export default ContactsPage;
