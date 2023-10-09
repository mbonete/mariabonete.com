'use client';
import styled from 'styled-components';
import Subtitle from '../components/Subtitle';
import { QUERIES, COLORS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { Coffee, Gift, Home, Music } from 'react-feather';

const projects = [
  {
    title: 'The Coffee Place',
    href: 'https://the-coffee-place.vercel.app/',
    description: 'This project showcases the artistry of a fictional coffee shop with a focus on elegant design. Users can effortlessly explore the coffee shop\'s offerings, place orders, and engage with dynamic content. Web application crafted using JavaScript, Next.js, and styled-components.',
    src: '/img/coffee-place.png',
    alt: '',
    github: 'https://github.com/mbonete/coffee-place',
    icon: <Coffee size={20} style={{marginBottom: '5px'}}/>
  },
  {
    title: 'Mago del Regalo',
    href: 'https://www.magodelregalo.com',
    description: 'Currently building front-end for Mago del Regalo (“the gift wizard”), AI-powered app that eliminates the challenge of finding gift ideas. Developed utilizing Next.js, TypeScript, MaterialUI, React Query, and Styled Components.',
    src: '/img/magodelregalo.svg',
    alt: '',
    icon: <Gift size={20} style={{marginBottom: '5px'}}/>
  },
  {
    title: 'Guess The BPM',
    href: 'https://www.guessthebpm.com',
    description: 'Independently built a web-based game using React and StyledComponents that enables users to try to guess the beats per minute of a song by tapping their mouse to the beat in rhythm. The page features an integration with the YouTube API to serve videos and has i18n internationalization for both Spanish and English language.',
    src: '/img/guessthebpm.svg',
    alt: '',
    github: 'https://github.com/mbonete/guess-the-bpm',
    icon: <Music size={20} style={{marginBottom: '5px'}}/>
  },
  {
    title: 'Homely',
    href: 'https://github.com/mbonete/homely',
    description: 'Minimal real estate platform that serves as a proof of concept for integration with a CRUD API, utilizing a range of libraries such as React, React Hook Forms, React Query, Axios, MaterialUI, and StyledComponents.',
    video: 'https://www.youtube.com/embed/lGpt8-h8XWY',
    alt: '',
    github: 'https://github.com/mbonete/homely',
    icon: <Home size={20} style={{marginBottom: '5px'}}/>
  },

] 

function Projects() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Subtitle>Side Projects</Subtitle>
        <Grid>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project}/>
          ))
        }
        </Grid>
      </MaxWidthWrapper>
      <Wave src='img/mustardWave.svg' alt='' draggable={false} />
    </Wrapper>
  );
}


const Wrapper = styled.div `
  isolation: isolate;
  position: relative;
  height: fit-content;
  background-color: ${COLORS.mustardYellow};
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 48px 0 172px 0;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 20px;
    padding: 0;
  }
`;

const MaxWidthWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 32px;

  @media ${QUERIES.desktopAndSmaller} {
    max-width: 1100px;
    padding-top: 16px;
  }
  @media ${QUERIES.laptopAndSmaller} {
    max-width: 900px;
    align-items: center;
    padding: 16px 48px 48px 48px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 16px;
  margin-top: 16px;


  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const Wave = styled.img`
  position: absolute;
  top: -100px;
  width: 100%;
  min-height: 110px;
  object-fit: cover;
  object-position: center;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
`;


export default Projects;