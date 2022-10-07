import styled from "styled-components";

export const Styled = styled.div`
  width: 700px;
  margin: auto;
  .tab-title {
    background-color: transparent;
    outline: none;
    border: none;
    height: 40px;
    padding: 0 20px;
  }
  .tab-title.active {
    background-color: white;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    border-top: 2px solid blue;
    border-bottom: none;
  }
  .tabContent {
    background-color: white;
    min-height: 300px;
    padding: 20px;
    border: 1px solid gray;
    border-top: none;
  }
`;
