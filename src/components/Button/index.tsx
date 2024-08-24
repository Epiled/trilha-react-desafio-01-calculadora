import styled from "styled-components";

export const Button = styled.button`
  aspect-ratio: 1 / 1;
  font-size: 32px;
  border-radius: 5px;
  position: relative;
  top: -6px;
  border: 0;
  background: var(--color-complement-2);
  color: var(--lighter);
  text-shadow: 0px 2px 0 var(--color-gray-1);
  transition: all 40ms linear;

  box-shadow: 
    0 0 0 1px var(--color-main) inset, 
    0 0 0 2px rgba(255, 255, 255, 0.1) inset, 
    0 6px 0 0 var(--color-main), 0 6px 1px 1px rgba(0, 0, 0, 0.3), 
    0 8px 8px 1px rgba(0, 0, 0, 0.2);

  &:active {
    top: 0;
    box-shadow:
      0 0 0 1px var(--color-main) inset, 
      0 0 0 2px rgba(255, 255, 255, 0.15) inset, 
      0 1px 1px 0px rgba(0, 0, 0, .3), 
      0 1px 3px 1px rgba(0, 0, 0, .2);
  }
`

export const ButtonReset = styled(Button)`
  position: absolute;
  max-width: 100px;
  max-height: 50px;
  font-size: 16px;
  aspect-ratio: initial;
  top: -60px;
  right: 20px;
  padding: 5px 0;
  color: var(--color-main);
  background: var(--lighter);
  font-weight: bold;
  text-shadow: none;

  &:active {
    top: -55px;
    box-shadow:
      0 0 0 1px var(--color-main) inset, 
      0 0 0 2px rgba(255, 255, 255, 0.15) inset, 
      0 1px 1px 0px rgba(0, 0, 0, .3), 
      0 1px 3px 1px rgba(0, 0, 0, .2);
  }
`