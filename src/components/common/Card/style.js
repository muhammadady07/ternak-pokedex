/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 16px;
  border: 1px solid ${(props) => props.theme.colors.lightgrey};
  display: flex;
  align-items: center;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
`;

export const NameTxt = styled.p`
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: 16px;
  color: ${(props) => props.theme.colors.transparentBlack72};
`;

export const OwnedTxt = styled.p`
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: 16px;
  color: ${(props) => props.theme.colors.grey};
`;

export const Pointer = styled.a`
  cursor: pointer;
  display: inherit;
`;
