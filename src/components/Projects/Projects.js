import React from 'react'
import ProjectCard from './ProjectCard'
import astromatch from '../../assets/astromatch.png'
import cookenu from '../../assets/cookenu.png'
import greenddit from '../../assets/greenddit.png'
import lama from '../../assets/lama.png'
import labegramBack from '../../assets/labegram-back.png'
import labegramFront from '../../assets/labegram-front.png'
import starX from '../../assets/starX.png'

const Projects = () => {
  const projects = [{
    title: "Astromatch",
    type: "Frontend",
    description: "Unindo mundos em prol do amor! Com o Astromatch, você pode encontrar personalidades de toda a galáxia, dar like ou não dar like e ver se dá um match!",
    github: "https://github.com/nizolnier/astromatch",
    website: "https://astromatch-nz.surge.sh/",
    image: {astromatch},
    tags: ["react", "axios", "styled-components", "material-ui"]
  },{
    title: "Cookenu",
    type: "Backend",
    description: "Cookenu é uma API REST para criar receitas e fazer amigos!",
    github: "https://github.com/nizolnier/cookenu",
    website: "https://documenter.getpostman.com/view/13242152/TzCJfVEu",
    image: {cookenu},
    tags: ["typescript", "nodejs", "mysql", "jest"]
  },
  {
    title: "Greenddit - Frontend",
    type: "Frontend",
    description: "The back page of the internet! Crie posts, comente e vote neles.",
    github: "https://github.com/nizolnier/greenddit",
    website: "https://greenddit-nz.surge.sh/",
    image: {greenddit},
    tags: ["react", "axios", "router-dom", "styled-components", "chakra-ui"]
  },
  {
    title: "Labegram",
    type: "Backend",
    description: "Pausa pra foto! O Labegram é um projeto fullstack para compartilhar fotos, aqui você encontra a parte do Backend.",
    github: "https://github.com/nizolnier/projeto-fullstack-backend",
    website: "https://documenter.getpostman.com/view/13242152/TWDXnc3m",
    image: {labegramBack},
    tags: ["typescript", "nodejs", "mysql", "jest"]
  },
  {
    title: "Labegram",
    type: "Frontend",
    description: "Pausa pra foto! O Labegram é um projeto fullstack para compartilhar fotos, aqui você encontra a parte do Frontend.",
    github: "https://github.com/nizolnier/projeto-fullstack-frontend",
    website: "https://labegram-nzz.surge.sh/",
    image: {labegramFront},
    tags: ["react", "axios", "router-dom", "styled-components", "chakra-ui"]
  },
  {
    title: "LAMA",
    type: "Backend",
    description: "LAMA é uma API REST para gerenciar o Labenu Music Awards, um festival com várias bandas para a formatura da minha turma! ",
    github: "https://github.com/nizolnier/projeto-fullstack-backend",
    website: "https://documenter.getpostman.com/view/13242152/TzCJgVJY",
    image: {lama},
    tags: ["typescript", "nodejs", "mysql", "jest"]
  },
  {
    title: "StarkX",
    type: "Frontend",
    description: "Sua próxima aventura está a apenas um planeta de distância! Inscreva-se para viagens divertidas na nova empresa do Stark. Se você é um administrador, você pode criar viagens pela galáxia e decidir quais são os melhores candidatos!",
    github: "https://github.com/nizolnier/starkX",
    website: "https://starkx-nz.surge.sh/",
    image: {starX},
    tags: ["react", "axios", "router-dom", "styled-components", "material-ui", "bootstrap"]
  }]

  return (
    <div>{projects.map((item) => {
      return <ProjectCard title={item.title} type={item.type} description={item.description} github={item.github} website={item.github} image={item.image} tags={item.tags} />
    })}</div>
  )
}

export default Projects;