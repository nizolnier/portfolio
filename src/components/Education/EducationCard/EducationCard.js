import React from 'react'
import { Rectangle } from './styles'
// import { Heading, Text } from "@chakra-ui/react"

const EducationCard = ({title, institution, year, description}) => {
  return (
    <Rectangle>
      <h1>{title}</h1>
      <p>{institution} - {year}</p>
      <p>{description}</p>
    </Rectangle>
  )
}

export default EducationCard;