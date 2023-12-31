'use client';
import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';


export const Wrapper = styled.header`
  isolation: isolate;
  position: relative;
  height: 650px;
  width: 100%;
  background-color: ${COLORS.blueEsmerald};

  @media ${QUERIES.desktopAndSmaller} {
    height: 600px;
  };

  @media ${QUERIES.tabletAndSmaller} {
    height: 550px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    height: 300px;
  }
`;

export const MaxWidthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;

  @media ${QUERIES.desktopAndSmaller} {
    max-width: 1100px;
  }
  @media ${QUERIES.laptopAndSmaller} {
    max-width: 900px;
  }
  @media ${QUERIES.tabletAndSmaller} {
    padding: 8px 64px;
    height: 500px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    padding: 0 48px 150px 48px;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 6vw, 3.9rem);
  margin-top: 80px;

  &::first-letter {
    color: ${COLORS.primary};
    font-weight: 900;
    font-size: 4.5rem;
    text-shadow: 6px 0 black;
    margin-right: 4px;
  }

  @media ${QUERIES.laptopAndSmaller} {
    margin-top: 100px;
  }

  @media ${QUERIES.tabletAndSmaller} {
    max-width: 10ch;
    margin-top: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    &::first-letter {
      font-size: inherit;
      font-weight: revert;
      text-shadow: 4px 0 black;
    }
  }
`;
export const Subtitle = styled.h2`
  color: ${COLORS.gray};
  font-size: clamp(2rem, 6vw, 3.7rem);
  font-weight: 400;
  @media ${QUERIES.phoneAndSmaller}{
    max-width: 10ch;
  }
`;

export const HamburguerMenuWrapper = styled.nav`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
    position: absolute;
    top: 40px;
    right: 32px;
    min-width: 55px;
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: transparent;
  cursor: pointer;
`

export const ButtonSection = styled.div`
  display: flex;
  z-index: 3;
  gap: 32px;

  @media ${QUERIES.laptopAndSmaller} {
    flex-direction: column;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export const Wave = styled.img`
  position: absolute;
  bottom: -5px;
  width: 100%;
  min-height: 380px;
  object-fit: cover;
  object-position: right;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;

  @media ${QUERIES.laptopAndSmaller} {
    object-position: left;
  }

  @media ${QUERIES.phoneAndSmaller} {
    min-height: 150px;
  }
`;


export const Illustration = styled.img`
  position: absolute;
  bottom: 10px;
  right: 100px;
  height: 55%;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;


  @media ${QUERIES.laptopAndSmaller} {
    display: none;
  }
`;

export const SmallIllustration = styled.img`
  position: absolute;
  bottom: 0px;
  right: 20px;
  height: 25%;
  display: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
  

  @media ${QUERIES.laptopAndSmaller} {
    display: revert;
  }
`;