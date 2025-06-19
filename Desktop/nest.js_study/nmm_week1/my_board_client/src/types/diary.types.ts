export interface Diary {
    number: number;           // 게시글 ID
    title: string;
    contents: string;
    writer: string;           // 작성자 이름 또는 ID
    createdAt: string;
  }