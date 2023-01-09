import loadingState from "@atoms/common/loadingState";
import React from "react";
import { useRecoilValue } from "recoil";

const Loader = () => {
  const loading = useRecoilValue(loadingState);
  const loaderDummy = ["", "", "", "", "", "", "", ""];

  return (
    <>
      {loading && (
        <div className="Loader__Layer">
          <div className="loader-inner Loader">
            {loaderDummy.map(() => {
              return <div />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Loader);
