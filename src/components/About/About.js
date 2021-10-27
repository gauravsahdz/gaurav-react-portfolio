import React from "react";
import { stackList } from "../../data/ProjectData";
import pic from '../../Assets/pic.png'
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={pic}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Gaurav Sah</strong> and I enjoy
            creating things that live on the internet. My interest in web
            development started just in 2020 as I joined my college in 2019
            in CSE.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
