import { useEffect, useState } from "react";

/**
 * @function useClientReady
 * width:0, height:0 인 컴포넌트를 렌더링 시키다 발견한 이슈가 있어서 만든 훅입니다
 * 서버에서 렌더링하여 만들어질때 해당 DOM 이 차지할 공간이 없음에도, CLS 가 발생하는 문제가 있습니다
 * 이 hook 을 통해 컴포넌트가 마운트 이후 DOM 을 렌더링 시키거나
 * 컴포넌트가 마운트 되었는지 확인하는 hook 으로 사용가능 합니다
 * 어떻게 보면 ready 값이 true 일때 컴포넌트의 렌더링 주도권이 클라이언트로 넘어왔음을 의미합니다
 * @returns { ready } 컴포넌트가 마운트 되었음을 플래그로 나타냅니다
 */
const useClientReady = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return { ready };
};

export default useClientReady;
