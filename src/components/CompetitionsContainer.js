import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading"; 
import CompetitionsList from "./CompetitionsList";

function CompetitionsContainer({ context }) {
  const { loading, sortedRooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <CompetitionsList competitions={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(CompetitionsContainer);