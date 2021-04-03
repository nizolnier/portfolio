import React from 'react'
import gmail from '../../assets/gmail.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import { MediaIcon, SocialContainer } from './styles'

const Social = (props) => {
  const sendMail = () => {
    const mailto = "mailto:nzolnier@gmail.com?subject=Oie!"
    window.location.href = mailto
  }

  return (
    <SocialContainer direction={props.direction}>
      <a href="https://www.linkedin.com/in/nicole-zolnier/" target="_blank"><MediaIcon src={linkedin} /></a>
      <a onClick={sendMail}><MediaIcon  src={gmail} onClick={sendMail}/></a>
      <a href="https://github.com/nizolnier" target="_blank"><MediaIcon src={github} /></a>
      <a href="https://www.instagram.com/nick.zolnier/" target="_blank"><MediaIcon src={instagram} /></a>  
    </SocialContainer>
  )
}

export default Social;