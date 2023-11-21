import  React, {useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useSearchParams } from "react-router-dom";
import CartContext from '../../context/cart';
import DrawerRight from '../drawer/DrawerRight';


const drawerWidth = 240;
const navItems = ["All","Electronics", "Jewelery", "men's clothing","Women's clothing"];

function BarsApp(props) {
  const {cart, setCart} = useContext(CartContext);
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const deleteCart = (id)=>{
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartData.findIndex(v => v.id === id);
    cartData.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartData));
    setCart(cartData);
  }

  const updateQty = (type, id)=>{
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartData.findIndex(v => v.id === id);
    if(type === "+"){
      cartData.splice(index, 1,{ ...cartData[index], qty: cartData[index].qty + 1})
    }else{
      cartData.splice(index, 1,{ ...cartData[index], qty: cartData[index].qty - 1})
    }
    localStorage.setItem("cart", JSON.stringify(cartData));
    setCart(cartData);
  }


  useEffect(()=>{
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cart);
  },[])

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MY STORE
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem onClick={()=>setSearchParams({category: item.toLowerCase()})} key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{backgroundColor: "#8bc34a"}} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MY STORE
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button onClick={()=>setSearchParams({category: item.toLowerCase()})} key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <IconButton
          onClick={()=>setOpen(true)}
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
          </Box>
          <DrawerRight updateQty={updateQty} deleteCart={deleteCart} cardData={cart} open={open} setOpen={setOpen}/>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

BarsApp.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default BarsApp;