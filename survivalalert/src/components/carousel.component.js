import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import IMGairpollution from "../images/airpollution.jpg";
import IMGcancer from "../images/cancer.jpg";
import IMGcovid from "../images/covid.jpg";
import IMGearthquake from "../images/earthquake.jpg";
import IMGhiv from "../images/hiv.jpg";
import IMGhurricane from "../images/hurricane.jpg";
import IMGwaterpollution from "../images/waterpollution.jpg";
import IMGrecoverearth from "../images/recoverearth.jpg";
import IMGleaveearth from "../images/leaveearth.jpeg";
import { Link } from "react-router-dom";

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Link to="/earthquake">
          <img className="carouselImg" src={IMGearthquake} alt="Earthquake" />
          <Carousel.Caption>
            <h3>Earthquake</h3>
            <p>
              Ground shaking, surface faulting, ground failure, and less
              commonly, tsunamis.
            </p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/hurricane">
          <img className="carouselImg" src={IMGhurricane} alt="Hurricane" />
          <Carousel.Caption>
            <h3>Hurricane</h3>
            <p>
              High winds, storm surge, flooding and tornadoes cause damage to
              houses and cars that are in the path of a hurricane.
            </p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/airpollution">
          <img
            className="carouselImg"
            src={IMGairpollution}
            alt="Air Pollution"
          />
          <Carousel.Caption>
            <h3>Air Pollution</h3>
            <p>
              Air pollution kills an estimated seven million people worldwide
              every year.
            </p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/waterpollution">
          <img
            className="carouselImg"
            src={IMGwaterpollution}
            alt="Water Pollution"
          />
          <Carousel.Caption>
            <h3>Water Pollution</h3>
            <p>
              Water pollution, responsible for 1.8 million deaths, and
              workplace-related pollution (0.8 million), was also ranked among
              the most significant risks.
            </p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/covid">
          <img className="carouselImg" src={IMGcovid} alt="COVID" />
          <Carousel.Caption>
            <h3>COVID</h3>
            <p>
              Globally, as of 5:14pm CEST, 17 June 2021, there have been
              176,693,988 confirmed cases of COVID-19, including 3,830,304
              deaths, reported to WHO.
            </p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/hiv">
          <img className="carouselImg" src={IMGhiv} alt="HIV" />
          <Carousel.Caption>
            <h3>HIV</h3>
            <p>
              HIV continues to be a major global public health issue, having
              claimed 34.7 million [26.0–45.8 million] lives so far. There is no
              cure for HIV infection.
            </p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/cancer">
          <img className="carouselImg" src={IMGcancer} alt="Cancer" />
          <Carousel.Caption>
            <h3>Cancer</h3>
            <p>
              According to estimates from the International Agency for Research
              on Cancer (IARC), in 2018 there were 17.0 million new cancer cases
              and 9.5 million cancer deaths worldwide.
            </p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/recoverearth">
          <img
            className="carouselImg"
            src={IMGrecoverearth}
            alt="Recover Earth"
          />
          <Carousel.Caption>
            <h3>Recover Earth</h3>
            <p>
              Earth is likely to take millions of years to recover from the
              destruction currently being inflicted by humanity, scientists have
              warned.
            </p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/leaveearth">
          <img className="carouselImg" src={IMGleaveearth} alt="Leave Earth" />
          <Carousel.Caption>
            <h3>Mars Colonization</h3>
            <p>Human Settlement on Mars</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
