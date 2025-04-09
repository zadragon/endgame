import { posts } from "./index";

// 학습 노트 조작과 관련된 CRUD API 함수 파일
// 학습 노트 목록 데이터를 조회하는 API
function fetchPosts() {
  return posts.get("/");
}

// 학습 노트 특정 데이터 불러오기
function fetchPost(postId) {
  return posts.get(`/${postId}`);
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
  return posts.post("/", postData);
}

// 학습 노트 데이터를 삭제하는 API
function deletePost(postId) {
  return posts.delete(`/${postId}`);
}

// 학습 노트 데이터를 수정하는 API
function editPost(postId, postData) {
  return posts.put(`/${postId}`, postData);
}

export { fetchPosts, createPost, deletePost, fetchPost, editPost };
