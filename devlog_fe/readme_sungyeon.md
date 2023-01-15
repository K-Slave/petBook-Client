# petBook Devlog

### Developer : steven-yn (윤성연)

- 22.06.05 개발 기록 및 진행 상황 공유

> 1. 직접 개발한 localhost 에서만 사용할수 있는 localConsole 라이브러리 추가 \
>    자세한 사용법은 lib/localConsole.ts 에 있습니다

> 2. 직접 개발한 드래그 인터렉션을 구현할수 있는 drag 라이브러리 추가 \
>    예제가 lib/drag.ts 에 있습니다

> 3. 인터렉션시 너무 많은 이벤트 콜백함수 사용을 방지하는 throttle 라이브러리 추가 \
>    lib/throttle.ts 에 있으며 예제는 추후 사용시 첨부하겟습니다

> 4. 재사용 가능한 공통 컴포넌트 들 추가 (components/common) \
>    ./Countour.tsx : 텍스트 간 구분선 컴포넌트 \
>    ./Button/SlideButton.tsx : 슬라이드 인터렉션을 위한 넘김 버튼 컴포넌트 \
>    ./CardUI/CardListSection.tsx : 슬라이드 영역을 감싸는 최상위 컴포넌트. 슬라이드 영역의 타이틀과 슬라이드 영역을 감쌉니다 \
>    ./CardUI/CardListSlide.tsx : 슬라이드 되는 List 들을 감싸는 컴포넌트. 실제 슬라이드 인터렉션이 되는 컴포넌트 이며 일정 영역까지만 디스플레이 됩니다. \
>    ./CardUI/ProfileCard.tsx : api 를 연동하는등 각 카드 item 이 되는 컴포넌트. 프로필이 노출되는 카드는 이 카드를 사용하면 됩니다. \
>    카드 관련 공통 컴포넌트는 모두 css 오버라이딩 하거나 children 컴포넌트를 가질수 있습니다.

- 22.06.12 개발 기록 및 진행 상황 공유

> 1. desktop 친구찾기 slide 진행중 \
>    좀더 프로젝트에 맞게 최적화 진행중이나, scroll 방식이 아닌 css 트랜지션을 이용해될거라고 생각중. \
>    페이지 슬라이드 형식은 트랜지션이 좀더 맞는 애니메이션이라고 생각이 듭니다. 특히나 모바일웹 구현에서도 트랜지션이 \
>    크로스 브라우징에도 유리하기 때문에 트랜지션 코드로 변경하려고 합니다

https://github.com/steven-yn/petBook/commit/a61a1b7cb6aa300fcd5b6ba30565d3bd22457373

> 2. 펫북 메인 리드미 작성 \
>    notice 브런치에 게시되어 있습니다

> 3. 모바일 코드 슬라이드 컴포넌트 첨부 \
>    회사에서 작업하던 모바일 코드로 반응형코드 추가시 첨삭하여 진행하려고 합니다.

https://github.com/steven-yn/petBook/commit/e452110dc3eb514bc64460e176f7ca404d7b6839

- 22.06.19 개발 기록 및 진행 상황 공유

> 1. desktop 친구 찾기 slide 마무리 단계 \
>    작업 결과 desktop 은 스크롤 방식, 모바일은 트랜지션 방식이 어울리다고 판단하여 \
>    데스크탑은 버튼 클릭시 5개씩 스크롤 되도록 하였습니다. \
>    이후 모바일은 터치이벤트를 이용해 트랜지션으로 슬라이드를 구현하고 구조도 변경되도록 할 예정입니다.

> 2. 슬라이드 영역에 마우스 오버시 슬라이드 좌우 버튼이 나오도록 작업하였습니다.

> 3. 무한 스크롤 구현 하였으나 좋은 방법이 아니라고 생각되어 추후 리팩터링 할 예정입니다.

> 4. 페이지 네이션을 적용하여 첫페이지일때는 왼쪽 버튼을 회색 처리하여 넘길수 있는 슬라이드가 \
>    없음을 나타내도록 하였습니다.

https://github.com/steven-yn/petBook/commit/a9003b13bc54777d0b865249271efddc18aa0dd7

- 22.07.03 개발 기록 및 진행 상황 공유

> 1. 페이지 아키텍쳐 초안 업데이트 \
>    팀원 모두가 볼수 있는 개발 아키텍쳐 공유의 일환으로 페이지 아키텍쳐 문서 초안을 업데이트 하였습니다. \
>    주로 next.js 를 이용해 서버에서 응답하는 각 html 파일 분기점과 ( 기준은 SEO 필요성의 기준 ) \
>    각 팝업 페이지 등의 라우팅을 통한 히스토리를 시각화한 문서입니다. \
>    추후 계속 업데이트가 될 예정입니다.

> 2. 메인 리드미 업데이트 \
>    금주 진행상황에 맞도록 업데이트 하였습니다. => https://github.com/K-Slave/petBook-Client/tree/notice

