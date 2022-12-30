import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
//import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import { COMPETITIONS_ROUTE, HOME_ROUTE } from "../const";



export default class SingleCompetition extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;
 
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> no such competitions could be found...</h3>
          <Link to={COMPETITIONS_ROUTE} className="btn-primary">
            back to all competitions
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      extras,
      images
    } = room;

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`Конкурс ${name}`}>
            <Link to={HOME_ROUTE} className="btn-primary">
              Вернуться на главную
            </Link>

          </Banner>
        </StyledHero>


        <section className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Детали конкурса</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h6>Номинации</h6>
              <ul className="extras">
                {extras.map((item, index) => (
                  <li key={index}>- {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
        <section className="room-extras">

        </section>
      </>
    );
  }
}