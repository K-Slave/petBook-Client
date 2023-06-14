# petBook

특별한 동물을 위한 특별한 전자책 '펫북'

```
"eslint.workingDirectories": [

    { "directory": "./petbook-client/src", "changeProcessCWD": true }
  ],

```

# Common

- 줄임말 등은 대문자로 표기합니다. (API, SDK)

# Folder / File Naming Convetion

- 스타일 코드 : 컴포넌트명.style.tsx
- 파일명에 도메인 네임을 피하자
- 각 컴포넌트들이 집합 되는 Entry 컴포넌트는 도메인을 포함할수 밖에 없을것이다.
- 도메인이 들어갈거라면 확실하게 명시하고, 일회성 코드로 작성하기

# Component Pattern Convention

- Compound Pattern, Container Pattern, Atomic Pattern, Headless Pattern 자유롭게 운용
- Custom Hook <<< 코드 리뷰 !

# CSS Convetion

- NHN CSS 컨벤션 사용
  https://millfeel1298.tistory.com/m/274

- px to rem
  marketplace.visualstudio.com/items?itemName=cipchk.cssrem

- 동적으로 변경되는 css 는 styled 컴포넌트의 props 를 적극적으로 활용합니다.

- 단일 요소 태그 선택자 이슈 -> 사용하지 않기

# Class Naming Convetion

- 최대한 직관적, Pascal Case, 최소 두단어
  ex : .High, .Bold, .row, .username 금지

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
