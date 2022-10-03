import styled from "styled-components";

export const Styled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  input {
    width: 0px;
    height: 0px;
    display: none;
  }
  .checkbox-container {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #777;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  .label {
    margin-left: 10px;
    font-size: 14px;
  }
  .check-icon {
    font-size: 20px;
  }
`;
