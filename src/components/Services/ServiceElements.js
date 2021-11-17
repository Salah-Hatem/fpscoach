import styled from "styled-components";

export const ServicesContainer = styled.div`
  min-height: 860px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1900px;
  }
  @media screen and (max-width: 480px) {
    height: 1900px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background-image: linear-gradient(to bottom, rgba(125,125,125,0.5) 0%, rgba(0,0,0,0.7) 100% ),url(${(props) => props.img});
  background-color: #fff;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 540px;
  padding: 30px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  overflow-y: hidden;
  overflow-x: hidden;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    max-width: 400px;
  }
`;

export const ServicesIcon = styled.img`
  height: 240px;
  width: 240px;
  margin-bottom: 10px;
  min-height: 240px;
`;

export const ServicesH1 = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 1000px) {
    margin: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  color: #fff;
  
  
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;
