import React from 'react'
import { Rectangle } from './styles'
import { Heading, Text } from "@chakra-ui/react"

const EducationCard = ({title, institution, year, description}) => {
  return (
    <Rectangle>
      <Heading textAlign="left" as="h3" size="md">{title} - {institution}</Heading>
      <Text fontSize="xs" pb="0.4em" pt="0.4em">{year}</Text>
      <Text fontSize="md">{description}</Text>
    </Rectangle>
  )
}

export default EducationCard;