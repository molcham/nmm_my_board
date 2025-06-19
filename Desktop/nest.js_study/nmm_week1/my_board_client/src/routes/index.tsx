import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import PostListPage from '../pages/PostListPage';
import PostWritePage from '../pages/PostWritePage';
import PostDetailPage from '../pages/PostDetailPage';

// export default function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<PostListPage />} />
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/signup" element={<SignupPage />} />
//       <Route path="/diary" element={<PostWritePage />} />
//       <Route path="/post/:id" element={<PostDetailPage />} />
//     </Routes>
//   );
// }
export default function AppRoutes() {
  return (
    <Routes>
      {/* ✅ "/"로 접근 시 "/login"으로 리다이렉트 */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/diary" element={<PostWritePage />} />
      <Route path="/post/:id" element={<PostDetailPage />} />
      <Route path="/home" element={<PostListPage />} /> {/* 홈은 따로 /home에 위치 */}
    </Routes>
  );
}
