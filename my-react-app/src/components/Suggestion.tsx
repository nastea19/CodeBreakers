import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import { Box, Button, TextField, Typography } from "@mui/material";
import NavBar from "./navbar";

interface Comment {
  id: number;
  text: string;
  author: string;
}

interface Props {
  comments: Comment[];
}

function CommentsSection() {
  const [newComment, setNewComment] = useState<string>("");
  const [commentList, setCommentList] = useState<Comment[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      // Создание нового комментария
      const newCommentItem: Comment = {
        id: commentList.length + 1,
        text: newComment,
        author: "Comentariu" + (commentList.length + 1),
      };

      // Обновление состояния с новым комментарием
      setCommentList([...commentList, newCommentItem]);

      // Очистка поля ввода
      setNewComment("");

      // Показать сообщение об успешной записи комментария
      setSuccessMessage("Comentariu a fost adaugat cu success!");
    }
  };
  // Очистка сообщения об успешной записи через определенный промежуток времени
  useEffect(() => {
    if (successMessage) {
      const timeoutId = setTimeout(() => {
        setSuccessMessage(null);
      }, 1000); // 3000 мс (3 секунды) - время отображения сообщения
      return () => clearTimeout(timeoutId);
    }
  }, [successMessage]);

  return (
    <Box>
      <Typography variant="h2">Sugestii</Typography>
      <ul>
        {commentList.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.author}:</strong> {comment.text}
          </li>
        ))}
      </ul>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Adauga comentariu"
          sx={{ backgroundColor: "white", p: 1, width: "100%" }}
        />

        <Button variant="contained" onClick={handleAddComment}>
          Adauga
        </Button>
      </Box>
      {successMessage && <Alert>{successMessage}</Alert>}
    </Box>
  );
}

export default CommentsSection;
