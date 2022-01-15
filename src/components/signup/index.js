import Typewriter from "typewriter-effect";

export default function Signup() {
  let descriptions = `
  در زمان شروع نوشتن این برنامه، هدف خاصی از آن نداشتم، به جز نوشتن یک برنامه برای تمرین طراحی سایت.
  `;
  let descriptions2 = `
  اما بعدا تبدیل شد به مشخص کننده پایان زمانی که به خودم مهلت داده بودم تا از طریق تخصصم به درآمد برسم. 
  `
  let descriptions3 = `
  ولی این پایان راه نبود!
  `
  let descriptions4 = `
  و بعدها به دلیل سادگی آن در تست‌های مختلفی از این برنامه استفاده کردم. حتی به اولین برنامه
  react
  من (که همین برنامه است) تبدیل شد.
  `

  return (
    <div className="col-12 col-md-5 signup p-5">
      <h1 className="text-uppercase">
        <span className="text-danger">مهلت</span>
        <span className="text-success"> کسب درآمد</span>
      </h1>
      
      <p className="my-5">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .pauseFor(1000)
            .typeString(descriptions)
            .pauseFor(1000)
            .typeString(descriptions2)
            .pauseFor(500)
            .typeString(descriptions3)
            .pauseFor(1000)
            .typeString(descriptions4)
            .pauseFor(3000)
            .deleteAll()
            .pauseFor(1000)
            .start();
          }}

          options={{
            delay: 50,
            deleteSpeed: 50,
            loop: true,
          }}
        />
      </p>

      <form action="#">
        <label htmlFor="floatingPassword">
          <h4 className="text-secondary mb-3">
          برای شروع در آینده نزدیک، ثبت نام کن:
          </h4>
        </label>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="نام ..."
          />
          <label htmlFor="floatingPassword">نام</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="email"
            className="form-control"
            id="floatingName"
            placeholder="... ایمیل"
          />
          <label htmlFor="floatingName">ایمیل</label>
        </div>
        <input
          className="form-control form-control-lg btn btn-lg btn-success"
          type="submit"
          value="ارسال"
        />
      </form>
      <div className="social text-center mt-5 pt-5">
        <a
          className="text-decoration-none mx-2"
          href="https://github.com/github-1970/coming-soon-simple"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-2x text-success" />
        </a>
        <a className="text-decoration-none mx-2" href="#">
          <i className="fab fa-facebook fa-2x text-success" />
        </a>
        <a className="text-decoration-none mx-2" href="#">
          <i className="fab fa-twitter fa-2x text-success" />
        </a>
      </div>
    </div>
  );
}
