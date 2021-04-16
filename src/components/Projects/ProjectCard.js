import React from 'react'

const ProjectCard = ({title, type, description, github, website, image}) => {
  return (
    <div>
      <h1>{title} - {type}</h1>
      <p>{description}</p>
      <a href={github}>GitHub</a>
      <a href={website}>Website</a>
      <img src={image} alt="screenshot do projeto" />
    </div>
  )
}

export default ProjectCard;