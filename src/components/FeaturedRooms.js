import React, { Component } from "react"; 
import { RoomContext } from "../context";
import Competition from "./Competition";
import Loading from "./Loading";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: competitions } = this.context;

    competitions = competitions.map(competition => {
      return <Competition key={competition.id} competition={competition} />;
    });
    return (
      <section className="roomslist">     
        <div className="roomslist-center">
          {loading ? <Loading /> : competitions}
        </div>       
      </section>
    );
  }
}