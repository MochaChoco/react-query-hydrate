import { MockDataItemType } from "@/types/mockData";

const delay = 2000;

export const getListApi = () => {
  return new Promise<MockDataItemType[]>((resolve) => {
    fetch("http://localhost:3000/mockData/list.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          //   console.log("list Data", data);
          resolve(data);
        }, delay);
      });
  });
};
