import React, { useState, useEffect } from 'react';
import theme from '@theme/index';
import { ThemeProvider } from '@emotion/react';
import { Container } from '@common/Layout/style';
import { Navbar, Footer } from '@components/index';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(0);
  const router = useRouter();

  // useEffect for detect initial active menu
  useEffect(() => {
    if (router?.pathname) {
      const { pathname } = router;
      if (pathname === '/pokedex-my-list') {
        setActiveMenu(2);
      } else if (pathname === '/pokedex-detail') {
        setActiveMenu(0);
      } else {
        setActiveMenu(1);
      }
    }
  }, []);

  // useEffect for detect when active menu is changed
  useEffect(() => {
    const handleRouteChange = (url) => {
      const getParamUrl = url.split('?');
      if (url === '/pokedex-my-list') {
        setActiveMenu(2);
      } else if (getParamUrl[0] === '/pokedex-detail') {
        setActiveMenu(0);
      } else {
        setActiveMenu(1);
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar activeMenu={activeMenu} />
        {children}
        <Footer activeMenu={activeMenu} />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
