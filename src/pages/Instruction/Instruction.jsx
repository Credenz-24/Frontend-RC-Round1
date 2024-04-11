import "./Instruction.css";
import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import PropTypes from "prop-types";
// import axios from "../../../axios/axios";

function Carousel(props) {
  // const [myData, setMyData] = useState([]);
  // const [isError, setIsError] = useState("");
  const [slideTotal, setSlideTotal] = useState(0);
  const [slideCurrent, setSlideCurrent] = useState(-1);
  const [slides, setSlides] = useState([]);
  const [height, setHeight] = useState("0px");
  const [acceptedConditions, setAcceptedConditions] = useState(false);

  // const getMyPostData = async () => {
  //   try {
  //     const res = await axios.get("/posts");
  //     setMyData(res.data);
  //   } catch (error) {
  //     setIsError(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getMyPostData();
  // }, []);

  const intervalRef = useRef(null);
  const nextRef = useRef();
  const handlers = useSwipeable({
    onSwipedLeft: () => slideRight(),
    onSwipedRight: () => slideLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const locSlides = [];
    props.slides.forEach((slide) => {
      const slideobject = {
        class: "slider-single proactivede",
        element: slide,
      };
      locSlides.push(slideobject);
    });

    setSlides(locSlides);
    setSlideTotal(locSlides.length - 1);
    setSlideCurrent(-1);

    if (slideCurrent === -1) {
      setTimeout(() => {
        nextRef.current.click();

        if (props.autoplay) {
          intervalRef.current = setTimeout(() => {
            nextRef.current.click();
          }, props.interval);
        }
      }, 500);
    }
  }, [props.slides]);

  useEffect(() => {
    if (slideCurrent === -1) {
      setTimeout(() => {
        // slideRight();
      }, 100);
    }
  }, []);

  const slideRight = () => {
    let preactiveSlide;
    let proactiveSlide;
    let slideCurrentLoc = slideCurrent;

    const activeClass = "slider-single active";
    const slide = [...slides];

    if (slideTotal > 1) {
      if (slideCurrentLoc < slideTotal) {
        slideCurrentLoc++;
      }

      if (slideCurrentLoc > 0) {
        preactiveSlide = slide[slideCurrentLoc - 1];
      } else {
        preactiveSlide = slide[slideTotal];
      }

      const activeSlide = slide[slideCurrentLoc];

      if (slideCurrentLoc < slideTotal) {
        proactiveSlide = slide[slideCurrentLoc + 1];
      } else {
        proactiveSlide = slide[0];
      }

      slide.forEach((slid, index) => {
        if (slid.class.includes("preactivede")) {
          slid.class = "slider-single proactivede";
        }

        if (slid.class.includes("preactive")) {
          slid.class = "slider-single preactivede";
        }
      });

      preactiveSlide.class = "slider-single preactive";
      activeSlide.class = activeClass;
      proactiveSlide.class = "slider-single proactive";
      setSlides(slide);
      setSlideCurrent(slideCurrentLoc);
      

      if (document.getElementsByClassName("slider-single active").length > 0) {
        setTimeout(() => {
          if (
            document.getElementsByClassName("slider-single active").length > 0
          ) {
            const height = document.getElementsByClassName(
              "slider-single active"
            )[0].clientHeight;
            setHeight(`${height}px`);
          }
        }, 500);
      }

      props.onSlideChange(slideCurrentLoc);

      if (props.autoplay) {
        clearTimeout(intervalRef.current);
        intervalRef.current = setTimeout(() => {
          nextRef.current.click();
        }, props.interval);
      }
    } else if (slide[0] && slide[0].class !== activeClass) {
      slide[0].class = activeClass;
      setSlides(slide);
      setSlideCurrent(0);
    }
  };

  const slideLeft = () => {
    if (slideTotal > 1 && slideCurrent > 0) {
      let preactiveSlide;
      let proactiveSlide;
      let slideCurrentLoc = slideCurrent;
      const slide = [...slides];

      if (slideCurrentLoc > 0) {
        slideCurrentLoc--;
      } else {
        slideCurrentLoc = slideTotal;
      }

      if (slideCurrentLoc < slideTotal) {
        proactiveSlide = slide[slideCurrentLoc + 1];
      } else {
        proactiveSlide = slide[0];
      }

      let activeSlide = slide[slideCurrentLoc];

      if (slideCurrentLoc > 0) {
        preactiveSlide = slide[slideCurrentLoc - 1];
      } else {
        preactiveSlide = slide[slideTotal];
      }

      slide.forEach((slid, index) => {
        if (slid.class.includes("proactivede")) {
          slid.class = "slider-single preactivede";
        }

        if (slid.class.includes("proactive")) {
          slid.class = "slider-single proactivede";
        }
      });

      preactiveSlide.class = "slider-single preactive";
      activeSlide.class = "slider-single active";
      proactiveSlide.class = "slider-single proactive";
      setSlides(slide);
      setSlideCurrent(slideCurrentLoc);
      props.onSlideChange(slideCurrentLoc);

      if (document.getElementsByClassName("slider-single active").length > 0) {
        setTimeout(() => {
          if (
            document.getElementsByClassName("slider-single active").length > 0
          ) {
            const height = document.getElementsByClassName(
              "slider-single active"
            )[0].clientHeight;
            setHeight(`${height}px`);
          }
        }, 500);
      }
    }
  };

  const sliderClass = (direction) => {
    let sliderClass = `slider-${direction}`;

    if (!props.arrows) {
      sliderClass = "slider-disabled";
    } else if (props.arrows && !props.arrowBorders) {
      sliderClass = `slider-${direction}-noborders`;
    }

    return sliderClass;
  };
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  });

  const handleProceedClick = () => {
    if (acceptedConditions) {
      console.log("Proceeding...");
    } else {
      console.log("Please accept the conditions.");
    }
  };

  const buttonDisabled = (    <button
    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
    onClick={handleProceedClick}
  >
    Proceed
  </button>);

  return (
    <div className="flex flex-col gap-3">
      <div
        className="react-3d-carousel relative "
        style={{ height }}
        {...handlers}
      >
        {slides && slides.length > 0 && (
          <div className="slider-container">
            <div className="slider-content">
              {slides.map((slider, index) => (
                <div className={slider.class} key={index}>
                  <div className={sliderClass("left")} onClick={slideLeft}>
                    <div>
                      <i className="arrow left"></i>
                    </div>
                  </div>
                  <div
                    className={sliderClass("right")}
                    onClick={slideRight}
                    ref={nextRef}
                  >
                    <div>
                      <i className="arrow right"></i>
                    </div>
                  </div>

                  <div className="slider-single-content">{slider.element}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center  text-white">
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="agreeCheckbox"
          className="mr-2 h-4 w-6"
          disabled={slideCurrent !== slides.length - 1}
          onChange={(e) => setAcceptedConditions(e.target.checked)}
        />
        <label htmlFor="agreeCheckbox" className="text-lg">I agree to the instructions</label>
      </div>
      {acceptedConditions && (
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          onClick={handleProceedClick}
        >
          Proceed
        </button>
      )}
</div>

    </div>
  );
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.element),
  autoplay: PropTypes.bool,
  interval: PropTypes.number,
  arrows: PropTypes.bool,
  arrowBorders: PropTypes.bool,
  onSlideChange: PropTypes.func.isRequired,
};

Carousel.defaultProps = {
  autoplay: false,
  interval: 3000,
  arrows: true,
  arrowBorders: true,
};

export default function MyComponent() {
  const slides = [
    <div className="w-[80%] h-[450px] p-4 bg-[white] rounded-3xl">
      <h1 className="font-bold text-center p-2 md:text-2xl sm:text-xl m-auto w-[80%] lg:text-3xl">
        INSTRUCTION 1
      </h1>
      <p className="sm:text-sm md:text-md lg:text-lg ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
        fermentum lorem.
      </p>
    </div>,
    <div className="w-[80%] h-[450px] p-4 bg-white rounded-3xl">
      <h1 className="font-bold text-center p-2 md:text-2xl sm:text-xl m-auto w-[80%] lg:text-3xl">
        INSTRUCTION 2
      </h1>
      <p className="sm:text-sm md:text-md lg:text-lg ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
        fermentum lorem.
      </p>
    </div>,
    <div className="w-[80%] h-[450px] bg-white rounded-3xl">
      <h1 className="font-bold text-center p-2 md:text-2xl sm:text-xl m-auto w-[80%] lg:text-3xl">
        INSTRUCTION 3
      </h1>
      <p className="sm:text-sm md:text-md lg:text-lg ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
        fermentum lorem.
      </p>
    </div>,
    <div className="w-[80%] h-[450px] bg-white rounded-3xl">
      <h1 className="font-bold text-center p-4 md:text-2xl sm:text-xl m-auto w-[80%] lg:text-3xl">
        INSTRUCTION 4
      </h1>
      <p className="sm:text-sm md:text-md lg:text-lg ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
        fermentum lorem.
      </p>
    </div>,
    <div className="w-[80%] h-[450px] bg-white rounded-3xl">
      <h1 className="font-bold text-center p-4 md:text-2xl sm:text-xl m-auto w-[80%] lg:text-3xl">
        INSTRUCTION 5
      </h1>
      <p className="sm:text-sm md:text-md lg:text-lg ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
        fermentum lorem.
      </p>
    </div>,
  ];

  return (
    <div style={{ backgroundColor: "black" }}>
      <Carousel slides={slides} />

      {/* <div className="flex flex-col items-center mt-6 text-white">
                <div className="flex items-center mb-4">

                    <input
                        type="checkbox"
                        id="agreeCheckbox"
                        className="mr-2"
                    />
                    <label htmlFor="agreeCheckbox">I agree to the instructions</label>
                </div>
                <button
                     onClick={handleProceedClick}
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
                    Proceed
                </button>
            </div> */}
    </div>
  );
}