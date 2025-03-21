import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import "./partners.css";
import dahua from "../images/Dahua.png";

function Partners() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true, // Enable looping for continuous scrolling
    },
    [
      AutoScroll({
        delay: 2000,
        stopOnInteraction: true,
        slidesToScroll: "auto",
      }), // Auto-scroll every 2 seconds
    ]
  );

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    autoScroll.play(); // Start autoplay when the component mounts
  }, [emblaApi]);

  const logos = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Dahua_Technology_logo.svg",
      name: "dahua",
    },
    {
      id: 2,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFu8CDjLlZbY7niFzjzhrWp9GakzxHC-n9jw&s",
      name: "hikvision",
    },
    {
      id: 3,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUogbAE08cb3s0BZ1LfyTd0TdGeGgZmvaeQ&s",
      name: "axis",
    },
    {
      id: 4,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/1280px-Bosch-logo.svg.png",
      name: "bosch",
    },
    {
      id: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Canon_wordmark.svg/2560px-Canon_wordmark.svg.png",
      name: "canon",
    },
  ];
  return (
    <div className="embla">
      <div className="partner-section">
        <div className="header-content">
          <h2 className="subtitle">our partners</h2>
          <h1 className="title">
            Powerful Collaborations: Trusted Partnerships for Success
          </h1>
        </div>
        <div className="background-text">
          <h1 className="background-title">Partners</h1>
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {logos?.map((logo, index) => (
            <div className="embla__slide" key={index}>
              <img
                src={logo?.logo}
                alt={`Logo ${index + 1}`}
                className="embla__slide__img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
