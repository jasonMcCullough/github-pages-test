import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

export default function TitlebarImageList() {
  return (
      <ImageList sx={{ width: 1000, height: 410 }}>

        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <Link to={`/projects/${item.href}`} target="_blank" rel="noreferrer">
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                width={`1000`}
                height={`400`}
              />
            </Link>
            <ImageListItemBar
              title={item.title}
              subtitle={item.subtitle}
              actionIcon={``}
            // actionIcon={
            //   <IconButton
            //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            //     aria-label={`info about ${item.title}`}
            //   >
            //     <InfoIcon />
            //   </IconButton>
            // }
            />
          </ImageListItem>
        ))}
      </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Donec dapibus felis fringilla',
    subtitle: 'Vestibulum bibendum tortor nisl. Integer pellentesque tortor in sapien porta.',
    href: 'project1',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Donec sed leo quis',
    subtitle: 'Maecenas laoreet elementum sem, a viverra dui laoreet elementum.',
    href: 'project2',
  },
];