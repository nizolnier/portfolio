import React from 'react'
import cv from '../../assets/curriculo.pdf'
import { Line, LineSkill, MainContainer, PositionContainer, SkillsContainer } from './styles'
import { Button, Heading, Text } from "@chakra-ui/react"

const AboutMe = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "NodeJS", "MySQL"]
  return (
    <MainContainer>
      <PositionContainer>
        <div>
          <Heading as="h1" size="2xl" pb="0.5em">Sobre Mim</Heading>
          <Text fontSize="md" pr="5em">Oi! Meu nome é Nicole Zolnier Sousa do Nascimento, tenho 19 anos e sou de Curitiba. Estudei em equipes meu ensino médio inteiro, o que me possibilitou viver todas as situações possíveis. Estou terminando o curso de Web Full Stack da Labenu, onde passei mais de 1000 horas programando tanto em Frontend quanto Backend. Recentemente iniciei minha graduação em Ciência da Computação pela University of Central Florida e comecei a ter aulas de francês!</Text>
        </div>
        <SkillsContainer>
          {skills.map((item) => {
            return <LineSkill><Line />{item}</LineSkill>
          })}
        </SkillsContainer>
        <Button colorScheme="pink" variant="solid">
          <a href={cv} download="Curriculo_Nicole_Zolnier.pdf">CV em PDF</a>
        </Button>
      </PositionContainer>
    </MainContainer>
  )
}

export default AboutMe;