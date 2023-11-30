import BarsApp from "../components/bars/BarsApp";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState, useContext } from "react";
import CartContext from "../context/cart";
// import axios from "axios";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CheckOut() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { cart } = useContext(CartContext);
  const [newUser, setNewUser] = useState("");

  //modal
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const placeOrder = () => {
    const user = {
      name: userName,
      email: email,
      phone: phone,
      address: address,
    };
    // console.log("cart-->", cart);
    console.log("user-->", user);
  
    setNewUser(user);
    setUserName("");
    setPhone("");
    setEmail("");
    setAddress(""); 
  };

  return (
    <div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ mt: 2 }}>
              FirstName : {newUser.name}
            </Typography>
            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ mt: 2 }}>
              Phone : {newUser.phone}
            </Typography>
            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ mt: 2 }}>
              Email : {newUser.email}
            </Typography>
            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ mt: 2 }}>
              Address : {newUser.address}
            </Typography>
          </Box>
        </Modal>
      </div>
      <BarsApp />
      <Box sx={{ flexGrow: 1, width: "50%", margin: "0 auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 style={{ textAlign: "center" }}>CheckOut</h1>
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{ width: "100%" }}
              id="outlined-basic"
              label="FullName"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              sx={{ input: { border: "red" } }}
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Address"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() => placeOrder(setOpen(true))}
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

//  // axios.post("http://localhost:5000/api/v1/order",{
//   user,/
//   //   cart
//   // })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
