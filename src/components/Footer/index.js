import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinkWrapper,
  FooterLinksContainer,
  FooterWrap,
  FooterLink,
} from "./FooterElements";

import {
  SocialMedia,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRights
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";


const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> Supported Games </FooterLinkTitle>
                <FooterLink to="/">Fortnite</FooterLink>
                <FooterLink to="/">Valorant</FooterLink>
                <FooterLink to="/">League of Legends</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Learn more</FooterLinkTitle>
                <FooterLink to="/">Terms & Conditions</FooterLink>
                <FooterLink to="/">Privacy Policy</FooterLink>
                <FooterLink to="/">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome} >FPS Coach</SocialLogo>
              <WebsiteRights> FPS Coach © {new Date().getFullYear()} All rights reserved </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
