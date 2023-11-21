import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CartList from "../cartList/CartList";


export default function DrawerRight({open, setOpen, cardData, deleteCart, updateQty}) {
  return (
    <div>
      <React.Fragment>
        <Drawer anchor='right' open={open} onClose={()=>setOpen(false)}>

        <Box 
            role="presentation"
        >
            <CartList updateQty={updateQty} deleteCart={deleteCart} cardData={cardData}/>
        </Box>
        </Drawer>

        
      </React.Fragment>

    </div>
  );
}
