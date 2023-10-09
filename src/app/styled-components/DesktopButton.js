'use client';
import styled from 'styled-components';
import { COLORS } from '../constants';

export const DesktopButton = styled.a`
  margin: 16px;
  text-align: center;
  padding: 16px;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  border-radius: 100px;
  text-decoration: none;
  transition: transform 200ms;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MobileMenuButton = styled(DesktopButton)`
  font-size: 1.15rem;
  background-color: transparent;
  color: ${COLORS.primary};
  text-transform: uppercase;
`;
