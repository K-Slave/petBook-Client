import loadingState from "@atoms/common/loadingState";
import React from "react";
import { useRecoilValue } from "recoil";
import { LoaderDiv } from "./Loader.styled";

const Loader = () => {
  const loading = useRecoilValue(loadingState);
  const loaderDummy = ["", "", "", "", "", "", "", ""];

  return (
    <>
      {loading && (
        <LoaderDiv>
          <div className="loader-inner Loader">
            {loaderDummy.map((_, idx) => {
              return <div key={idx} />;
            })}
          </div>
        </LoaderDiv>
      )}
    </>
  );
};

export default React.memo(Loader);
