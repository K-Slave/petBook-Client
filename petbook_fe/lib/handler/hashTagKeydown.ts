// hashTag keyDown 이벤트 핸들러
export default function hashTagKeydown(
  keyDownEvent: React.KeyboardEvent<HTMLInputElement>,
  setter: (e: React.KeyboardEvent<HTMLInputElement>) => void
): { done: boolean; info: string } {
  if (keyDownEvent.nativeEvent.isComposing) {
    return { done: false, info: "composing" };
  }

  // TODO : 비속어 필터, 특수문자 필터, SQLinjection, XSS 등 추가 필터링 해야함

  switch (keyDownEvent.key) {
    case "Enter": {
      setter(keyDownEvent);
      return { done: true, info: "enter" };
    }

    // space 는 거르기로 백엔드에서 요청 (보안)
    case "Space": {
      return { done: true, info: "space" };
    }

    default:
      return { done: false, info: "ignore" };
  }
}
