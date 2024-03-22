import React from "react";

const sampleList = [1, 2, 3, 4, 5];

const ContactMemo = () => {
  return (
    <div className="contact-memo">
      <h1>간단한 메모 남겨주세요...</h1>
      <form className="memo-form">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Message" />
        <button>등록</button>
      </form>

      <div className="memo-list">
        {sampleList.length === 0 ? (
          <div>등록된 메모가 없습니다.</div>
        ) : (
          sampleList.map((d, n) => (
            <div>
              <p>안녕하세요!</p>
              <p>2024-01-01</p>
            </div>
          ))
        )}
      </div>
      <div className="memo-list-paging">
        <span style={{ color: "slateblue" }}>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
  );
};

export default ContactMemo;
