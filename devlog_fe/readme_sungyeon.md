# petBook Devlog

### Developer : steven-yn (윤성연)

- 22.06.05 개발 기록 공유

> 1. 직접 개발한 localhost 에서만 사용할수 있는 localConsole 라이브러리 추가
>    자세한 사용법은 lib/localConsole.ts 에 있습니다

> 2. 직접 개발한 드래그 인터렉션을 구현할수 있는 drag 라이브러리 추가
>    예제가 lib/drag.ts 에 있습니다

> 3. 인터렉션시 너무 많은 이벤트 콜백함수 사용을 방지하는 throttle 라이브러리 추가
>    lib/throttle.ts 에 있으며 예제는 추후 사용시 첨부하겟습니다

> 4. 재사용 가능한 공통 컴포넌트 들 추가 (components/common)
>    ./Countour.tsx : 텍스트 간 구분선 컴포넌트
>    ./Button/SlideButton.tsx : 슬라이드 인터렉션을 위한 넘김 버튼 컴포넌트
>    ./CardUI/CardListSection.tsx : 슬라이드 영역을 감싸는 최상위 컴포넌트. 슬라이드 영역의 타이틀과 슬라이드 영역을 감쌉니다
>    ./CardUI/CardListSlide.tsx : 슬라이드 되는 List 들을 감싸는 컴포넌트. 실제 슬라이드 인터렉션이 되는 컴포넌트 이며 일정 영역까지만 디스플레이 됩니다.
>    ./CardUI/ProfileCard.tsx : api 를 연동하는등 각 카드 item 이 되는 컴포넌트. 프로필이 노출되는 카드는 이 카드를 사용하면 됩니다.
>    카드 관련 공통 컴포넌트는 모두 css 오버라이딩 하거나 children 컴포넌트를 가질수 있습니다.

- 22.06.12 개발 기록 공유

> 1. desktop 친구찾기 slide 진행중
>    좀더 프로젝트에 맞게 최적화 진행중이나, scroll 방식이 아닌 css 트랜지션을 이용해될거라고 생각중.
>    페이지 슬라이드 형식은 트랜지션이 좀더 맞는 애니메이션이라고 생각이 듭니다. 특히나 모바일웹 구현에서도 트랜지션이
>    크로스 브라우징에도 유리하기 때문에 트랜지션 코드로 변경하려고 합니다

https://github.com/steven-yn/petBook/commit/a61a1b7cb6aa300fcd5b6ba30565d3bd22457373

> 2. 펫북 메인 리드미 작성
>    notice 브런치에 게시되어 있습니다

> 3. 모바일 코드 슬라이드 컴포넌트 첨부
>    회사에서 작업하던 모바일 코드로 반응형코드 추가시 첨삭하여 진행하려고 합니다.

https://github.com/steven-yn/petBook/commit/e452110dc3eb514bc64460e176f7ca404d7b6839

- 22.06.19 개발 기록 공유

> 1. desktop 친구 찾기 slide 마무리 단계
>    작업 결과 desktop 은 스크롤 방식, 모바일은 트랜지션 방식이 어울리다고 판단하여 \
>    데스크탑은 버튼 클릭시 5개씩 스크롤 되도록 하였습니다. \
>    이후 모바일은 터치이벤트를 이용해 트랜지션으로 슬라이드를 구현하고 구조도 변경되도록 할 예정입니다.

> 2. 슬라이드 영역에 마우스 오버시 슬라이드 좌우 버튼이 나오도록 작업하였습니다.

> 3. 무한 스크롤 구현 하였으나 좋은 방법이 아니라고 생각되어 추후 리팩터링 할 예정입니다.

> 4. 페이지 네이션을 적용하여 첫페이지일때는 왼쪽 버튼을 회색 처리하여 넘길수 있는 슬라이드가 \
>    없음을 나타내도록 하였습니다.

https://github.com/steven-yn/petBook/commit/a9003b13bc54777d0b865249271efddc18aa0dd7
