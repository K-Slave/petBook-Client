import { atom } from "recoil";

// atom 은 타 상태관리 라이브러리 에서의 store 와 유사한 개념이며,
// store 의 객체가 조각조각 나있다고 생각하면 좋습니다.
// ex)
// store : {
//    sortFilterState : {...}, << 각 atom 객체들로 나누어둠.
//    userDataState : {...},
//    scrollPageState : {...},
// }
// 이 atom 들은 <RecoilRoot> 에서 취합되어 1개의 스토어로 취급되고
// 각 atom 들 끼리는 따로 구독 되어있기 때문에 userDataState 가 변했다고 하더라도
// sortFilterState 를 구독중인 컴포넌트는 리렌더링 되지 않습니다.

// 이 sortFilterState 는 !
// 병원 정보를 거리순, 리뷰많은순 등의 정렬 필터로 Sorting 한다 했을때
// 미리 검색어에 따른 병원정보를 Hash Map 으로 Sort 해뒀다고 가정.
// 정렬 필터 선택에 따라서 다른 데이터를 Selecting 해주는 atom 입니다.

export type SortFilterType = {
  sortKey: string;
  sortValue: any;
};

// 이렇게 타입을 따로 선언 해두는 이유는
// sortFilterState 를 가져와서 사용할때, 마우스를 올려두면 내부 객체가 보이게 되는데
// 객체를 바로 선언 하지않고 위의 타입 객체를 가져오게 되면
// 내부 변수가 보이지 않습니다.
// 따라서 sortFilterState 의 타입이 필요한 경우에는 위의 타입 객체를 가져가서 씁니다.

const sortFilterState = atom<{
  sortKey: string;
  sortValue: any;
}>({
  key: "sortFilterState", // atom 내부에서 필요로 하는 Key 값. atom 별로 겹치지만 않으면 됩니다.
  default: {
    sortKey: "distance", // 초기값을 거리순 key 로 한다는 의미
    sortValue: [], // List 를 Sorting 한 배열이 들어가면 되겠죠? 기본값은 빈 배열로 두더라도 괜찮습니다.
  },
});

export default sortFilterState;
