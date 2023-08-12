import { useRouter } from "next/router";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import styled from "styled-components";
import { cookieRequest } from "@lib/API/petBookAPI";
import { cookieKeyName } from "@lib/globalConst";

const OwnerAuthorizationPopupDiv = styled.div`
  position: fixed;
  top: 3.125rem;
  z-index: 100;

  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 10.625rem auto auto;

  /* grid-auto-flow: row; */
  /* grid-auto-columns: auto auto 3.125rem; */

  width: 22.5rem;
  height: 37.5rem;

  padding: 1.875rem;

  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  background-color: #fff;

  animation: 0.5s slideUp ease-in-out 1;

  .Owner__Popup__Title {
    text-align: center;
  }

  .Owner__Popup__Form {
  }

  .Owner__Popup__Label {
    display: block;
    justify-self: center;
    padding: 1.25rem 0;

    text-align: center;
    font-weight: bold;
  }

  .Owner__Popup__Input {
    display: flex;
    align-items: center;

    width: 100%;
    height: 3.125rem;

    padding: 0.625rem;

    border: 0.1px solid #bbb;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.3);
    background-color: #fff;

    font-size: 1.25rem;
  }

  .Owner__Popup__Submit {
    float: right;

    margin-top: 0.9375rem;
    padding: 10px;

    font-size: 0.9375rem;
    font-weight: bold;
    color: var(--blue);
  }

  .Owner__Popup__Desc {
    justify-self: center;
    align-self: flex-end;
    font-weight: 500;

    padding-bottom: 1.875rem;
  }

  .Owner__Popup__Guide {
    display: block;

    margin-top: 0.625rem;
    font-weight: normal;
    color: var(--blue);
  }
`;

const OwnerAuthorizationPopup = () => {
  const router = useRouter();

  const [value, setValue] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    if (value === process.env.NEXT_PUBLIC_OWNER) {
      alert("인증되었습니다");

      await cookieRequest.setCookie({
        body: {
          key: cookieKeyName.owner,
          value: process.env.NEXT_PUBLIC_OWNER,
          isSave: true,
        },
      });

      router.push("/").then(() => router.reload());
    } else {
      alert("인증키가 올바르지 않습니다");
      setValue("");
    }
  };

  return (
    <OwnerAuthorizationPopupDiv
      style={{ opacity: 0 }}
      onAnimationEnd={(e) => {
        e.currentTarget.style.removeProperty("opacity");
        const $Button = document.body.querySelector<HTMLButtonElement>(
          ".Welcome__Request__Button"
        );
        if ($Button) {
          $Button.style.removeProperty("animation-play-state");
        }
      }}
    >
      <h1 className="Owner__Popup__Title">방문자 인증하기</h1>
      <form className="Owner__Popup__Form" onSubmit={onSubmit}>
        <label className="Owner__Popup__Label">
          전달 받은 인증키를 입력해주세요
        </label>
        <input
          className="Owner__Popup__Input"
          onChange={onChange}
          value={value}
        />
        <button className="Owner__Popup__Submit" type="submit">
          인증하기
        </button>
      </form>

      <p className="Owner__Popup__Desc">
        인증 후에 컨텐츠를 확인하실수 있어요.
        <br />
        한번 인증하고 나면 브라우저에 저장되어
        <br />
        다음에는 인증키를 입력하지 않아도 되요.
        <br />
        <button
          className="Owner__Popup__Guide"
          onClick={() => {
            router.back();
          }}
        >
          이 창을 닫으시려면 여기 또는 뒤로가기를 눌러주세요
        </button>
      </p>
    </OwnerAuthorizationPopupDiv>
  );
};

export default OwnerAuthorizationPopup;
