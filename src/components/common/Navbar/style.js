/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 0;
  background: ${(props) => props.theme.colors.darkblue};
  height: 52px;
  width: 100%;
  max-width: 500px;
  z-index: 1;
`;

export const ContainerInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  width: 100%;
`;

export const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.lato};
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  margin-right: 10px;
`;

export const Pointer = styled.a`
  cursor: pointer;
  display: inherit;
`;
