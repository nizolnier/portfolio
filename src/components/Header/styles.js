import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    background-color: #f8f6f0;
    align-items: center;
    padding: 0.5em 0;
`
export const Logo = styled.img`
    width: 20%;
    display: flex;
    align-self: center;
    padding-left: 1em;
`
export const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 2em;
    padding-right: 2em;
`

export const MenuItem = styled.p`
    color: #BF1F87;
    cursor: pointer;
    font-size: 1.2rem;
    &:hover {
        color: #06aba3;
    }
`