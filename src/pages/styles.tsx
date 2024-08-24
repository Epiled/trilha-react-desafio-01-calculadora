import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg);
  width: 100vw;
  height: 100vh;
`

export const CalculatorShape = styled.section`
  width: 300px;
  background: var(--lighter);
  background-image: radial-gradient(circle 500px at 100% 100%, 
  rgba(255,255,255,1) 12%, 
  rgba(106,0,255,1) 12.2%, rgba(106,0,255,1) 20%, 
  rgba(244,0,255,1) 20.2%, 
  rgba(244,0,255,1) 30%, 
  rgba(255,255,255,1) 30.2%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 15px;
  position: relative;

  box-shadow: 
    0 0 0 1px var(--color-main) inset, 
    0 0 0 2px rgba(255, 255, 255, 0.1) inset, 
    0 6px 0 0 var(--color-main), 0 6px 1px 1px rgba(0, 0, 0, 0.3), 
    0 8px 8px 1px rgba(0, 0, 0, 0.2);
`

export const DisplayStyled = styled.div`
  min-height: 75px;
  background-color: var(--color-complement);
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 15px;
  border: 2px solid #651150;
  position: relative;

  box-shadow: 5px 5px 3px 5px #45454571 inset;
`

export const ButtonsContainers = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  row-gap: 15px;
`

export const DisplayAcc = styled.span`
  position: absolute;
  bottom: 0;
  right: 5px;
  font-size: 36px;
  color: var(--lighter);
  text-shadow: 0px 2px 0 var(--color-gray-1);
  overflow: hidden;
`