import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import usePostStore from "../store/postStore";
import useUserStore from "../store/userStore";

import Layout from "../components/global/Layout";
import Sublayout from "../components/global/sublayout";
import Header from "../components/global/Header";
import Editor from "../components/global/Editor";

const PostWritePage = () => {
  const titleRef = useRef<HTMLInputElement>(null!);
  const contentRef = useRef<HTMLTextAreaElement>(null!);
  const { addPost } = usePostStore();
  const { currentUser } = useUserStore();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!titleRef.current?.value || !contentRef.current?.value) return;
    addPost({
      title: titleRef.current.value,
      content: contentRef.current.value,
      writer: currentUser || "익명",
    });
    navigate("/home");
  };

//   return (
//     <div className="p-5">
//       <h1 className="text-lg font-bold mb-2">게시물 작성</h1>
//       <input ref={titleRef} placeholder="제목" className="border p-2 w-full mb-3" />
//       <textarea ref={contentRef} placeholder="내용" className="border p-2 w-full h-40" />
//       <div className="mt-3">
//         <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-1">등록</button>
//       </div>
//     </div>
//   );

return (
    <Layout>
      <Sublayout>
        
        <Editor
          titleRef={titleRef}
          contentRef={contentRef}
          handleCreate={handleSubmit}
        />
      </Sublayout>
    </Layout>
  );
};

export default PostWritePage;
