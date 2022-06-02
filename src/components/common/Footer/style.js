/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  bottom: 0px;
  background: ${(props) => props.theme.colors.darkblue};
  height: 52px;
  width: 100%;
  max-width: 500px;
  display: ${(props) => (props.isHideFooter ? 'none' : 'block')};
`;

export const ContainerInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  width: 100%;
  justify-content: space-evenly;
`;

export const Pointer = styled.a`
  cursor: pointer;
  display: inherit;
`;
