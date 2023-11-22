import BarsApp from "../components/bars/BarsApp";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState, useContext } from "react";
import CartContext from "../context/cart";
import axios from "axios";




function CheckOut() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const {cart} = useContext(CartContext)


  const placeOrder = () => {
    const user = {
      name: userName,
      email: email,
      phone: phone,
      address: address
    }
    axios.post("http://localhost:5000/api/v1/order",{
      user,
      cart
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  return (
    <div>
      <BarsApp />
      <Box sx={{flexGrow: 1, width: "50%", margin: "0 auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 style={{ textAlign: "center" }}>CheckOut</h1>
          </Grid>
          <Grid item xs={6}>
            <TextField value={userName} onChange={(e) => setUserName(e.target.value)}
              style={{ width: "100%" }}
              id="outlined-basic"
              label="FullName"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>

            <TextField value={phone} onChange={(e)=>setPhone(e.target.value)}
              style={{ width: "100%"}}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField value={email} onChange={(e)=>setEmail(e.target.value)}
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField value={address} onChange={(e)=>setAddress(e.target.value)}
              sx={{ input: { border: "red" } }}
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Address"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={placeOrder}
              style={{ width: "100%", marginTop: 15 }}
              className="cart-btn"
              size="small"
            >
              PLACE ORDER
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default CheckOut;
