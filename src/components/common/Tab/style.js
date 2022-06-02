import styled from '@emotion/styled';

export const TabContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const TabButton = styled.div`
  height: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: 0.6s;
  background: ${(props) => props.theme.colors.white};
  &:focus {
    outline: none;
  }
  cursor: pointer;
  width: 100%;
`;

export const Title = styled.p`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.theme.colors.transparentBlack48};
  margin: 12px;
`;

export const Indicator = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.6s;
`;
