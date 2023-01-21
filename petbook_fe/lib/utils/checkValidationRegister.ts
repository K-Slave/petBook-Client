export default function checkValidationRegister({
  type,
  value,
}: {
  type: string;
  value: string;
}) {
  switch (type) {
    case "password": {
      break;
    }
    default: {
      break;
    }
  }
}

export function passwordCheck(value: string) {
  // 비밀번호 input
  // Default 문구 “비밀번호를 입력해주세요”
  // 1-1. 비밀번호 유효성 가이드
  // 대소문자 모두 포함
  // 숫자 포함
  // 특수 문자 포함
  // 공백 X
  // 비밀번호 자리 8~20자

  // 1-2. 비밀번호 유효성 가이드에 위배될 시,
  // 대소문자 모두 포함 : “대소문자를 모두 포함하여야해요!” 출력
  // 숫자 포함 : “숫자를 포함하여야해요!” 출력
  // 특수 문자 포함 : “특수문자를 포함하여야해요!” 출력
  // 공백 X : “공백이 없어야해요!” 출력
  // 비밀번호 자리 8~20자 : “비밀번호는 자리 8~20자 사이여야해요!” 출력
  // # 해당 출력문은 비밀번호 input box 입력 완료(enter 키) 혹은 다른 컴포넌트 클릭 시 출력
  let msg = "";

  const eng = /(?=.?[A-Z])(?=.?[a-z])/;
  const number = /[0-9]/;
  const star = /(?=.?[#?!@$ %^&*-])/;
  const lenght = /^.{8,20}$/;
  const empty = /\s/g;

  let engCk = value.match(eng) === null ? false : (true as boolean);
  let numberCk = value.match(number) === null ? false : (true as boolean);
  let starCk = value.match(star) === null ? false : (true as boolean);
  let lengthCk = value.match(lenght) === null ? false : (true as boolean);
  let emptyCk = value.match(lenght) === null ? false : (true as boolean);

  if (engCk === false) {
    msg = "대소문자를 모두 포함하여야해요!";
  } else if (numberCk === false) {
    msg = "숫자를 포함하여야해요!";
  } else if (starCk === false) {
    msg = "특수문자를 포함하여야해요!";
  } else if (lengthCk === false) {
    msg = "비밀번호는 자리 8~20자 사이여야해요!";
  } else if (emptyCk === false) {
    msg = "공백이 없어야해요!";
  } else {
    msg = "";
  }

  return msg;
}
