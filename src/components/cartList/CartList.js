import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {MdDeleteOutline } from "react-icons/md"
import {CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

export default function CartList({ cardData, deleteCart,updateQty }) {

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {cardData.map((v,i)=>{
            return(
                <div key={i}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar style={{padding: 5}}>
                        <img style={{width: 70,height: 70, objectFit:"contain"}} src={v.image} alt="" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={v.title}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Rs {v.price * v.qty}
                            </Typography>
                            <Typography style={{display:"flex", marginTop:3}}>
                            {"QTY: "} <CiSquareMinus onClick={()=> v.qty > 1 && updateQty("-", v.id)} style={{cursor:"pointer"}} size={22} />
                            <span style={{marginLeft:5 ,marginRight:5}}>{v.qty}</span>
                              <CiSquarePlus onClick={()=>updateQty("+", v.id)} style={{cursor:"pointer"}}  size={22} />
                              <MdDeleteOutline  onClick={()=>deleteCart(v.id)} style={{color: "red", fontSize:22, marginLeft:10, cursor:"pointer"}} />

                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    
                </div>
            )
        })}
        {
        cardData.length ? <div>
            <Link to={'/checkout'}>
                <Button style={{width:"100%", marginTop: 20}}  className='cart-btn' size="small">CHECKOUT</Button>
            </Link>
        </div> : 
        <div style={{padding: 50}}>
            <Alert variant="outlined" severity="warning">Your Cart is Empty!</Alert>
        </div>
        }
    </List>
  );
}