import React, { MouseEventHandler, useState } from "react";

const usePWShowHide = () => {
  const [isPWHide, setPWHide] = useState(true);

  const onClickPW: MouseEventHandler = () => {
    setPWHide(!isPWHide);
  };

  return { isPWHide, onClickPW };
};

export default usePWShowHide;
