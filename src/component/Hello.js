import { useState } from "react";
// 2.9K(gzipped: 1.3K)
import UserName from "./UserName";

export default function Hello({ age }) {
  // let name = "sss";
  const [name, setName] = useState("sss");
  // const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

  function changName() {
    // const newName = name === "sss" ? "aaa" : "sss";
    // console.log(name);
    // document.getElementById("name").innerText = name;
    // setName(name === "sss" ? "aaa" : "sss");
  }

  return (
    <div>
      <h2 id="name">
        {name}({age}) : {msg}
      </h2>
      <UserName name={name} />
      <button
        onClick={() => {
          setName(name === "sss" ? "aaa" : "sss");
        }}
      >
        chang
      </button>
      {/* <button onClick={changName}>chang</button> */}
    </div>
  );
}
