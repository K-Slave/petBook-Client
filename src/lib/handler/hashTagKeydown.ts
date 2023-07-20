// hashTag keyDown 이벤트 핸들러
// "Enter" 일때만 인자로 받은 setter 함수를 실행시키고
// 이외에는 result 객체를 상태 형태로 리턴해요
const hashTagKeydown = (
  keyDownEvent: React.KeyboardEvent<HTMLInputElement>,
  setter: (textValue: string) => void,
  errorSetter?: React.Dispatch<React.SetStateAction<boolean>>
): { done: boolean; info: string } => {
  if (keyDownEvent.nativeEvent.isComposing) {
    return { done: false, info: "composing" };
  }

  // TODO : 비속어 필터, 특수문자 필터, SQLinjection, XSS 등 추가 필터링 해야함

  switch (keyDownEvent.key) {
    case "Enter": {
      setter(keyDownEvent.currentTarget.value);
      return { done: true, info: keyDownEvent.key };
    }

    default:
      return { done: false, info: keyDownEvent.key };
  }
};

export default hashTagKeydown;
