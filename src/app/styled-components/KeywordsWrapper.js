'use client';
import styled from 'styled-components'
import { COLORS, QUERIES } from '../constants';

export const KeywordsWrapper = styled.div `
  width: 100%;
  height: fit-content;
  background-color: ${COLORS.secondary};
  padding: 0 64px 150px 64px;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 0 48px 100px 48px;
  }
`;

export const MaxWidthWrapper = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin: 0 auto;

  @media ${QUERIES.desktopAndSmaller} {
    max-width: 1100px;
  }
  @media ${QUERIES.laptopAndSmaller} {
    max-width: 900px;
  }
`;