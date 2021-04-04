import React from 'react'
import { MediaIcon } from './styles';

const SocialCard = (props) => {
  return (
    <a href={props.link} rel="noreferrer" target="_blank"><MediaIcon src={props.img} /></a>
  )
}

export default SocialCard;