import React, { FC } from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface Props {
  imgUrl: string;
  numberOfDogsShown: number;
}

const DogCard: FC<Props> = ({ imgUrl, numberOfDogsShown }) => (
  <Card>
    <CardMedia component="img" image={imgUrl} alt="do" />
    <CardContent>
      <Typography textAlign="center">Dogs shown #{numberOfDogsShown}</Typography>
    </CardContent>
  </Card>
);

export default DogCard;
