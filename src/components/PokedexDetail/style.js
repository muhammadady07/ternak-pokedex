import styled from '@emotion/styled';

const Container = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: 16px;
  min-height: 100vh;
`;

const TitleTxt = styled.div`
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: 16px;
  color: ${(props) => props.theme.colors.black};
`;

const Style = {
  Container,
  TitleTxt,
};

export default Style;
