import React from 'react';
import { Container, ContainerInner, Pointer } from '@common/Footer/style';
import Image from 'next/image';
import Link from 'next/link';

const Footer = ({ activeMenu }) => {
  return (
    <Container isHideFooter={activeMenu === 0}>
      <ContainerInner>
        <Pointer href={'/'}>
          <Image
            src={
              activeMenu === 1 ? '/images/home-on.png' : '/images/home-off.png'
            }
            alt="logo"
            layout="fixed"
            width={30}
            height={30}
          />
        </Pointer>
        <Pointer href={'/pokedex-my-list'}>
          <Image
            src={
              activeMenu === 2 ? '/images/list-on.png' : '/images/list-off.png'
            }
            alt="logo"
            layout="fixed"
            width={30}
            height={30}
          />
        </Pointer>
      </ContainerInner>
    </Container>
  );
};

export default Footer;
