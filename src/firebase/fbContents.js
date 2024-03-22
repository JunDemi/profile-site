import { addDoc, collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./fbConnection";

const memoRef = collection(db, "memos");

export const readMemo = async () => {
  const resultArray = [];
  const memoQuery = query(memoRef, orderBy("date", "desc"));
  const result = await getDocs(memoQuery);
  result.docs.map((data) => {
    resultArray.push({ memo: data.id, memoInfo: data.data() });
  });
  return resultArray;
};


export const createMemo = async (input) => {
  //DB추가
  await addDoc(collection(db, "memos"), {
    message: input.message,
    date: Date.now(),
  });
};
