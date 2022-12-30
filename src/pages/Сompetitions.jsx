import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { VideoPlayer } from '../components/VideoPlayer';
import { CarouselPhoto } from '../components/CarouselPhoto';
import { gallery } from '../data/index';

export const Competitions = () => {
  return (
    <div className='competions'>
      <Hero hero='roomsHero'>
        <Banner title='Галерея'>
          <Link to='/' className='btn-primary'>
            Вернуться на главную
          </Link>
        </Banner>
      </Hero>
      <VideoPlayer url={'https://youtu.be/sdTdNzCR5jA'} />

      {gallery.map((range, index) => {
        return (
          <CarouselPhoto
            key={`${range.name}-${index}`}
            nameCarousel={range.name}
            images={range.data}
            interval={range.interval}
          />
        );
      })}
    </div>
  );
};
