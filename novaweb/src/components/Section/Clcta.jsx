import "../../assets/styles/clcta.scss";
import img from "../../assets/images/footer-image.avif";
import { SvgIcon } from "../../components/UI/SvgComponent";

export const ClSta = () => {
  return (
    <section className="clsta">
      <div className="container">
        <div className="clsta-title-container">
          <h2 className="clsta-title__main">
            <span className="clsta-text">Ваша</span>
            <span className="clsta-text">унікальна</span>
            <span className="clsta-text">можливість</span>
            <span className="clsta-text">стати</span>
            <span className="clsta-text">лідером</span>
            <span className="clsta-text">на</span>
            <span className="clsta-text">ринку</span>
            <span className="clsta-text">–</span>
            <span className="clsta-text">тут!</span>
          </h2>
          <div className="clsta-title__subtitle">
            <span className="clsta-subtext">
              Обирайте навчання сьогодні — впроваджуєте його завтра.
            </span>
            <button className="clsta-button">
              <span>Більше про програми</span>
              <span className="card-button__arrow">
                <SvgIcon
                  width={"25px"}
                  className="card-button__arrow--before"
                />
                <SvgIcon width={"25px"} className="card-button__arrow--after" />
              </span>
            </button>
          </div>

          <div className="clsta-img">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
