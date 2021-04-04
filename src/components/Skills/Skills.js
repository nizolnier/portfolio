import React from 'react'
import { Heading, Text } from "@chakra-ui/react"
import { FlexContainer, SkillsContainer } from './styles';

const Skills = () => {
  return (
    <SkillsContainer>
      <Heading textAlign="center" as="h3" size="lg" p="1em">O que eu faço?</Heading>
      <FlexContainer>
        <div>
          <Heading textAlign="center" as="h1" size="2xl" p="1em">Frontend</Heading>
          <Text fontSize="md" pr="8em" pl="8em">Desenvolvimento de aplicações web utilizando HTML, CSS, JavaScript e React.
          Criação de sites responsivos seguindo princípio de Mobile First.</Text>
        </div>
        <div>
          <Heading textAlign="center" as="h1" size="2xl" p="1em">Backend</Heading>
          <Text fontSize="md" pr="8em" pl="8em">Aplicações utilizando NodeJS, Typescript e MySQL. 
          Criação de API´s para comunicação com front-end seguindo princípio de Clean Code.</Text>
        </div>
      </FlexContainer>
    </SkillsContainer>
  )
}

export default Skills;