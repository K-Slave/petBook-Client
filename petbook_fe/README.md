# Petbook Frontend

## Work Guide

1. Data Fetching State 라이브러리는 React-Query 를 이용합니다.

> - 쿼리 Key 값은 자유롭게 설정하되, 캐싱된 데이터를 재사용할 경우 고정, 그렇지 않아야 할 경우 백틱으로 감싸고 ( ${} )
> - 동적인 Key 를 사용하면 됩니다.

2. Client Global State 라이브러리는 Recoil 을 이용합니다.

> - 전역 상태 관리및 소규모 컴포넌트간 상태 공유에 쪼개어 사용하여도 좋습니다.
> - Component Atoms, System Atoms 로 폴더를 나누어 둘것 이며, System Atom 은 어디서든지 공유될 상태를 의미 합니다.
> - Context API 를 도입할것인지도 검토 해보았으나, 보일러 플레이트 코드가 너무 많이 늘어나며 성능 이슈가 심각합니다.
> - Compoent Atoms 는 Data State 와 Interaction State 로 나누어 한파일에서 내보냅니다.
> - ++++ 상태를 공유하는 Component 끼리는 모두 상태변화가 일어나므로 여러 컴포넌트에서 따로 상태를 사용해야 한다면 useState 와 props 로 구현할수 밖에없습니다.

3. Container - Component 구조는 꼭 필요하다고 생각되어지는 경우에만 사용합니다.

> - 저도 회사 프로덕트에 컨테이너 구조를 이용하고 있지만, 현재는 그다지 권장되지 않는 Design Pattern 이라고 합니다.
> - 이에 대해서는 저도 좀더 조사를 해보도록 하겠습니다. 다른분들도 다른 디자인 패턴에 대해 조사해보시면 좋을것 같습니다.

4. Component 단위는 다루는 데이터를 기준으로 가급적 한가지 일을 하도록 작성합니다.

5. Component 의 상태 데이터 처리와 인터렉션 처리 에 대한 코드는 모두 모듈화 합니다.

> - 상태를 다룰경우, Custom Hook, 그렇지 않을 경우 정적인 Module Function 으로 작성하면 됩니다.
> - 코드 량이 짧을 경우 또는 절대 변하지 않을 기능 ( ex : 단순한 닫기, 모두삭제 등의 action ) 등은 굳이 모듈화하지 않습니다.
> - 4번 항목과 같은 맥락으로, Custom Hook 이나 Module Function 이 무슨 역할을 하는지 서로 정확히 이해가 되려면
> - 한 함수가 하나의 일을 하도록 쪼개어 분리하여야 합니다. ( 함수형 프로그래밍 에서 강조되는 내용입니다 )

> - 아래의 코드는 제가 전에 회사에서 작업 했던 토스트 메시지 컴포넌트 입니다.
> - 그다지 깔끔한 코드라고는 말씀 드리기는 어렵지만, Touch Event Handler 를 따로 정적인 모듈 함수로 만들고,
> - 토스트 메시지의 라이프 사이클 인터렉션과 토스트 메시지의 데이터를 출력하는 Custom Hook 으로 컴포넌트를 작성하였습니다.
> - 이런경우에는 Custom Hook 이 하는일이 너무 많아서, 기능이 변경될 경우 Custom Hook 하나를 교체하는것조차 쉽지 않을것 같습니다.
> - 저는 명시적으로 어떤 구조인가 보기 쉽도록 하는 코드에 너무 치우쳐 있어 이런 식의 코드가 자주 나오는것 같습니다.

ex :

```

const ToastMessage = () => {
  const toastRef = useRef<HTMLDivElement>(null);

  const $html = useMemo(() => document.body.parentElement, []);
  const $root = useMemo(
    () => document.body.querySelector<HTMLDivElement>("#root"),
    []
  );
  const $Toast__Message = useMemo(() => toastRef.current, [toastRef.current]);

  const [StyleRender, toastMonitor, aosActive, toastSet] = useToastMessage(
    $html,
    $root,
    $Toast__Message
  );

  const { onTouchStart, onTouchMove, onTouchEnd } = toastEventHandler({
        $html: $html,
        $root: $root,
        $toast: $Toast__Message,
        toastSet: toastSet,
      });

  return (
    <ToastMessageBox
      className="Toast__Message__Box"
      style={StyleRender.toastLayout()}
      ref={toastRef}
      data-aos={aosActive ? "" : "fade-up"}
      data-aos-anchor-placement={"top-center"}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <span className="Toast__Message__Text1">
        {toastMonitor.toastKey === "last_page" && (
          <img className="Toast__Message__Img" src={LASTPAGE} alt=""></img>
        )}
        {toastMonitor.toastMessage1}
      </span>
      {toastMonitor.toastMessage2 && (
        <span className="Toast__Message__Text2">
          {toastMonitor.toastLocation && (
            <span className="Toast__Message__toastLocation">
              {toastMonitor.toastLocation}
            </span>
          )}
          {toastMonitor.toastMessage2}
        </span>
      )}
    </ToastMessageBox>
  );
};

export default ToastMessage;

```

