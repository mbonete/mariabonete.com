'use client';
import styled from 'styled-components';
import { QUERIES, COLORS } from '../constants';
import Link from 'next/link';
import Image from 'next/image';
import { GitHub } from 'react-feather';


function ProjectCard ({project}) {
  
  const { title, href, description, src, alt, video, github, icon } = project;

  return (
    <Wrapper>
      <Header >
        <LinkTitle href={href}>
          <Title>
            {icon ? icon : null}{title}
          </Title>
        </LinkTitle>
        { github ? <LinkGithub href={github}><GitHub size={20}/></LinkGithub> : null}
      </Header>
      <Description>{description}</Description>
      {
        video ? (
          <Video
            width="100%"
            height="100%"
            src={video}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
         
        ) : (
          <LinkImage href={href} target='_blank' rel="noreferrer">
            <ProjectImage src={src} alt={alt} height={300} width={800} draggable={false}/>
          </LinkImage>
        )
      }
    </Wrapper>
  )
}

export default ProjectCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${COLORS.sandYellow};
  border-radius: 25px;
  padding: 48px;
  gap: 24px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 24px;
    align-items: center;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h2`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 1.5rem;
  color: ${COLORS.primary};
  transition: 300ms;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1.35rem;
  }
  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1.15rem;
    gap: 4px;
  }
`;

const LinkTitle = styled(Link)`
  text-decoration: none;
  height: 100%;
  width: fit-content;

  &:hover ${Title} {
    color: ${COLORS.gray};
    transform: translateY(-5px);
  }

`;



const Description = styled.p`
  font-size: 1.15rem;
  hyphens: auto;
  line-height: 1.685;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1rem;
  }
`;

const LinkImage = styled(Link)`
  margin-top: auto;
  text-decoration: none;
  cursor: pointer;
`;

const ProjectImage = styled(Image)`
  object-fit: contain;
  margin: 0 auto;
  width: auto;
  height: auto;
  border-radius: 4px;
`;

const Video = styled.iframe`
  position: block;
  border-radius: 4px;
`;

const LinkGithub = styled.a`
  color: ${COLORS.gray};
  padding: 8px;
  transition: 300ms;


  //optical alignment with the title
  margin-top: -4px;


  &:hover {
    color: ${COLORS.primary};
    transform: rotate(0.25rad);
  }

  @media${QUERIES.tabletAndSmaller} {
    margin-left: auto;


    //optical alignment with the title
    margin-top: -1px;
  }
`;