'use client';
import styled from 'styled-components';
import { QUERIES, COLORS } from '../constants';
import Link from 'next/link';
import Image from 'next/image';
import { GitHub } from 'react-feather';


function ProjectCard ({project}) {
  
  const { title, href, description, src, alt, video, github } = project;

  return (
    <Wrapper>
      <Title >
        <LinkTitle href={href}>{title}</LinkTitle>
        { github ? <LinkGithub href={github}><GitHub size={20}/></LinkGithub> : null}
      </Title>
      <p>{description}</p>
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

const Title = styled.h2`
  display: flex;
  justify-content: space-between;
`;

const LinkTitle = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  color: ${COLORS.primary};

  &:hover {
    color: ${COLORS.gray};
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
  border: 1px solid transparent;
  border-radius: 100px;
  transition: 400ms;

  &:hover {
    color: ${COLORS.primary};
    border: 1px solid ${COLORS.primary};
    transform: rotate(0.25rad);
  }
`;