6. CSS Convetion

> - 클래스 명은 BEM 네이밍을 사용합니다. ( 스타일드 컴포넌트는 브라우저에서 스타일 시트 매핑이 되지 않기 때문에 서로 작업하려면 BEM 네이밍이 필요할것 같습니다. )
> - ex : `Toast__Message__Box`
> - 시맨틱 마크업을 준수합니다.
> - 참고 레퍼런스
> - https://developers.google.com/search/docs/advanced/guidelines/links-crawlable?hl=ko
> - https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=ko <- ctrl + f '시맨틱'
> - https://ko.wikipedia.org/wiki/%EA%B2%80%EC%83%89_%EC%97%94%EC%A7%84_%EC%B5%9C%EC%A0%81%ED%99%94
> - https://developer.mozilla.org/ko/docs/Glossary/Semantics
> - https://developer.mozilla.org/ko/docs/Glossary/SEO
> - 생각보다 시맨틱 마크업은 SEO 에서 중요한 요소입니다.
> - 특히, 잘못된 시맨틱 마크업 사용 ( 문서내에 hn 태그가 없음, ul 자식으로 li 가 나오지 않음,tr 자식으로 td 가 나오지 않음, a 태그 미사용) 이 꽤 감점이 큽니다.
> - 코딩 하다보면 이를 놓치기 쉬워지니, 작업해두고 나중에 브라우저 개발자 도구를 보며 디버깅하는것이 좋습니다.

> - 스타일드 컴포넌트의 props 이용은 필요하면 사용하되, 복잡한 조건부 스타일링은 하지 않습니다.
> - ( 비슷한 컴포넌트여서 props 를 통해 간략화 한다던지,,,)
> - 또한 props 가 변경될때마다 내부적으로 강제 리렌더링이 되며 css 를 전부 재평가하며 클래스명또한 새로 부여합니다. (성능이슈)
> - 이는 상태에 의해 컴포넌트가 리렌더링 될때도 똑같은 작업이 반복되어집니다.
> - 정적인 스타일드 컴포넌트 전용 props 를 전달받고, 복잡한 스타일링이 아니라면 괜찮습니다.
> - 비슷한 컴포넌트 끼리 스타일을 공유하고 간단한 스타일을 변경할 것이라면 style overriding 을 추천드립니다.

7. 부분적으로 재사용 가능해 보이는 컴포넌트들은 제가 Custom Hook 과 Compound Component ( Headless Pattern ) 으로 작성하겠습니다.

> - 디자인이 거의 같은데 기능만 변하게 될경우는 Custom Hook 만 교체하거나 수정하면 되도록,
> - 사용하는 기능이 거의 같은데 디자인이 변하게 될경우는 Compound Component 로 디자인이나 인터렉션, 데이터를
> - 수정하여 외부에서 주입가능한 구조로 작업하도록 하겠습니다.
> - 이 Compound Component 는 제가 피그마 보고 꾸준히 작업하여 올리도록 하겠습니다.
> - 저희 나름의 재사용 컴포넌트 Design System 을 구축해보고 싶어 시작하게 되었고,
> - 같이 작업하는 분들이 쉽게 라이브러리처럼 가져다가 쓸수 있도록 작업하도록 하겠습니다.
> - 제가 작업 될때마다 사용법과 함께 어떤 컴포넌트에 대해 작업된 코드인지 공지 해드리면
> - 그 부분은 일단 제외하고 작업해두시면 될것 같습니다.

### 컴포넌트 디자인 패턴 과 기준에 대해서는 개발 진행해가면서 좀더 구체적인 기준을 세워 나가도록 하겠습니다.
