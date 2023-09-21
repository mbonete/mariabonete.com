import { Menu } from 'react-feather';
import LinkButton from '../components/LinkButton';
import HamburguerMenuModal from '../components/HamburguerMenuModal';
import { 
  Wrapper,
  MaxWidthWrapper,
  TitleSection, 
  Title, 
  Subtitle, 
  HamburguerMenuWrapper, 
  MenuButton,
  ButtonSection,
  Wave,
  Illustration,
  SmallIllustration
} from '../styled-components/HeaderWrapper';

function Header({showMobileMenu, setShowMobileMenu}) {

  return (
    <Wrapper>
      <MaxWidthWrapper>
        <TitleSection>
          <Title>Maria Bonete</Title>
          <Subtitle>Front-end Developer</Subtitle>
        </TitleSection>
      
        <HamburguerMenuWrapper role="navigation" aria-label="Main menu">
          <MenuButton onClick={() => setShowMobileMenu(true)}>
            <Menu size={40} />
          </MenuButton>
          
          <HamburguerMenuModal 
            isOpen={showMobileMenu} 
            onClose={() => setShowMobileMenu(false)}
          />
        </HamburguerMenuWrapper>
        
        <ButtonSection>
          
          <LinkButton href='https://github.com/mbonete'>Github</LinkButton>
          <LinkButton href='https://www.linkedin.com/in/maria-bonete'>LinkedIn</LinkButton>
          <LinkButton href='files/MariaBoneteCV.pdf' download='MariaBoneteCV.pdf'>CV</LinkButton>
        </ButtonSection>
      </MaxWidthWrapper>
      <Wave src='img/group.svg' alt=''  draggable={false} />  
      <Illustration src='img/happy.svg' alt='Illustration of a girl working with a computer and a cat' draggable={false} />
      <SmallIllustration src='img/gato.svg'  alt='Illustration of a cat laying comfortably'draggable={false}/>

    </Wrapper>
  );
}



export default Header;