import React from 'react'
import gmail from '../../assets/gmail.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import { SocialContainer } from './styles'
import SocialCard from './SocialCard/SocialCard'

const Social = (props) => {
  return (
    <SocialContainer direction={props.direction}>
      <SocialCard link="https://www.linkedin.com/in/nicole-zolnier/" img={linkedin} />
      <SocialCard link="mailto:nzolnier@gmail.com?subject=Oie!" img={gmail} />
      <SocialCard link="https://github.com/nizolnier" img={github} />
      <SocialCard link="https://www.instagram.com/nick.zolnier/" img={instagram} />
    </SocialContainer>
  )
}

export default Social;