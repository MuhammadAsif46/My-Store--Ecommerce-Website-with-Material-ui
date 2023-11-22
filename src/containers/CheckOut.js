import BarsApp from "../components/bars/BarsApp";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {styled} from "@mui/system";

const useStyles = styled({
    root: {
        '& label.Mui-focused':{
            color: '#8bc34a',
        },
        '& .MuiInput-underline:after':{
            borderBottomColor : '#8bc34a'
        },
        '& .MuiOutlineInput-root':{ 
            '&.Mui-focused fieldset':{
            borderBottomColor : '#8bc34a'
        },
        },
    }
})

function CheckOut() {
    const classes = useStyles()
  return (
    <div>
      <BarsApp />
      <Box sx={{flexGrow: 1, width: "50%", margin: "0 auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 style={{ textAlign: "center" }}>CheckOut</h1>
          </Grid>
          <Grid item xs={6}>
            <TextField className={classes.root}
              style={{ width: "100%" }}
              id="outlined-basic"
              label="FullName"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ input: { border: "red" } }}
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Address"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
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
