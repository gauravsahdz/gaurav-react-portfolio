import React, { useState } from "react";
import Typed from 'react-typed';
import Dropdown from "../Dropdown/Dropdown";
import scrollPng from '../../Assets/scroll-down.svg'
import pic from '../../Assets/pic.png'
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Namaste, I'm Gaurav</h1>
            <h5><Typed
            className="typed-text"
            strings={["MERN Developer", "Coder", "Content Creator", "Photographer", "Student"]}
            typeSpeed={40}
            backSpeed={60}
            loop={5}
            /></h5>
            <p>
              I design and code beautifully simple things, and I love what I do.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src={pic}
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src={scrollPng}
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
