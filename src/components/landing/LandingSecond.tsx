import React, { PropsWithChildren, useEffect } from "react";
import {
  LandingSecondDescP,
  LandingSecondSection,
} from "./LandingSecond.style";
import useIntersection from "@lib/hooks/common/useIntersection";

const LandingSecond = () => {
  return (
    <LandingSecond.Wrap>
      <LandingSecond.Description />
    </LandingSecond.Wrap>
  );
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return <LandingSecondSection>{children}</LandingSecondSection>;
};

const Description = () => {
  const [targetElement, setObserver, unsetObserver] = useIntersection({
    onWork: () => {
      if (targetElement.current) {
        targetElement.current.style.removeProperty("animation-play-state");

        unsetObserver();
      }
    },
    rootMargin: "-150px",
    isScrollObserver: true,
  });

  useEffect(() => {
    setObserver();
    return () => {
      unsetObserver();
    };
  }, []);

  return (
    <LandingSecondDescP
      ref={targetElement}
      style={{ opacity: 0, animationPlayState: "paused" }}
      onAnimationEnd={(e) => {
        e.currentTarget.style.removeProperty("opacity");
        // e.currentTarget.style.removeProperty
      }}
    >
      내 아이가 아파도 병원 한번 찾기 힘들었던 집사님들
      <br />
      이색 동물을 처음 키워보시는 초보 집사님들
      <br />
      다른 집사님들과 소통하며 정보를 공유하고 싶은 집사님들
      <br />
      이색 동물을 키워보시고 싶은 예비 집사님들까지
      <span className="Desc__Ext">
        이제껏 없었던 이색동물 플랫폼 <span className="Petbook">펫북</span> 에서
        <br />
        누구보다 특별한 내 아이와 함께한 이야기를 써 내려가 보세요.
      </span>
    </LandingSecondDescP>
  );
};

LandingSecond.Wrap = Wrap;
LandingSecond.Description = Description;

export default LandingSecond;