> 3. 디자이너 모집 글 작성 및 디자이너님 영입 \
>    플랫폼 두군데 ( okky, hola ) 에 모집글을 작성하였고, 가장먼저 연락주신 정아린 님 께서 저희팀에 합류하시기로 하였습니다.

> 4. petBook 레포지토리 이전 \
>    제 개인 레포였던 petBook 레포지토리를 펫북 팀 Organization 으로 이전하였습니다.

> 5. 프론트엔드 프로젝트 Netlify 배포 ( 테스트 서버 ) \
>    출시 전 개발 동안 CI/CD 의 일환으로 팀원 전체가 이용할수 있는 프론트엔드 테스트 서버가 필요하다고 판단 하였고, \
>    Next.js 프로젝트를 쉽게 정적 페이지화 하여 배포를 할수 있도록 도와주는 Netlify 에 배포하였습니다. \
>    현재 /index.html, /findfriend.html 두 페이지가 있으며, fe 브랜치로 GitHub PR 이나 Local Merge 를 통해 HEAD 가 업데이트 되면 \
>    Netlify 서버에서 자동으로 프로젝트를 빌드하여 업데이트 해줍니다. \
>    fe 브랜치에 /pages 폴더에 페이지 컴포넌트가 생기게 되면, 그대로 netlify 에서도 페이지가 늘어납니다. ( 로컬과 동일하게 동작 ) \
>    한 달에 빌드 시간 300분 제한으로, 이를 초과시 500분 마다 약 7달러의 요금이 발생하게 됩니다. \
>    따라서 fe 브랜치의 잦은 업데이트는 하지 않도록 해주시면 감사하겠습니다. \
>    도메인 주소 : https://t-petbook.netlify.app/

> 6. 페이지 요청시 SSR 되기전 data fetching 을 위한 Next.js 내장 API 인 getInitialProps 스터디 진행중 \
>    Toss SLASH 22 SSR 에서 공개된 data fetching 및 props drilling 문제를 해결하기 위한 솔루션인 \
>    getInitialProps 를 사용하기위해 빠르게 테스트하고 적용중에 있습니다. \
>    간단하게 findfriend 페이지에서 getInitialProps 를 통해 JSONPlaceholder 의 더미데이터 하나를 호출하였고, \
>    성공적으로 가져오는 모습을 볼수 있었습니다.

https://github.com/K-Slave/petBook-Client/commit/9b7bae2d91b14047844ce27dc8c62571e6e64850#diff-3367af2980155ba0ed94a88353eaf1b907b610f2a256e993fe0aa1af2071cf6e

// TODO

- 22.10.18 투두 리스트

  > 1. Authrization 깔끔 하게 처리하는 구조 작업 ( 쿠키 만료 관리 및 도메인 등 토큰 관리 )
  > 2. URL 이미지 import 작업 필요
  > 3. 화면 기획 참여 ?
  > 4. API 사용해보고 요청사항 취합
  > 5. 회의록,,,,,,,작성,,,,
  > 6. 강의 마저 듣고 함수형 프로그래밍 코드들 추가하기
  > 7. CI/CD 및 Test 자동화 알아보기

- 22.11.14 TODO 리스트

  > 1. 공용 토스트메시지 구현
  > 2. 게시물 등록 마무리하기
  > 3. 코드 리팩터링
  > 4. next 서버 로깅 (vercel production)
  > 5. categoryList API 리다이렉팅 이슈 << 11.17 아직 해결 안되었음

  > [x] useRecoilSelector 마무리하기
  > [x] localConsole 수정하기 (클래스로 가능)
  > [x] 빌드성공 시켜서 배포 및 도메인 연결

- 22.11.17 devlog

> selector 를 통해 렌더링이 최적화된 값을 가져오는 useRecoilSelector 를 작업했는데,
> 도저히 두개이상의 프로퍼티를 가진 객체를 꺼내올 수가 없었다.
> 이 경우에는 selector 를 새로 만드는것이 정답인것 같다.
> 컴포넌트 디자인 패턴 자체가 하나의 값을 사용하도록 유도하지만, 분명 두개이상의 값을 사용할일이 있을것이다.

- 22.11.17 TODO 리스트
  > [x] write 페이지 작업
  > [x] categoryList API 리다이렉팅 이슈

> 1. 공용 토스트메시지 구현 >> toastify.js 사용
> 2. next 서버 로깅 조사
> 3. api 서버 ssh 관련 환경 작업
> 4. vercel webhook 이용한 디스코드 배포알림

- 22.01.12 TODO 리스트

> [ ] write 페이지 이미지 다중첨부, 정적에셋 가져오기 처리필요
> [ ] 헤더 다시 짜기
> [ ] Next.js 버전업 일정잡기 (SWC 도 같이 적용)
> [ ] 로더, 스켈레톤 작업 공유하기
> [ ] 로드맵 작성하기
> [ ] 토스트메시지 작업하기

// 23.01.15 TODO LIST

- [ ] 토스트 메시지 마무리 작업
- [x] navigator 함수 마이그레이션 작업
- [ ] 발표전 테스트 준비
