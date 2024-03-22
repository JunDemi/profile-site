import React, { useState } from "react";
import { useQuery } from "react-query";
import { readMemo } from "../firebase/fbContents";

const ContactMemo = () => {
  const { isLoading, data, refetch } = useQuery(["memo-list"], () =>
    readMemo()
  );
  const [page, set_page] = useState(0);
  return (
    <div className="contact-memo">
      <h1>간단한 메모 남겨주세요...</h1>
      <form className="memo-form">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Message" />
        <button>등록</button>
      </form>

      {!isLoading ? (
        <>
          <div className="memo-list">
            {data.length === 0 ? (
              <div>등록된 메모가 없습니다.</div>
            ) : (
              data.slice(page * 5, page * 5 + 5).map((d, n) => (
                <div key={n}>
                  <p>{d.text}</p>
                  <p>{d.date}</p>
                </div>
              ))
            )}
          </div>
          <div className="memo-list-paging">
            {[...Array(Math.ceil(data.length / 5))].map((d, n) => (
              <span key={n} onClick={() => set_page(n)}>{n + 1}</span>
            ))}
          </div>
        </>
      ) : (
        "로딩중"
      )}
    </div>
  );
};

export default ContactMemo;
