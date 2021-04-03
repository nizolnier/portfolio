import styled from "styled-components";

export const SocialContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    gap: 2em;
    flex-direction: ${(props) => {
        if (props.direction === "column") {
          return "column"
        } else if (props.direction === "row") {
          return "row";
        }
      }};
`
export const MediaIcon = styled.img`
    width: 12%;
`