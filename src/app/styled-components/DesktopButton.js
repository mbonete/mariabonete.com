'use client';
import styled from 'styled-components';
import { COLORS } from '../constants';

export const DesktopButton = styled.a`
  min-width: 210px;
  margin: 16px;
  text-align: center;
  padding: 16px 32px;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  font-size: 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    text-decoration: revert;
  }
`;

export const MobileMenuButton = styled(DesktopButton)`
  font-size: 1.15rem;
  background-color: transparent;
  color: ${COLORS.primary};
  text-transform: uppercase;
`;
