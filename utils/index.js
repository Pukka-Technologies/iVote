export const getEventStatus = (opening_date, closing_date) => {
    const today = new Date();
    const start = new Date(opening_date);
    const end = new Date(closing_date);
    let status = "";
    if (today < start) {
      status = "upcoming";
    } else if (today > end) {
      status = "closed";
    } else {
      status = "ongoing";
    }
    return status;
}

export const getEventsByType = (events, type) => {
    if (type === "all") {
        return events;
    }
    return events.filter((event) => getEventStatus(event.opening_date, event.closing_date) === type);
}


export const getContestantsByEvents = (contestants, _id) => {
  let sorted = contestants.filter(
    (contestant) => contestant.event_id === _id
  );
  return sorted;
};