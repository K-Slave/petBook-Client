# Common

- 조만간 eslint 랑 tsconfig 을 적용하겠습니다.
- 줄임말 등은 대문자로 표기합니다. (API, SDK)

# Folder / File Naming Convetion

- pages

> 띄어쓰기없는 lowercase 로 작성합니다.

1. 페이지 컴포넌트 및 그와 관련된 코드를 모아놓습니다.
2. 폴더 구조에따른 path - page 매칭을 사용합니다.
3. 각 path 의 메인 개념으로 index.tsx 페이지 컴포넌트를 사용합니다.
4. Page Component 가 아닌경우 앞에 언더바 (\_) 를 붙입니다.
5. path 로 직접 id 값을 받는경우 [articleId] 형태로 붙여줍니다.

- pages/API

> camelCase 로 작성합니다.

1. API 인터페이스 파일명은 서버에서 정하는 API 명 + Request 라는 이름을 사용합니다.
2. index.ts 에서 각 Class 들을 생성하고 export 합니다.
3. 현재는 기존 파이썬 서버 코드가 남아있으나 서버쪽 마이그레이션이 끝나면 정리할게요.
4. 나중에 너무 API 가 많아지면 pages 폴더와 동일하게 폴더를 나누겠습니다.

- lib

> 함수들이 들어가있는 폴더입니다.

- lib/utils : 전역에서 여러번 처리 되는 알고리즘등을 처리하는 유틸함수가 들어갑니다.
- lib/hooks : 커스텀 훅 들이 들어가는 폴더, 나중에 기능별로 폴더 다시 나뉠 예정
- lib/resource : 각종 외부에서 가져오는 img 소스경로들을 모아놓을 예정
- lib/handler : 이벤트 핸들러 들이 들어갑니다.
- lib/modules : 위의 경우에 포함되지 않는 경우 여기로 들어갑니다.

- atoms

> recoil atom 들이 들어갑니다.

- atoms/pageAtoms : 페이지가 나눈 기준으로 폴더를 나눠뒀습니다.
- atoms/systemAtoms : 페이지가 기준이 아닌, 더 큰 범위의 전역 상태를 다루는 아톰들이 들어갑니다.

# Component Pattern Convention

- Container Pattern 을 사용합니다.

> DOM 을 그리지 않고 데이터만 취급해서 하위 컴포넌트에게 전달하는 컴포넌트는 모두 \
> 컨테이너 컴포넌트 입니다. \
> 굳이 모든 컴포넌트가 데이터 처리를 하면서 DOM 을 그릴 필요는 없고 \
> 복잡한 데이터 처리를 해준후 UI 컴포넌트에게 전달합니다. \
> 이 패턴은 인터렉션에 의해 UI 의 상태변화가 잦을때 유리합니다.

- Compound Pattern 도 사용합니다.

> 사용하는 경우는 상태가 복잡하거나, 잦은 상태 변화가 있어서 \
> 불필요한 리렌더링을 최소화 하고자 컴포넌트가 작게작게 찢어지는 경우가 생기는데 \
> 이때 모두 파일로 나누게 되면 가독성이 좋지 못합니다. \
> 그때 사용해주시면 되겠습니다. 생각보다 가독성이 많이 좋아집니다.

- Custom Hook 으로 컴포넌트 내의 로직을 모듈화 합니다.

- Hook 이 필요없는 경우도 함수로 모듈화 합니다.

```
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  ...
  return (
    <>
      <HeaderBox className="Header" onMouseDown={onHeaderClick}>
        <div className="wrapper">
          <Header.Title />      <<<
          <SearchQueryInput focus={focus} setFocus={setFocus} />
          <HeaderAuthDiv className="Auth">
            <Header.Auth open={open} setOpen={setOpen} />      <<<
            <Header.Personal open={open} />     <<<
          </HeaderAuthDiv>
        </div>
        <HeaderSpacer />
      </HeaderBox>
    </>
  );
};


const Title = React.memo(() => {
  return (
    <TitleDiv className="Title">
      ...
    </TitleDiv>
  );
});

const Auth = React.memo(({ open, setOpen }: AuthProps) => {
  const user = useRecoilValue(userState);

  return (
    <>
      {user.loggedUser ? (
        <>
          {user.loggedUser.name && (
            ...
          )}
        </>
      ) : (
        <>
          <a href="/user/?mode=login">로그인</a>
          <a href="/user/?mode=intro">회원가입</a>
        </>
      )}
    </>
  );
});

type PersonalProps = {
  open: boolean;
};

const Personal = React.memo(({ open }: PersonalProps) => {
  return (
    <>
      {open && (
        <div className="auth_modal">
          ...
        </div>
      )}
    </>
  );
});

Header.Auth = Auth;
Header.Personal = Personal;
Header.Title = Title;

export default React.memo(Header);
```

