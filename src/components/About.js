import React, { Component } from 'react';
import { VideoPlayer } from './VideoPlayer';

import Title from './Title';
export default class About extends Component {
  state = {
    services: [
      {
        info:
          '«Палитра творчества» - хороший пример проведения фестиваля, который заинтересовывает студентов нескольких стран. Ежегодно более 200 студентов имеют возможность реализовывать себя в богатой палитре творческих событий, включающих вокальный марафон, театральные постановки, световые шоу, танцевальные представления, фотоарт. Лучшие творческие коллективы и индивидуальные исполнители награждаются дипломами и призами. Ждем вас на нашем фестивале!',
      },
    ],
  };
  render() {
    return (
      <section className='services'>
        <Title title='О нас' />
        <div className='services-center'>
          {this.state.services.map((item) => {
            return (
              <article key={`item-${item.title}`} className='service'>
                <div className='roomslist_new'>
                  <VideoPlayer url={'https://youtu.be/Z1cqoNrNdGY'} />
                </div>
                <p className='text-align'>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
