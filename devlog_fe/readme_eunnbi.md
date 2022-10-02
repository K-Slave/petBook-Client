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
