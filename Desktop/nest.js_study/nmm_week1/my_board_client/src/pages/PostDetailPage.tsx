import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import usePostStore from "../store/postStore";
import useUserStore from "../store/userStore"; // ✅ 추가
import Layout from "../components/global/Layout";
import Sublayout from "../components/global/sublayout";

const PostDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPostById, addComment, likeComment,deleteComment } = usePostStore();
  const { currentUser } = useUserStore(); // ✅ currentUser 가져오기
  const post = getPostById(Number(id));
  const [comment, setComment] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleComment = () => {
    if (post && comment.trim()) {
      const now = new Date();
      const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      addComment(post.id, {
        user: `사용자 ${post.comments.length + 1}`,
        text: comment,
        time,
        likes: 0,
      });
      setComment("");
    }
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [post?.comments]);

  if (!post) return <div className="p-5">게시글을 찾을 수 없습니다.</div>;

  return (
    <Layout>
      <Sublayout>
        <div className="p-5 flex flex-col h-full text-[13px] font-[Pretendard]">
          {/* 뒤로가기 버튼 */}
          <button
            onClick={() => navigate("/home")}
            className="text-xs text-blue-600 underline self-start mb-3 font-[NeoDunggeunmo]"
          >
            ← 뒤로가기
          </button>

          <p className="text-[10px] text-gray-500 mb-1 font-[Pretendard]">
            ✍ 작성자: {currentUser || "익명"}
          </p>

          {/* 게시글 본문 */}
          <div className="flex-grow">
            <h1 className="text-xl font-bold mb-2 font-[NeoDunggeunmo]">{post.title}</h1>
            <p className="text-sm text-gray-700 mb-5">{post.content}</p>
          </div>

          {/* 댓글 */}
          <div className="mt-4">
            <h2 className="text-sm font-bold mb-2">💬 댓글</h2>
            <div className="flex gap-2 mb-4">
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="댓글을 입력하세요"
                className="flex-1 border border-black p-2 rounded-md text-sm"
              />
              <button
                onClick={handleComment}
                className="px-3 py-[2px] bg-[#55B2D4] hover:bg-[#298EB5] text-white text-xs rounded-md font-[NeoDunggeunmo]"
              >
                등록
              </button>

            </div>

            <ul className="space-y-2 max-h-[180px] overflow-auto pr-1">
              {post.comments.map((c, idx) => (
                <li key={idx} className="bg-white border border-[#ccc] rounded px-3 py-2 text-[12px]">
                  <div className="flex justify-between mb-1">
                    <span className="text-blue-600 font-semibold">{c.user}</span>
                    <span className="text-gray-400 text-xs">{c.time}</span>
                  </div>
                  <p className="text-gray-800 mb-1">{c.text}</p>
                  <button
                    onClick={() => likeComment(post.id, idx)}
                    className="text-[11px] text-red-500 hover:text-red-600 font-[Pretendard]"
                  >
                    ❤️ 공감 {c.likes}
                  </button>
                  {/* 댓글 내부에 추가 */} 
                  <button onClick={() => deleteComment(post.id, idx)}className="text-[11px] text-gray-500 ml-3 hover:text-black">
                    ❌ 삭제
                  </button>

                </li>
              ))}
              <div ref={bottomRef} />
            </ul>
          </div>
        </div>
      </Sublayout>
    </Layout>
  );
};

export default PostDetailPage;
