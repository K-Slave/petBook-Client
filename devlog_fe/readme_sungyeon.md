# petBook Devlog

### Developer : name

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
