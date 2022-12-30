import React, { Component } from "react";
import { FaTheaterMasks } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { HiMicrophone } from "react-icons/hi";
import { GiMusicalNotes } from "react-icons/gi";
import Title from "./Title";

export default class Services extends Component {

  render() {
    const services = [
      {
        icon: <HiMicrophone />,
        title: "Студенческий листопад",
        info:
          "Ежегодный открытый конкурс популярной песни «Студенческий листопад»"
      },
      {
        icon: <GiMusicalNotes />,
        title: "Танцы 100%",
        info:
          "Конкурс современного и эстрадного танца «Танцы 100%»"
      },
      {
        icon: <FaTheaterMasks />,
        title: "Театр+",
        info:
          "Конкурс творческих номеров, отражающие культурно-историческое единство Беларуси и России."
      },
      {
        icon: <MdPhotoCamera />,
        title: "Фотоконкурс",
        info:
          "Фотоконкурс по номинации «Природа. Город. Люди» "
      }
    ]
    return (
      <section className="services">
        <Title title="Конкурсы" />
        <div className="services-center">
          {services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
