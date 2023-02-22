import "./scss/style.scss";
// Anime.js
import Anime from "./assets/Anime";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Visual from "./pages/Visual";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Vision from "./pages/Vision";
import Life from "./pages/Life";
import Footer from "./components/Footer";
import Gotop from "./components/Gotop";
import MobileMenu from "./components/MobileMenu";

const App = () => {
  // Anime 적용대상
  const main = useRef(null);
  // 이동할 위치값 저장
  // useRef :  html 대상을 저장하는 용도
  // useRef :  화면갱신과 상관없는 아닌 변수 저장
  const pos = useRef([]);
  // 화면이 리사이징 (반응형) 이므로 section 위치가 변경됨
  const getPos = () => {
    // 2. 기본 section 스크롤 위치값을 초기화
    pos.current = [];
    // 3. 각  section 위치값을 파악해서 저장한다.
    const secs = main.current.querySelectorAll(".scroll");
    for (const item of secs) {
      // 각 영역의 스크롤 픽셀 위치값
      pos.current.push(item.offsetTop);
    }
    // console.log(pos.current);
    // 모바일 메뉴 숨기기
    const winW = window.innerWidth;
    // console.log(winW);
    if (winW > 860) {
      setOpen(false);
    }
  };

  // 6. header 의 메뉴를 클릭시 페이지 번호 전달.
  const [page, setPage] = useState(0);
  useEffect(() => {
    // console.log("현재 이동 페이지 : ", page);
    new Anime(window, {
      prop: "scroll",
      value: pos.current[page] - 80,
      duration: 500,
    });
  }, [page]);

  useEffect(() => {
    // aos 초기화
    AOS.init();

    // 1. 최초 section 스크롤 위치값을 파악
    getPos();
    // 4. 화면 리사이즈 할 때도 getPos() 실행 필요
    window.addEventListener("resize", getPos);
    window.addEventListener("scroll", getPos);
    // 5. 클린업 함수 작성
    return () => {
      window.removeEventListener("resize", getPos);
      window.removeEventListener("scroll", getPos);
    };
  }, []);

  // 모바일 메뉴 펼치기 상태관리
  const [open, setOpen] = useState(false);

  return (
    <div className="wrap" ref={main}>
      {/* 위로가기 */}
      <Gotop />
      {/* 7. page 변경 props 전달 */}
      <Header setPage={setPage} setOpen={setOpen} open={open} />
      <MobileMenu setPage={setPage} setOpen={setOpen} open={open} />

      <div className="container">
        <Visual />
        <Profile />
        <Skills />
        <Portfolio />
        <Life />
        <Vision />
      </div>
      <Footer />
    </div>
  );
};

export default App;
