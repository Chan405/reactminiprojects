import React from "react";

import Card from "@material-ui/core/Card";
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Link from "@material-ui/core/Link";


const SingleNewsCard = ({author, title, description, url ,urlToImage,  publishedAt, content, removeNews}) => {
	return (
    <Link href={url} underline="none">
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        
        action={
          <Tooltip title="Not interested">
          <IconButton 
              aria-label="delete" 
              href="javascript:void(0)" 
              onClick={ ()=> removeNews(url)} >
            <DeleteIcon size="sm"/>
          </IconButton>
          </Tooltip>
        }

        title={title}
        subheader={ 
          <>
          <Typography variant="h6"> {author} </Typography> 
          <Typography variant="subtitle2"> {publishedAt.substring(0, 10)} </Typography>
          </>
        }
      />

      <CardMedia
        component="img"
        height="194"
        image={urlToImage}
        alt="news image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
    </Link>
  );
}
export default SingleNewsCard;