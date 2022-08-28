import { useRecoilValue } from "recoil";
import styled from "styled-components";
import categoryFilterState from "../../atoms/componentAtoms/community/categoryFilter";

const WriteCategorySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 100%;
  height: auto;

  margin-top: 52px;
  margin-bottom: 32px;

  .Category__Section__Title {
    font-weight: bold;
  }

  .Category__Keyword__List {
    display: flex;
    gap: 12px;

    width: 100%;
  }

  .Category__Keyword__Item {
    padding: 8.5px 14px;

    background-color: #fff4e0;

    border-radius: 18px;
  }
`;

const WriteCategory = () => {
  const { categoryKeyword } = useRecoilValue(categoryFilterState);

  return (
    <WriteCategorySection>
      <label className='Category__Section__Title'>
        카테고리를 선택해주세요
      </label>
      <div className='Category__Keyword__List'>
        {categoryKeyword.map((keyword) => {
          return (
            <button key={keyword} className='Category__Keyword__Item'>
              {keyword}
            </button>
          );
        })}
      </div>
    </WriteCategorySection>
  );
};

export default WriteCategory;
