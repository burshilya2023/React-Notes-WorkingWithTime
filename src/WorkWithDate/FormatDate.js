import moment from "moment";
//!currentTime - for exemple how work time in js not moment library
export const FnCurrentTime = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let hours = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let yyyy = today.getFullYear();
  return today = mm + "/" + dd + "/" + yyyy + " " + hours + ':' + min + 'min' + sec + 'sec'
};
//!get time in moment create Notes
//?аналогично moment(new Date()).format("MMM DD YYYY");
export const FnGetCurrentTimeThen = (time) => {
  if (!time) return "";
  const date = new Date(time)
  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let hrs = date.getHours();
  let min = date.getMinutes();
  min = min < 10 ? "0" + min : min;
  let day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${hrs}:${min} ${day} ${month} ${year}`;
};
//!last edit time function
export const FnRedTime = (TimeOnlyne, TimeRed) => {
  //?in order not to pass Timeonline, we could create a function inside, and use closure
  let mlSec = TimeOnlyne - TimeRed
  let sec = Math.floor(mlSec / 1000)
  let min = Math.floor(sec / 60)
  let hours = Math.floor(min / 60)
  let days = Math.floor(hours / 24)
  let weeks = Math.floor(days / 7)
  let Mounth = Math.floor(weeks / 4)
  let Years = Math.floor(Mounth / 12)
  if (sec > 60 && min <= 60) {
    return `-ago-${Math.floor(min)}m.`
  }
  else if (min > 60 && hours <= 24) {
    return `-ago-${Math.floor(hours)} hours`
  }
  else if (hours > 24 && days <= 7) {
    return `-ago-${Math.floor(days)} days`
  }
  else if (days > 7 && weeks <= 4) {
    return `-ago-${Math.floor(weeks)} weeks`
  }
  else if (weeks > 4 && Mounth <= 12) {
    return `-ago-${Math.floor(Mounth)} month`
  }
  else if (Mounth > 12) {
    return `-ago-${Math.floor(Years)} Years`
  }
  return `-ago-${sec ? Math.floor(sec) : ''}sec`
}
//! the difference between the selected value(in the future) and the current new Date()
export const createTimer = (countdownDate) => {
  const dateNow = moment();
  return function () {
    const distance = countdownDate - dateNow;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (distance <= 0) {
      return 'YOUR TIME END'
    }
    return `remained:${days}д:${hours}:${minutes}:${seconds}`;
  };
};

