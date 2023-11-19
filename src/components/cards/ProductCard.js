import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactStars from 'react-stars';
import "./ProductCard.css";

export default function ProductCard({products, viewDetails}) {

  const addToCard = () => {
    const cart = JSON.parse(localStorage.getItem("card")) || [];
    cart.push(products.id);
    localStorage.setItem("card", JSON.stringify(cart));
    console.log("cart --", cart);
  }
  return (
    <Card sx={{ width: 270, marginTop: 4, position: "relative", paddingBottom: 5 }}>
      <div>
        <img className="cart-img" src={products.image} alt="" />
      </div>
      <CardContent>
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
        <Button onClick={addToCard} className='cart-btn' size="small">ADD TO CART</Button>
        <Button className='card-detail-btn' size="small" onClick={()=>viewDetails(products.id)}>VIEW DETAILS </Button>
      </CardActions>
    </Card>
  );
}