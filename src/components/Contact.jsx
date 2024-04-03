import React from "react";
import { Parallax } from "react-parallax";
import Footer from "./Footer";
import ContactMemo from "./ContactMemo";
import { useRecoilState } from "recoil";
import { themeState } from "../atom";

//이메일, 전화번호
//방명록 목록, 방명록 작성

const Contact = () => {
  const [themeMode] = useRecoilState(themeState);
  return (
    <>
      <div
        style={themeMode ? {
          background: "linear-gradient(90deg, rgb(25,48,71), rgb(10,13,16))",
        } : {background: "linear-gradient(90deg, #d7f0fb, #b3fbf8)"}}
      >
        <Parallax
          strength={-300}
          bgImage={`/bg/${themeMode ? "dark" : "light"}/f4.png`}
        >
          <Parallax
            strength={200}
            bgImage={`/bg/${themeMode ? "dark" : "light"}/f3.png`}
          >
            <Parallax
              strength={50}
              bgImage={`/bg/${themeMode ? "dark" : "light"}/f2.png`}
            >
              <Parallax
                strength={-200}
                bgImage={`/bg/${themeMode ? "dark" : "light"}/f1.png`}
              >
                <div className="contact-section">
                  <h1 className="contact-title cloud-title">Contact</h1>
                  <div className="contact-me">
                    <div className="contact-info">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                          />
                        </svg>
                        jungwook3176@gmail.com
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                          />
                        </svg>
                        (+82)10-3176-0315
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                          />
                        </svg>
                        서울시 강동구 강일동
                      </div>
                    </div>
                    <ContactMemo />
                  </div>
                  <Footer />
                </div>
              </Parallax>
            </Parallax>
          </Parallax>
        </Parallax>
      </div>
    </>
  );
};

export default Contact;
