/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import facepaint from 'facepaint';
import breakpoints from '@theme/breakpoints';

const mq = facepaint(breakpoints);

export const Container = styled.div((props) => {
  const {
    theme: { colors },
  } = props;
  return mq({
    paddingTop: '52px',
    background: colors.white,
    margin: '0px auto',
    maxWidth: '500px',
    height: '100vh',
  });
});
