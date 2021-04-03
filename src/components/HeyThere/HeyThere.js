import React from 'react'
import Social from '../Social/Social'
import hi from '../../assets/say-hi.svg'
import { Iam, MainContainer, MediaContainer, Myself, Presentation, Profession } from './styles'

const HeyThere = () => {
  return (
    <MainContainer>
      <MediaContainer>
        <Social direction="column" />
      </MediaContainer>
      <Presentation>
        <Iam>Eu sou <br></br><b>Nicole Zolnier</b><br></br><Profession>Desenvolvedora FullStack</Profession></Iam>
      </Presentation>
      <Myself src={hi} />
    </MainContainer>
  )
}

export default HeyThere;