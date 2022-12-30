import React, { Component } from "react";
import { data } from "./data";
//import client from "./Contentful";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    competitions: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  componentDidMount() {
    let competitions = this.formatData(data);
    let featuredRooms = competitions.filter(competition => competition.featured === true);
    // 
    this.setState({
      competitions,
      featuredRooms,
      sortedRooms: competitions,
      loading: false, 
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let competition = { ...item.fields, images, id };
      return competition;
    });
    return tempItems;
  }
  getRoom = slug => {
    let tempRooms = [...this.state.competitions];
    const competition = tempRooms.find(competition => competition.slug === slug);
    return competition;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      competitions,
      type,
      capacity, 
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempRooms = [...competitions];
    // transform values
    // get capacity
    capacity = parseInt(capacity); 
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(competition => competition.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(competition => competition.capacity >= capacity);
    }
    // filter by price 
    //filter by size
    tempRooms = tempRooms.filter(
      competition => competition.size >= minSize && competition.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(competition => competition.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(competition => competition.pets === true);
    }
    this.setState({
      sortedRooms: tempRooms
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}