# JS Convention

- Component 는 Pascal Case / ()=>{} 으로 작성합니다.
- 커스텀 훅은 camelCase / function 으로 작성합니다.
- 일반 모듈 함수는 camelCase / function 으로 작성합니다.
- 인자로 받는 함수는 익명함수 / ()=>{} 으로 작성합니다.

```
window.addEventListner('load', ()=>{}, { once: true })
exampleArray.map(() => {})
```

- env, url 소스 === UPPER_SNAKE_CASE
- 변수명은 camelCase 를 사용하고 최대한 직관적이게 작성합니다.
- 변수명 만으로도 어떠한 값이 들어가 있을건지, 어떤 타입일지 드러날수록 클린코드 입니다.
- 배열 메서드 사용시 정말 정해줄 이름이 없다면, item 이나 elem 을 사용합니다.
- 명사위주로 작성합니다.

```
나쁜 예

const list = [
    "질문과 답변",
    "잡담",
    "나눔활동",
    "정보공유",
    "실종신고",
    "기타",
  ];

좋은 예

const categoryKeywords = [
    "질문과 답변",
    "잡담",
    "나눔활동",
    "정보공유",
    "실종신고",
    "기타",
  ];

나쁜 예
{categoryKeywords.map((item, idx) => {...})}

좋은 예
{categoryKeywords.map((keyword, idx) => {...})}
```

- 함수명또한 앞에 CRUD 형식을 붙여 사용하고, '어떤 값을 어떻게 한다' 라는 의미가 포함될수록 클린코드입니다.
- 동사가 포함되야합니다.

```
async function getUserName(name: string) {
  ...
  return result
}

function clearObject(obj: object) {
  ...
  return result
}

function useOverlay () {}
```

- API 와 관련된 네이밍은 서버에서 사용하는 네이밍을 최대한 그대로 사용합니다.

```
// 이 경우에는 서버가 새로 작업중이라 변경될수 있습니다.
?page=1 (x) currentPage (o)
```

# CSS Convetion

- NHN CSS 컨벤션 사용
  https://millfeel1298.tistory.com/m/274
- 동적으로 변경되는 css 는 styled 컴포넌트의 props 를 적극적으로 활용합니다.
- 잦은 상태 변화나 props 의 변화가 일어나는 컴포넌트에서는 사용을 지양합니다.

> useState, useRecoilState, useRecoilValue, props 가 수시로 변할때 \
> styled props 를 이용하게 되면 위 상태들이 변할때마다 강제로 리렌더링되고 클래스명도 변합니다.

### CSS 작성순서

> 예제

```
span {
  position : releative;
  top: 2px;
  left: 0;
  z-index: 10;
  overflow-x : hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 200px;
  max-width: 300px;
  height: 150px;

  margin: 0 auto;
  padding: 5px;

  border: 1px solid #000;
  border-radius: 5px;

  background-color : #f1f1f1;

  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  letter-spacing: 0.0135rem;
  font-size : 1.5rem;
  color: #ccc;

  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}
```

### CSS 네이밍 컨벤션

- id : Pascal Case

```
<div id="NaverMapsScript" />
<div id="KakaoSDK" />
<div id="Content" />
<div id="ContentWrap" />
```

- class : Pascal_lower_Snake_Case or BEM

```
<div className="Submit_Button" />
<div className="Article_Wrap" />
```

- styled : 컴포넌트명 + 태그명

```
const BannerH1 = styled.h1`
  ...
`

const Banner = () => {
  return (
    <BannerH1>
      ...
    </BannerH1>
  )
}

컴포넌트명에 태그명이 포함된경우
상황에 맞게 Box, Wrap, Styled 등을 사용합니다.

const SubmitButtonBox = styled.button`
  ...
`

const SubmitButton = () => {
  return (
    <SubmitButtonBox>
      ...
    </SubmitButtonBox>
  )
}
```

# 타입 컨벤션

### interface vs type vs inline

- inline : 함수의 인자만 (props 아님)
- 컴포넌트의 Props : interface (객체일땐 interface)
- 다른경우 : type

# 컴포넌트 나누는 기준

- 재사용성을 늘려서 라이브러리 처럼쓰자 !!!!! (극찬성)
- 다이어그램 참조

# git convention

- 기능 또는 페이지 완성 분기점 마다 개인별 push 및 merge
- PR 은 Conflict Check 용 으로 Merge 전에 한번 올려보시고, Conflict 가 너무 많아 보이면 PR 로 남겨두세욥
