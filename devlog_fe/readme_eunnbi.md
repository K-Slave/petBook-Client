# petBook Devlog

### Developer : 강은비

#### 22.08.24 ~

- 커뮤니티 메인페이지 작업 중
  - `pages/community.tsx`
  - `components/community`
- 색상은 바로 값 넣어서 사용 중, 추후 자주 쓰는 색상은 따로 관리해야 할 듯
- 폰트는 `styles/Globals.scss`에 `cdn` 임포트해서 사용 중
- 더미데이터 사용하여 UI 작업. 데이터 타입은 임의로 정하여 사용 중
- `recoil`은 아직 사용하지 않고 `props drilling` 이용. 추후에 필요하면 `recoil` 사용
  - 인기 게시물: 몇월 몇주차
  - 실시간 게시물: 카테고리, 정렬 기준, 페이지 넘버

#### 22.08.26

- 커뮤니티 메인페이지 전반적인 UI 완성
- 페이지네이션 적용
  - `/commynity?page={페이지 넘버}`

#### 22.08.30 ~ 31

- 커뮤니티 게시물 상세페이지 작업 중
- UI가 반복되는 부분은 컴포넌트로 만듦.
  - [DetailCommonInfo](https://github.com/K-Slave/petBook-Client/blob/eunnbi-feature/petbook_fe/components/community/DetailCommonInfo.tsx)
  - [TagList](https://github.com/K-Slave/petBook-Client/blob/eunnbi-feature/petbook_fe/components/community/TagList.tsx)
- next에서 제공하는 `Image` 컴포넌트 대신 `img` 태그 사용 중 (`next.config` 설정 바꾸기 귀찮아서...) 추후 `Image` 컴포넌트로 바꿀 예정

#### 22.09.11

- 커뮤니티 메인페이지와 게시물 상세 페이지에서 추가되거나 변경된 UI 수정 완료

#### 22.10.24

- 게시물 리스트 조회 api, 카테고리 조회 api 연결, 게시물 단건 조회 api 연결
- 로딩상태 UI가 정해지지 않아서 아직 구현하지 않음. 추후 로딩상태 UI 입힐 예정
- 게시물 리스트 조회 api 응답에 전체 페이지 개수나 전체 게시물 개수 추가 요청 (이유는 전체 페이지 개수에 따라 버튼 개수(UI)가 달라지기 때문)

#### 22.11.03

- random key값을 반환하는 `getRandomKey` 유틸함수 구현 (Date 객체의 getTime 메서드와 Math 객체의 random 메서드 이용)
- 커뮤니티 게시물 리스트 관련 컴포넌트들 `compound component pattern`으로 리팩토링 중


#### 22.11.14

- 게시물 목록 조회 api response body 수정에 따라 프론트 측도 코드 수정
  - `ArticleListResponse` interface 수정
  -  `totalElement` 값을 이용해 `totalPages` 값 구하여 `PageButtonBox` 렌더링
- `loading` 상태 UI 추가 예정