import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesCard,
} from "./ServiceElements";
import Icon1 from "../../images/bgValorant.jpg";
import Icon2 from "../../images/bgFortnite.jpg";
import Icon3 from "../../images/bgLeague.jpg";
import svg1 from "../../images/Valorant_logo.svg"
import svg2 from "../../images/Fortnite-logo.svg";
import svg3 from "../../images/League_logo.svg"


const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1> Games</ServicesH1>
      <ServicesWrapper>
        <ServicesCard img={Icon1}>
          <ServicesIcon src={svg1} />
          <ServicesH2></ServicesH2>
          <ServicesP>Learn From The Radiants!</ServicesP>
        </ServicesCard>
        <ServicesCard img={Icon2} >
          <ServicesIcon src={svg2} />
          <ServicesH2></ServicesH2>
          <ServicesP>Train with the best players and E-sports champions
          </ServicesP>
        </ServicesCard>
        <ServicesCard img={Icon3}>
          <ServicesIcon src={svg3} />
          <ServicesH2></ServicesH2>
          <ServicesP> Reach the comeptitve level! </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
