import { useRouter } from "next/router";
import React from "react";
import HospitalDetail from "@components/hospital/HospitalDetail";
import HospitalList from "@components/hospital/HospitalList";

const HospitalContainer = () => {
  const router = useRouter();

  return (
    <>
      {router.query.id ? (
        <HospitalDetail id={Number(router.query.id)} />
      ) : (
        <HospitalList />
      )}
    </>
  );
};

export default HospitalContainer;
