import React from "react";
import Header from "../components/header/Header";
import EventCard from "../components/Route/Events/EventCard";

function EventsPage() {
  return (
    <div>
      <Header activeHeading={4} />
      <EventCard active={true} />
      <EventCard active={true} />
    </div>
  );
}

export default EventsPage;
