import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import { Box, Button, CssBaseline, TextField, Typography } from "@mui/material";
import NavBar from "./navbar";
import Footer from "./footer";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

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
      }, 2000); // 3000 мс (3 секунды) - время отображения сообщения
      return () => clearTimeout(timeoutId);
    }
  }, [successMessage]);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Box
        display="flex"
        alignItems="center"
        sx={{
          flexDirection: "column",
          borderRadius: 10,
          justifyContent: "space-evenly",
        }}
        minHeight="36rem"
      >
        <Typography variant="h2" color="primary" sx={{ mt: 10 }}>
          Sugestii
        </Typography>
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
            "& > :not(style)": { mb: 5, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            multiline
            label="Vocea ta conteaza!"
            rows={5} // Вы можете настроить количество строк
            variant="outlined"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Adauga comentariu"
          />
        </Box>
        <Button
          variant="contained"
          onClick={handleAddComment}
          sx={{ mb: 5, mt: 2 }}
        >
          Adauga
        </Button>
        {successMessage && <Alert>{successMessage}</Alert>}
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default CommentsSection;
