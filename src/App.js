import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  let [count, setCount] = useState(0);

  const clickGood = () => {
    setCount((prev) => prev + 1);
  };

  const changeCol = () => {
    let newArray = [...title];
    newArray[0] = "여자 코트 추천";
    setTitle(newArray);
  };

  const reverseFun = () => {
    let newArray = [...title];
    newArray.sort();
    setTitle(newArray);
    console.log(newArray);
  };

  return (
    <>
      <div className="container">
        <div>GOGO DEVELOPMENT</div>
        <button
          onClick={() => {
            reverseFun();
          }}
        >
          정렬
        </button>
        <ul className="list_box">
          <li>
            <div>
              <strong>{title[0]}</strong>
              <span className="good" onClick={() => clickGood()}>
                👍
              </span>
              <span className="goodCount">{count}</span>
            </div>
            <div>2월 18일 발행</div>
            <button
              onClick={() => {
                changeCol();
              }}
              className="change_col"
            >
              Change Collection
            </button>
            <button
              onClick={() => {
                openModal();
              }}
            >
              Detail
            </button>
          </li>
          <li>
            <div>
              <strong>{title[1]}</strong>
              <span className="good" onClick={() => clickGood()}>
                👍
              </span>
              <span className="goodCount">{count}</span>
            </div>
            <div>2월 18일 발행</div>
          </li>
          <li>
            <div>
              <strong>{title[2]}</strong>
              <span className="good" onClick={() => clickGood()}>
                👍
              </span>
              <span className="goodCount">{count}</span>
            </div>
            <div>2월 18일 발행</div>
          </li>
        </ul>

        <div className={modal ? "open_item_modal" : "item_modal"}>
          <div className="container">
            <p>제목: </p>
            <p>상세내용: </p>
            <span>날짜: 2월 18일</span>
            <div>
              <button
                onClick={() => {
                  closeModal();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
