import { create } from "zustand";

type Comment = {
  user: string;
  text: string;
  time: string;
  likes: number;
};

type Post = {
  id: number;
  title: string;
  content: string;
  writer: string;
  comments: Comment[];
};

type PostStore = {
  posts: Post[];
  addPost: (post: Omit<Post, "id" | "comments">) => void;
  getPostById: (id: number) => Post | undefined;
  addComment: (id: number, comment: Comment) => void;
  likeComment: (id: number, commentIdx: number) => void;
  deletePost: (id: number) => void;
  deleteComment: (postId: number, commentIdx: number) => void;
};

const usePostStore = create<PostStore>((set, get) => ({
  posts: [],
  addPost: (post) =>
    set((state) => ({
      posts: [
        ...state.posts,
        {
          ...post,
          id: Date.now(),
          comments: [],
        },
      ],
    })),
  getPostById: (id) => get().posts.find((p) => p.id === id),
  addComment: (id, comment) =>
    set((state) => ({
      posts: state.posts.map((p) =>
        p.id === id
          ? { ...p, comments: [...p.comments, comment] }
          : p
      ),
    })),
  likeComment: (id, commentIdx) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: post.comments.map((c, i) =>
                i === commentIdx ? { ...c, likes: c.likes + 1 } : c
              ),
            }
          : post
      ),
    })),
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),
  deleteComment: (postId, commentIdx) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.filter((_, i) => i !== commentIdx),
            }
          : post
      ),
    })),
}));

export default usePostStore;
