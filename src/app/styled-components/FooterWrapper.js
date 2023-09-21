'use client';
import styled from 'styled-components';
import { COLORS } from '../constants';

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${COLORS.sandYellow};
  border-top: 8px double ${COLORS.mustardYellow};
`;
