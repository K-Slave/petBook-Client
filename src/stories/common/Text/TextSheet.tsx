import React from "react";
import {
  TextSheetBodyMedium14Span,
  TextSheetBodySmall14Span,
  TextSheetDiv,
  TextSheetH3Bold22Span,
  TextSheetH4Bold18Span,
} from "./TextSheet.style";

const TextSheet = () => {
  return (
    <TextSheetDiv>
      <TextSheetH3Bold22Span>TextH3Bold22</TextSheetH3Bold22Span>
      <TextSheetH4Bold18Span>TextH4Bold18</TextSheetH4Bold18Span>
      <TextSheetBodyMedium14Span>TextBodyMedium14</TextSheetBodyMedium14Span>
      <TextSheetBodySmall14Span>TextBodySmall14</TextSheetBodySmall14Span>
    </TextSheetDiv>
  );
};

export default TextSheet;
