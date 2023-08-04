import { NextPageWithLayout } from "@/pages/_app";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getListApi } from "@/api";
import { MockDataItemType } from "@/types/mockData";

const WithHydrate: NextPageWithLayout = (props) => {
  const { data: queryData } = useQuery(["getListQuery"], getListApi, {
    retry: 0,
    refetchOnWindowFocus: false,
    onSuccess: (response) => {
      console.log("success", response);
    },
    onError: (error) => {
      console.log("onError", error);
    },
    staleTime: Infinity,
  });

  useEffect(() => {
    console.log("queryData", queryData);
  }, [queryData]);

  return (
    <div>
      <h1>Using dehydratedState</h1>
      <ul>
        {queryData?.map((item: MockDataItemType, index) => (
          <li key={index}>
            <span>{item.id + " // " + item.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async ({ ctx }) => {
  const fetchAPI = async () => {
    const res = await fetch(`http://localhost:3000/api/with-hydrate`);

    return await res.json();
  };

  const data = await fetchAPI();

  return {
    props: {
      dehydratedState: data.dehydratedState,
    },
  };
};

export default WithHydrate;
