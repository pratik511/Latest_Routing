import React, { useState } from "react";

const Scroll = () => {
  const USERS = [
    { id: 1, name: "Andy", age: 32 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Tom Hulk", age: 40 },
    { id: 4, name: "Tom Hank", age: 50 },
    { id: 5, name: "Audra", age: 30 },
    { id: 6, name: "Anna", age: 68 },
    { id: 7, name: "Tom", age: 34 },
    { id: 8, name: "Tom Riddle", age: 28 },
    { id: 9, name: "Bolo", age: 23 },
    { id: 10, name: "Andy", age: 32 },
    { id: 11, name: "Andy", age: 32 },
    { id: 12, name: "Bob", age: 30 },
    { id: 13, name: "Tom Hulk", age: 40 },
    { id: 14, name: "Tom Hank", age: 50 },
    { id: 15, name: "Audra", age: 30 },
    { id: 16, name: "Anna", age: 68 },
    { id: 17, name: "Tom", age: 34 },
    { id: 18, name: "Tom Riddle", age: 28 },
    { id: 19, name: "Bolo", age: 23 },
    { id: 20, name: "Bob", age: 30 },
    { id: 21, name: "Andy", age: 32 },
    { id: 22, name: "Bob", age: 30 },
    { id: 23, name: "Tom Hulk", age: 40 },
    { id: 24, name: "Tom Hank", age: 50 },
    { id: 25, name: "Audra", age: 30 },
    { id: 26, name: "Anna", age: 68 },
    { id: 27, name: "Tom", age: 34 },
    { id: 28, name: "Tom Riddle", age: 28 },
    { id: 29, name: "Bolo", age: 23 },
    { id: 30, name: "Anna", age: 68 },
  ];

  const [userData, setUserData] = useState(USERS?.slice(0, 10));
  const [count, setCount] = useState(1);

  const scrollOnHandler = () => {
    const startIndex = count * 10;
    const endIndex = startIndex + 10;

    if (endIndex <= USERS?.length) {
      const newData = USERS?.slice(startIndex, endIndex);
      setUserData((pre) => [...pre, ...newData]);
      setCount(count + 1);
    }
  };

  window.onscroll = function () {
    let scrollingDown =
      document.documentElement.scrollTop <
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    if (scrollingDown === false) {
      scrollOnHandler();
      console.log("1111111111111111");
    }
  };

  return (
    <React.Fragment>
      <h1>Scroll Demo</h1>
      <div>
        {userData?.map((data) => {
          return (
            <div key={data?.id}>
              <h1>{data?.id}</h1>
              <h1>{data?.name}</h1>
              <h1>{data?.age}</h1>
              <br />
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Scroll;
