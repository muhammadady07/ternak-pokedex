import React from 'react';
import {
  Container,
  ContainerInner,
  Title,
  Pointer,
} from '@common/Navbar/style';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = ({ activeMenu }) => {
  const router = useRouter();
  return (
    <Container>
      <ContainerInner>
        {activeMenu === 0 ? (
          <Pointer onClick={() => router.back()}>
            <Image
              src="/images/left-arrow.png"
              alt="logo"
              layout="fixed"
              width={30}
              height={30}
            />
          </Pointer>
        ) : (
          <Pointer href={'/'}>
            <Title>{activeMenu === 2 ? 'My Pokemon List' : 'Pokédex'}</Title>
            <Image
              src="/images/main-logo.png"
              alt="logo"
              layout="fixed"
              width={30}
              height={30}
            />
          </Pointer>
        )}
      </ContainerInner>
    </Container>
  );
};

export default Navbar;
