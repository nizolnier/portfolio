import React from 'react'
import EducationCard from './EducationCard/EducationCard'
import { Heading } from "@chakra-ui/react"
import { EducationContainer, GridContainer } from './styles'

const Education = () => {
  const education = [{
    title: "Ensino Médio",
    institution: "Sesi Internacional de Curitiba",
    year: "2017 - 2019",
    description: "O colégio Sesi Internacional conta com uma metologia inovadora e ensino bilingue. A sala era dividida em mesas redondas com equipes de 5 a 6 pessoas do 1°, 2° e 3° ano junto. Cada trimestre, a sala e a equipe mudavam. O ensino era integral, das 08h até as 17h: na parte da manhã eram aulas regulares e na parte da tarde atividades extracurriculares"
  },
  {
    title: "Curso Web Fullstack",
    institution: "Labenu",
    year: "2020 - 2021",
    description: "A Labenu é uma startup que forma Desenvolvedores Web Full Stack prontos para o mercado de trabalho. São mais de 1000 horas de programação que faz com que seus alunos, ao final do curso, sejam profissionais completos tanto no Back-End quanto no Front-End."
  },
  {
    title: "Bacharel em Ciência da Computação",
    institution: "University of Central Florida",
    year: "2021 - presente",
    description: "Cursando Ciência da Computação online por enquanto pela University of Central Florida, a segunda maior universidade dos Estados Unidos"
  }]

  return (
    <EducationContainer>
      <Heading textAlign="center" as="h3" size="lg" p="1em" color="white">Educação</Heading>
      <GridContainer>
        {education.map((item) => {
          return <EducationCard title={item.title} institution={item.institution} year={item.year} description={item.description} />
        })}
      </GridContainer>
    </EducationContainer>
  )
}

export default Education;