import { useState } from "react";
import ShowTime from "./ShowTime";
import Expired from "./Expired";
import showRemainingTime from '../../services/clock/index'

export default function Main(props) {
  let {days, hours, minutes, seconds} = showRemainingTime()
  const [myDate, setMyDate] = useState({
    days,
    hours,
    minutes,
    seconds,
  })

  setTimeout(function(){
    let {days, hours, minutes, seconds} = showRemainingTime()
    setMyDate({
      days,
      hours,
      minutes,
      seconds,
    })
  }, 1000)

  return (
    <div className="col-12 col-md-7 countdown-container d-flex flex-column justify-content-center align-items-center">
      <div className="countdown">
        <div className="row">
          {/* day */}
          <ShowTime className="day" number={myDate.days} text="روز" />

          {/* hour */}
          <ShowTime className="hour" number={myDate.hours} text="ساعت" />
        </div>

        <div className="row">
          {/* minute */}
          <ShowTime className="minute" number={myDate.minutes} text="دقیقه" />

          {/* second */}
          <ShowTime className="second" number={myDate.seconds} text="ثانیه" />
        </div>
      </div>

      {/* for expired time */}
      <Expired />
    </div>
  );
}
