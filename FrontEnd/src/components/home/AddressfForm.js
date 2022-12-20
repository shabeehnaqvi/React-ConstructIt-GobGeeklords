import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
export default function AddressForm() {
  const [data, setData] = React.useState([]);
  const [inpval, setInpval] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    date: "",
    details: "",
  });
  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();

    const { firstName, lastName, address, city, state, date, details } = inpval;

    if (firstName === "" || lastName === "") {
      toast.error("Name field is requred!", {
        position: "top-center",
      });
    } else if (address === "") {
      toast.error("Address field is requred", {
        position: "top-center",
      });
    } else if (city === "") {
      toast.error("city field is requred", {
        position: "top-center",
      });
    } else if (state === "") {
      toast.error("state field is requred", {
        position: "top-center",
      });
    } else if (date === "") {
      toast.error("date field is requred", {
        position: "top-center",
      });
    } else if (details === "") {
      toast.error("details field is requred", {
        position: "top-center",
      });
    } else {
      toast("Next Step");
      localStorage.setItem("job_details", JSON.stringify([...data, inpval]));
    }
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Address For the Construction
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={getdata}
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            onChange={getdata}
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            onChange={getdata}
            name="address"
            label="Address line "
            fullWidth
            autoComplete="shipping address-line"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            onChange={getdata}
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            onChange={getdata}
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form.Group className="mb-3" controlId="formBasicdate">
            <Form.Control onChange={getdata} name="date" type="date" />
          </Form.Group>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="details"
            name="details"
            label="Details about the Construction"
            fullWidth
            variant="standard"
            onChange={getdata}
          />
        </Grid>

        <Grid item xs={18} sm={18}>
          <Button variant="contained" color="success" onClick={addData}>
            Save Data
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
