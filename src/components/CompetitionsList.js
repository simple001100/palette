import React from "react";
import Competition from "./Competition";

const CompetitionsList = ({ competitions }) => {
  if (competitions.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no competitions matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {competitions.map(item => {
          return <Competition key={item.id} competition={item} />;
        })}
      </div>
    </section>
  );
};

export default CompetitionsList;