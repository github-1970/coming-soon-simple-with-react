export default function ShowTime(props) {
  return (
    <div className={`col-6 item ${props.className} text-white rounded-circle border border-secondary border-2 display-5 d-flex flex-column justify-content-center align-items-center m-4`}>
      <span>{props.number}</span>
      <p className="fs-5">{props.text}</p>
    </div>
  )
}