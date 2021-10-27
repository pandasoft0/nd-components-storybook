import React from 'react';

import {
  BaseCarousel,
  BaseCarouselSettings
} from '@neon-district/base-carousel';

import { Button } from '@neon-district/button';

import { Item, Wrapper } from './styles';

export type CarouselProps = {
  /**
   *
   */
  items?: CarouselItemProps[];
  /**
   *
   */
  settings?: BaseCarouselSettings;
};

/**
 * Carousel wrapper component
 */
export const Carousel = ({ items, settings }: CarouselProps) => {
  const defaultSettings: BaseCarouselSettings = {
    dots: true,
    slidesToShow: 4,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1375,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1.2
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1.1
        }
      }
    ]
  };

  return (
    <Wrapper>
      <BaseCarousel settings={settings || defaultSettings}>
        {items?.map(item => (
          <CarouselItem key={item.label} {...item} />
        ))}
      </BaseCarousel>
    </Wrapper>
  );
};

/**
 * Item component
 */
type CarouselItemProps = {
  /**
   *
   */
  src?: string;
  /**
   *
   */
  alt?: string;
  /**
   *
   */
  label?: string;
};

const CarouselItem = ({ src, alt, label }: CarouselItemProps) => {
  return (
    <Item>
      <img src={src} alt={alt} />

      <Button>{label}</Button>
    </Item>
  );
};
