import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const NavBar = styled.nav`
  height: 70px;
  background-color: #cbd5e1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const LogoImage = styled.img`
  width: 150px;
  margin-left: 103px;
`
export const SelectContainer = styled.div`
  padding: 56px;
`
export const Selector = styled.select`
  width: 450px;
  height: 40px;
  padding: 7px;
  border-radius: 8px;
  outline: none;
  margin-left: 45px;
`
export const CardContainer = styled.div`
  padding: 25px 0px;
`
export const CardList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const Cards = styled.li`
  width: 180px;
  display: flex;
  flex-direction: column;
  margin: 0px 6px;
  border-radius: 25px;
`
export const Image = styled.img`
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`
export const Content = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #475569;
  text-align: center;
`
export const Loading = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Failure = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const FailImage = styled.img`
  width: 350px;
`

export const FailHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #475569;
`

export const FailDesc = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #475569;
`

export const FailBtn = styled.button`
  border: none;
  background-color: #328af2;
  padding: 8px 19px;
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #ffffff;
  border-radius: 9px;
`
