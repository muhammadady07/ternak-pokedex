import styled from '@emotion/styled';

const Container = styled.div`
  padding-bottom: 52px;
  background: ${(props) => props.theme.colors.darkblue};
  min-height: 100vh;
`;

const TxtFetchStatus = styled.p`
  text-align: center;
`;

const TxtTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

const BottomSection = styled.div`
  background: ${(props) => props.theme.colors.white};
`;

const FooterCatch = styled.div`
  position: fixed;
  bottom: 0px;
  background: ${(props) => props.theme.colors.darkblue};
  height: 52px;
  width: 100%;
  max-width: 500px;
  display: block;
`;

const FooterCatchInnerContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  width: 100%;
  justify-content: center;
`;

const Pointer = styled.a`
  cursor: pointer;
  display: block;
  position: absolute;
  top: -32px;
`;

const ContainerInner = styled.div`
  text-align: center;
`;

const TxtCatch = styled.p`
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

const ModalSubmitBtn = styled.div`
  cursor: pointer;
  background: ${(props) => props.theme.colors.darkblue};
  padding: 16px;
  border-radius: 8px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.white};
`;

const ContainerModal = styled.div`
  max-width: 500px;
  text-align: center;
`;

const ModalTxt = styled.p`
  font-family: ${(props) => props.theme.fonts.lato};
  font-size: 16px;
  color: ${(props) => props.theme.colors.black};
`;

const InputNickName = styled.input`
  height: 42px;
  width: 100%;
`;

export default {
  Container,
  TxtFetchStatus,
  TxtTitle,
  BottomSection,
  FooterCatch,
  FooterCatchInnerContainer,
  Pointer,
  ContainerInner,
  TxtCatch,
  ModalSubmitBtn,
  ContainerModal,
  ModalTxt,
  InputNickName,
};
