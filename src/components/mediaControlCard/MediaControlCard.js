import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
import ReactStars from 'react-stars';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';


export default function MediaControlCard({detail}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
        <CardMedia
        component="img"
        sx={{ width: 250, objectFit:"contain" }}
        image={detail.image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {detail.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {detail.description}
          </Typography>
          <ReactStars
        edit={false}
        count={5}
        value={detail.rating.rate}
        size={30}
        color2={'#ffd700'} />
        <div style={{marginTop: 10, marginBottom: 10 }}>
            <Chip label={detail.category}/>
        </div>
        <Typography variant="h6" component="div">
          Rs {detail.price} /-
          </Typography>
          <div style={{marginTop: 10}}>
          <Button className='cart-btn' size="small">ADD TO CART</Button>
          <Button style={{marginLeft:5}} className='card-detail-btn' size="small">BUT NOW </Button>
          </div>

        </CardContent>
       
      </Box>
      
    </Card>
  );
}