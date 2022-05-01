import React from "react";
import styled from "styled-components";
import Responsive from "../components/common/Responsive";

const ProjectCard = styled.div`
  margin-top: 2rem !important;

  .Card-Container {
    display: flex;
    flex-direction: column;
    height: 20rem;
    padding: 0 3rem;
    border: 1px solid #000;
    .Card-Notice {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem 0;
      border-bottom: 1px solid #000;
      span {
        padding: 0.5rem 1rem;
        background-color: #5e5e5e;
        border: 1px solid #7e7e7e;
        border-radius: 10px;
      }
    }
    .Card-Main {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
    }
  }
`;

interface QueryProps {
  isLoading: boolean;
  error: any;
  data: any;
  children: any;
  // {
  //   data: {
  //     title: string;
  //     section: {
  //       about: string;
  //       people: string;
  //       schedule: string;
  //     };
  //     body: string;
  //     processStatus: string;
  //     wrDate: string;
  //   };
  //   status: number;
  //   headers: object;
  // };
}

const PetbookProject = ({ isLoading, error, data }: QueryProps) => {
  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생!</p>;

  const { title, section, body, processStatus, wrDate } = data;
  const { about, people, schedule } = section;

  return (
    <ProjectCard className='Project-Card'>
      <div className='Card-Container'>
        <header className='Card-Notice'>
          <span>
            <h4>아래 데이터는 Node.js 서버와의 연동을 테스트 하기 위한 데이터 입니다.</h4>
          </span>
        </header>
        <main className='Card-Main'>
          <section className='Card-Header'>
            <p>
              ({processStatus}) {title.includes("Hyades") ? <span>petBook</span> : <span>{title}</span>}
            </p>
          </section>
          <section className='Card-Body'>
            <p>
              <span>About</span> : 특별한 동물을 위한 특별한 전자책 '펫북'
            </p>
            <p>
              <span>구성원</span> : (4)
            </p>
          </section>
          <section className='Card-Moreinfo'>
            <p>{body} 첨부</p>
            <p>게시물 작성시간 : {wrDate}</p>
          </section>
        </main>
      </div>
    </ProjectCard>
  );

  /*
    react-query 미적용시 axios와 useEffect, useState로 작성한 코드입니다

  const getProjectData = async () => {
    const res = await req.get("/3");
    const data = res.data;

    console.log("res", res);
    console.log("data", data);

    if (res.status === 200) {
      setData(data);
    }
  };

  useEffect(() => {
    getProjectData();
  }, []);

  const [data, setData] = useState("");

  return (
    <ProjectWrap>
      <p>
        아래 데이터는 Node.js 서버와의 연동을 테스트 하기 위한 데이터 입니다.
      </p>
      {data ? (
        <ProjectCard>
          <header className="Project-header">
            ({data.processStatus}) {data.title}
          </header>
          <section className="Project-section">
            <p>About : {data.section.about}</p>
            <div>구성원 : ({data.section.people})</div>
            <p>진행 기간 : {data.section.schedule}</p>
          </section>
          <main className="Project-body">
            <p>{data.body} 첨부</p>
            <span>게시물 작성시간 : {data.wrDate}</span>
          </main>
        </ProjectCard>
      ) : (
        "로딩중..."
      )}
    </ProjectWrap>
  );
  */
};

export default PetbookProject;
