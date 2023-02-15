import styled from "styled-components";

export const MapDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const dd = "";

export const MapInfoWindowDiv = styled.div`
  /* cursor: default;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(118, 129, 168);
  z-index: 0;
  display: block; */
  position: absolute;
  z-index: 0;
  white-space: nowrap;
  margin: -42px 0px 0px -72px;
  left: 388px;
  top: 158px;

  div {
    position: relative;
    bottom: 85px;
    border-radius: 6px;
    border: 1px solid #ccc;
    border-bottom: 2px solid #ddd;
    float: left;
  }

  /* &:first-child {
    position: absolute;
    width: 11px;
    height: 25px;
    background: url(https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/triangle.png)
      0% 0% / 11px 9px no-repeat;
  } */
`;
