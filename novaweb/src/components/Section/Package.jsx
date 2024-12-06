import "../../assets/styles/package.scss";
import images from "../../assets/images";
import { SvgIcon } from "../UI/SvgComponent";
import Modal from "../UI/Modal";
import { useState } from "react";

export const Package = () => {
  const [modalActive, SetModalActive] = useState(false);
  return (
    <section className="package">
      <Modal active={modalActive} SetModalActive={SetModalActive} />
      <div className="container">
        <div className="package-title-container">
          <div className="package-title">
            <h2 className="package-title-main">
              <span className="text"> Обирай </span>
              <span className="text"> свій </span>
              <span className="text"> формат </span>
              <span className="text"> та </span>
              <span className="text"> прокачай </span>
            </h2>
            <div className="package-subtitle">
              <span className="package-title-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fa0707"
                  viewBox="0 0 24 24"
                  stroke-width="0.5"
                  stroke="#fa0707"
                  class="size-6"
                  width="70px"
                  height="auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
              <span className="package-title-subtitle">
                фінанси, бізнес, продажі, маркетинг, менеджмент і своє майбутнє
                з найкращими експертами
              </span>
            </div>
          </div>
        </div>
        <ul className="package-card-continer">
          <li className="package-card">
            <div className="package-card__title-wrapper">
              <div className="package-card__title-item">
                <div className="item__wrapper">
                  <div className="package-card__title">
                    <p className="package-card__text">
                      Pack 1.
                      <br /> Finance
                    </p>
                    <button className="card-button-popup">
                      <span>детальніше</span>{" "}
                      <span className="card-button__arrow">
                        <SvgIcon
                          width={"25px"}
                          className="card-button__arrow--before"
                        />
                        <SvgIcon
                          width={"25px"}
                          className="card-button__arrow--after"
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <img
                  className="item__img-small"
                  src={images["sl-s.avif"]}
                  alt=""
                />
              </div>
            </div>
            <div className="card-img-wrapper">
              <div className="card-img">
                <img src={images["pack-1.avif"]} alt="" />
              </div>
            </div>
            <div className="crad-button">
              <span className="icon-continer">
                <SvgIcon
                  width={"25px"}
                  className="card-button__arrow--before"
                />
                <SvgIcon className="package-footer-icon " />

                <span
                  className="crad-button__text"
                  onClick={() => SetModalActive(true)}
                >
                  забрати пак
                </span>
                <SvgIcon className="package-footer-icon__flip " />
              </span>
            </div>
          </li>
          <li className="package-card">
            <div className="package-card__title-wrapper">
              <div className="package-card__title-item">
                <div className="item__wrapper">
                  <div className="package-card__title">
                    <p className="package-card__text">
                      Pack 2. <br />
                      Business
                    </p>
                    <button className="card-button-popup">
                      <span>детальніше</span>{" "}
                      <span className="card-button__arrow">
                        <SvgIcon
                          width={"25px"}
                          className="card-button__arrow--before"
                        />
                        <SvgIcon
                          width={"25px"}
                          className="card-button__arrow--after"
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <img
                  className="item__img-small"
                  src={images["sl-s.avif"]}
                  alt=""
                />
              </div>
            </div>
            <div className="card-img-wrapper">
              <div className="card-img">
                <img src={images["pack-2.avif"]} alt="" />
              </div>
            </div>
            <div className="crad-button">
              <span className="icon-continer">
                <SvgIcon className="package-footer-icon " />
                <span
                  className="crad-button__text"
                  onClick={() => SetModalActive(true)}
                >
                  забрати пак
                </span>

                <SvgIcon className="package-footer-icon__flip " />
              </span>
            </div>
          </li>
          <li className="package-card">
            <div className="package-card__title-wrapper">
              <div className="package-card__title-item">
                <div className="item__wrapper">
                  <div className="package-card__title">
                    <p className="package-card__text">
                      Pack 3.
                      <br /> Sales
                    </p>
                    <button className="card-button-popup">
                      <span>детальніше</span>{" "}
                      <span className="card-button__arrow">
                        <SvgIcon
                          width={"25px"}
                          className="card-button__arrow--before"
                        />
                        <SvgIcon
                          width={"25px"}
                          className="card-button__arrow--after"
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <img
                  className="item__img-small"
                  src={images["sl-s.avif"]}
                  alt=""
                />
              </div>
            </div>
            <div className="card-img-wrapper">
              <div className="card-img">
                <img src={images["pack-3.avif"]} alt="" />
              </div>
            </div>

            <div className="crad-button">
              <span className="icon-continer">
                <SvgIcon className="package-footer-icon " />

                <span
                  className="crad-button__text"
                  onClick={() => SetModalActive(true)}
                >
                  забрати пак
                </span>
                <SvgIcon className="package-footer-icon__flip " />
              </span>
            </div>
          </li>
          <li className="package-card">
            <div className="package-card__title-wrapper">
              <div className="package-card__title-item">
                <div className="item__wrapper">
                  <div className="package-card__title">
                    <p className="package-card__text">
                      Pack 4.
                      <br /> MARKETING
                    </p>
                    <button className="card-button-popup">
                      <span>детальніше</span>{" "}
                      <span className="card-button__arrow">
                        <SvgIcon
                          width={"25px"}
                          className="card-button__arrow--before"
                        />
                        <SvgIcon
                          width={"25px"}
                          className="card-button__arrow--after"
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <img
                  className="item__img-small"
                  src={images["sl-s.avif"]}
                  alt=""
                />
              </div>
            </div>
            <div className="card-img-wrapper">
              <div className="card-img">
                <img src={images["pack-4.avif"]} alt="" />
              </div>
            </div>
            <div className="crad-button">
              <span className="icon-continer">
                <SvgIcon className="package-footer-icon " />

                <span
                  className="crad-button__text"
                  onClick={() => SetModalActive(true)}
                >
                  забрати пак
                </span>
                <SvgIcon className="package-footer-icon__flip " />
              </span>
            </div>
          </li>
          <li className="package-card">
            <div className="package-card__title-wrapper">
              <div className="package-card__title-item">
                <div className="item__wrapper">
                  <div className="package-card__title">
                    <p className="package-card__text">
                      Pack 5.
                      <br /> Manager
                    </p>
                    <button className="card-button-popup">
                      <span>детальніше</span>{" "}
                      <span className="card-button__arrow">
                        <SvgIcon
                          width={"25px"}
                          className="card-button__arrow--before"
                        />
                        <SvgIcon
                          width={"25px"}
                          className="card-button__arrow--after"
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <img
                  className="item__img-small"
                  src={images["sl-s.avif"]}
                  alt=""
                />
              </div>
            </div>
            <div className="card-img-wrapper">
              <div className="card-img">
                <img src={images["pack-5.avif"]} alt="" />
              </div>
            </div>
            <div className="crad-button">
              <span className="icon-continer">
                <SvgIcon className="package-footer-icon " />

                <span
                  className="crad-button__text"
                  onClick={() => SetModalActive(true)}
                >
                  забрати пак
                </span>
                <SvgIcon className="package-footer-icon__flip " />
              </span>
            </div>
          </li>
          <li className="package-card">
            <div className="package-card__title-wrapper">
              <div className="package-card__title-item">
                <div className="item__wrapper">
                  <div className="package-card__title">
                    <p className="package-card__text">
                      CUSTOM <br />
                      PACK
                    </p>
                    <button className="card-button-popup">
                      <span>детальніше</span>{" "}
                      <span className="card-button__arrow">
                        <SvgIcon
                          width={"25px"}
                          className="card-button__arrow--before"
                        />
                        <SvgIcon
                          width={"25px"}
                          className="card-button__arrow--after"
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <img
                  className="item__img-small"
                  src={images["sl-s.avif"]}
                  alt=""
                />
              </div>
            </div>
            <div className="card-img-wrapper">
              <div className="card-img">
                <img src={images["pack-6.avif"]} alt="" />
              </div>
            </div>
            <div className="crad-button">
              <span className="icon-continer">
                <SvgIcon className="package-footer-icon " />

                <span
                  className="crad-button__text"
                  onClick={() => SetModalActive(true)}
                >
                  забрати пак
                </span>
                <SvgIcon className="package-footer-icon__flip " />
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Package;
