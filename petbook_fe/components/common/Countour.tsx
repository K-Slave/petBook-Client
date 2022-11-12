import styled, { css } from "styled-components";

const CountourStyle = css`
  display: inline;

  width: 1px;
  height: 10px;

  margin: 0 5px 0 6px;

  background-color: ${(props: any) =>
    props.bgColor ? props.bgColor : "#c4c4c4"} !important;
`;

const CountourBox = styled.div`
  ${CountourStyle}
`;

export default function Countour(props: { bgColor?: string }) {
  return <CountourBox className="Countour" {...props} />;
}

Countour.defaultProps = {
  bgColor: "",
};
