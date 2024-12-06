import "../../assets/styles/hero.scss";
import img from "../../assets/images/hero-img.avif";

export const Header = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-heading">
            <div className="hero-title-wrapper">
              <p className="hero-title hero-title__black">BLACK</p>
            </div>
            <div className="hero-title-wrapper">
              <p className="hero-title hero-title__white">FRIDAY</p>
            </div>
          </div>
          <div className="hero-img-wrapper">
            <img src={img} alt="img" />
          </div>
          <div className="hero-footer">
            <div className="hero-info">
              <h1 className="hero-subtitle">
                <strong>Навчайся сьогодні — заробляй завтра:</strong> всі курси
                зі знижкою до 60% лише на BLACK FRIDAY!
              </h1>
              <button className="hero-button">
                <span>ОБИРАТИ ПАКЕТ</span>
              </button>
            </div>
            <div className="hero-time">
              <div className="hero-timer-column">
                <span className="hero-timer-time">0</span>
                <span className="hero-timer-time">1</span>
                <span className="hero-timer-text">дні</span>
              </div>
              <span className="hero-timer-colon">:</span>

              <div className="hero-timer-column">
                <span className="hero-timer-time">2</span>
                <span className="hero-timer-time">2</span>
                <span className="hero-timer-text">години</span>
              </div>
              <span className="hero-timer-colon">:</span>

              <div className="hero-timer-column">
                <span className="hero-timer-time">3</span>
                <span className="hero-timer-time">7</span>
                <span className="hero-timer-text">хвилини</span>
              </div>
              <span className="hero-timer-colon">:</span>

              <div className="hero-timer-column">
                <span className="hero-timer-time">0</span>
                <span className="hero-timer-time">4</span>
                <span className="hero-timer-text">секунди</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
