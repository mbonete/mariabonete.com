'use client';
import { HomeWrapper } from './styled-components/HomeWrapper';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Keywords from './sections/Keywords';
import Projects from './sections/Projects';
import { useMobileMenu } from './hooks/useMobileMenu';

function Home() {
  const { showMobileMenu, setShowMobileMenu } = useMobileMenu();
  return (
    <HomeWrapper>
      <Header showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu}/>
      <Keywords />
      <Projects />
      <Footer />
    </HomeWrapper>
  );
}

export default Home;