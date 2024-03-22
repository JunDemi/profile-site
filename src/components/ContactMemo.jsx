import React, { useState } from "react";
import { useQuery } from "react-query";
import { createMemo, readMemo } from "../firebase/fbContents";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { compareTimeFormat, datetimeFormat } from "../Utils";

const ContactMemo = () => {
  const { handleSubmit, register, reset } = useForm({ mode: "onSubmit" });
  const { isLoading, data, refetch } = useQuery(["memo-list"], () =>
    readMemo()
  );
  const [page, set_page] = useState(0);
  const [formLoading, set_formLoading] = useState(false);
  const [memoDetail, set_memoDetail] = useState("");
  const onValid = async (input) => {
    set_formLoading(true);
    await createMemo(input);
    refetch();
    reset();
    set_formLoading(false);
  };

  const openMemoDetail = (memoId) => {
    if(memoDetail === memoId){
        set_memoDetail("");
    }else{
        set_memoDetail(memoId);
    }
  }
  return (
    <div className="contact-memo">
      <h1>간단한 메모 남겨주세요...</h1>
      <form className="memo-form" onSubmit={handleSubmit(onValid)}>
        <textarea
          placeholder="Message"
          autoComplete="off"
          {...register("message", {
            required: true,
          })}
        />
        <button
          disabled={formLoading}
          style={
            formLoading
              ? { backgroundColor: "#5347a4" }
              : { backgroundColor: "#6a5acd" }
          }
        >
          <motion.p animate={formLoading ? { rotateZ: 45 } : { rotateZ: 0 }}>
            +
          </motion.p>
        </button>
      </form>

      {!isLoading ? (
        <>
          <div className="memo-list">
            {data.length === 0 ? (
              <h5>등록된 메모가 없습니다.</h5>
            ) : (
              data.slice(page * 5, page * 5 + 5).map((memo, num) => (
                <motion.div
                  key={num}
                  className="memo-object"
                  onClick={() => openMemoDetail(memo.memo)}
                >
                  <p>{memo.memoInfo.message.length > 20 ? memo.memoInfo.message.slice(0, 30) + "...": memo.memoInfo.message}</p>
                  <p>{compareTimeFormat(memo.memoInfo.date)}</p>
                  <AnimatePresence>
                  {memo.memo === memoDetail && (
                    <motion.div className="memo-detail"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    layoutId="memos"
                    >
                        <h4>작성일: {datetimeFormat(memo.memoInfo.date)}</h4>
                        <textarea defaultValue={memo.memoInfo.message} readOnly/>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
          </div>
          <div className="memo-list-paging">
            {[...Array(Math.ceil(data.length / 5))].map((d, n) => (
              <motion.span
                key={n}
                onClick={() => {set_page(n); set_memoDetail("")}}
                animate={
                  page === n
                    ? {
                        backgroundColor: "#6a5acd",
                        border: "1px solid #6a5acd",
                        color: "#fff",
                      }
                    : {
                        backgroundColor: "#fff",
                        border: "1px solid #6a5acd",
                        color: "#6a5acd",
                      }
                }
              >
                {n + 1}
              </motion.span>
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
