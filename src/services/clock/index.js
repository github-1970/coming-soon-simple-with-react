let end = new Date("2023");
// Now: 2022/1/1 << Your Chance

let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;

// for clear timer
let timer;

export default function showRemainingTime() {
  let now = new Date();
  let distance = end - now;

  if (distance < 0) {
    clearTimeout(timer);

    let expired = document.querySelector(".expired");
    if (expired) {
      expired.classList.remove("d-none");

      document.querySelector(".countdown").classList.add("d-none");
    }
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  let days = Math.floor(distance / _day);
  let hours = Math.floor((distance % _day) / _hour);
  let minutes = Math.floor((distance % _hour) / _minute);
  let seconds = Math.floor((distance % _minute) / _second);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
