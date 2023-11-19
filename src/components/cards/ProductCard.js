import React, {useContext, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactStars from 'react-stars';
import CartContext from '../../context/cart';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import "./ProductCard.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ProductCard({products, viewDetails}) {
  const {cart, setCart} = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const addToCart = () => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    cartData.push(products.id)
    localStorage.setItem("cart", JSON.stringify(cartData));
    setCart(cartData.length);
    setOpen(true);
  }
  return (
    <Card sx={{ width: 270, marginTop: 4, position: "relative", paddingBottom: 5 }}>
      <div>
        <img className="cart-img" src={products.image} alt="" />
      </div>
      <CardContent>
      <Snackbar anchorOrigin={{horizontal:"right",vertical: "bottom"}} open={open} autoHideDuration={2000} onClose={()=>setOpen(false)}>
        <Alert onClose={()=>setOpen(false)} severity="success" sx={{ width: '100%' }}>
          Product Added in Cart!
        </Alert>
      </Snackbar>
        <Typography gutterBottom variant="h6" component="div">
          Rs {products.price}
        </Typography>
        <Typography gutterBottom variant="span" component="div">
          {products.title.slice(0, 28)}...
        </Typography>
        <ReactStars
        edit={false}
        count={5}
        value={products.rating.rate}
        size={18}
        color2={'#ffd700'} />
        
      </CardContent>
      <CardActions className='card-btns'>
        <Button onClick={addToCart} className='cart-btn' size="small">ADD TO CART</Button>
        <Button className='card-detail-btn' size="small" onClick={()=>viewDetails(products.id)}>VIEW DETAILS </Button>
      </CardActions>
    </Card>
  );
}