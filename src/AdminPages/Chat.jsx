import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Chip,
} from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from "../Buttons/CustomButton";

const ChatContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "80vh",
  borderRadius: 12,
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  backgroundColor: "#f4f4f9",
  padding: theme.spacing(2),
}));

const ChatBox = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: "#fff",
  borderRadius: 8,
}));

const ContactsBox = styled(Box)(({ theme }) => ({
  height: "100%",
  backgroundColor: "#2e3b55",
  color: "#fff",
  borderRadius: 8,
  padding: theme.spacing(2),
}));

const MessageInput = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginRight: theme.spacing(2),
}));

function Chat() {
  const [messages, setMessages] = useState([
    { sender: "Admin", content: "Welcome to the Admin Chat!" },
    { sender: "John", content: "Hello, Admin!" },
    { sender: "Admin", content: "Hi John! How can I assist you today?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", content: newMessage }]);
      setNewMessage("");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <ContactsBox>
          <Typography variant="h6" gutterBottom>
            Contacts
          </Typography>
          <List>
            <ListItem button>
              <ListItemText primary="Amal Krishna" />
              <Chip label="online" color="success" />
            </ListItem>
            <Divider color="white" />
            <ListItem button>
              <ListItemText primary="Steve Austin" />
              <Chip label="offline" color="error" />
            </ListItem>
            <Divider color="white" />
            <ListItem button>
              <ListItemText primary="John Cena" />
              <Chip label="online" color="success" />
            </ListItem>
            <Divider color="white" />
                <ListItem button>
                  <ListItemText primary="The UnderTaker" />
                  <Chip label="offline" color="error" />
                </ListItem>
                <Divider color="white" />
                <ListItem button>
                  <ListItemText primary="CM Punk" />
                  <Chip label="offline" color="error" />
                </ListItem>
                <Divider color="white" />
                <ListItem button>
                  <ListItemText primary="Dwayne Johnson" />
                  <Chip label="online" color="success" />
                </ListItem>
                <Divider color="white" />
          </List>
        </ContactsBox>
      </Grid>

      <Grid item xs={12} md={8}>
        <ChatContainer>
          <Typography variant="h4" gutterBottom>
            Chat
          </Typography>

          <ChatBox>
            {messages.map((msg, index) => (
              <Box key={index} sx={{ marginBottom: 1 }}>
                <Typography variant="subtitle2" color="textSecondary">
                  {msg.sender}:
                </Typography>
                <Typography variant="body1">{msg.content}</Typography>
                <Divider sx={{ marginY: 1 }} />
              </Box>
            ))}
          </ChatBox>

          <Box display="flex" alignItems="center">
            <MessageInput
              variant="outlined"
              size="small"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <CustomButton
              variant="contained"
              color="primary"
              onClick={handleSendMessage}
            >
              Send
            </CustomButton>
          </Box>
        </ChatContainer>
      </Grid>
    </Grid>
  );
}

export default Chat;
