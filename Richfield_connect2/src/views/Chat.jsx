import { useState } from "react";
import "../styles/Chat.css";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello! How can I help you today? 👋",
      type: "received",
    },
  ]);

  const [showGifs, setShowGifs] = useState(false);
  const [loading, setLoading] = useState(false);

  const gifs = [
    {
      name: "👋 Wave",
      url: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGNyNHViYWx3Z3h3YjhmMzlodWJ3bnoxNW5yODlwZTc5NnJxcDY4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgG50Fb7Mi0prBC/giphy.gif",
    },
    {
      name: "😂 Laugh",
      url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTk4c2lmYmV6YTRvYmZ4b2dneWVmZ2g2cWJlcWJuN2I1dHF6cHV4NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wWue0rCDOphOE/giphy.gif",
    },
    {
      name: "👍 Thumbs Up",
      url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdnbDE5M3Q5b3lyZzJwYXhqdmdjeXM2b3IyMW9yMDdpdHoxZm5yOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tIeCLkB8geYtW/giphy.gif",
    },
    {
      name: "🎉 Celebration",
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MHV4bDhrd2ViYXNubHZvd2Y1NngyZWJpdzRia3M5aTdrcDF2NDkzdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/FY5vhK1zpoJGqap917/giphy.gif",
    },
  ];

  // BOT REPLIES
  const getBotReply = (text) => {
    const lowerText = text.toLowerCase();

    if (
      lowerText.includes("hello") ||
      lowerText.includes("hi") ||
      lowerText.includes("hey")
    ) {
      return "Hello! 👋 How can I help you?";
    }

    if (lowerText.includes("thanks") || lowerText.includes("thank you")) {
      return "You're welcome! 😊";
    }

    if (lowerText.includes("bye")) {
      return "Goodbye! 👋";
    }

    if (lowerText.includes("help")) {
      return "I can help you with messages, GIFs and emojis! 🤖";
    }

    if (lowerText.includes("gif")) {
      return "Click the 🎥 GIF button to choose one!";
    }

    return "Interesting! Tell me more. 🤖";
  };

  // SEND MESSAGE
  const sendMessage = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    const userMessage = {
      text: message,
      type: "sent",
    };

    setMessages([...messages, userMessage]);
    setMessage("");
    setLoading(true);

    // Bot responds after 1 second
    setTimeout(() => {
      const botMessage = {
        text: getBotReply(message),
        type: "received",
      };

      setMessages((oldMessages) => [...oldMessages, botMessage]);

      setLoading(false);
    }, 1000);
  };

  // SEND GIF
  const sendGif = (gif) => {
    setMessages([
      ...messages,
      {
        text: gif.url,
        type: "sent",
        isGif: true,
      },
    ]);

    setShowGifs(false);
  };

  // EMOJI
  const addEmoji = () => {
    setMessage(message + "😀");
  };

  return (
    <section className="chat">
      {/* HEADER */}
      <div className="chat_header">
        <div className="online-users">
          <span className="online-dot"></span>
          12 users online
        </div>

        <span className="user_icon">👥</span>

        <h2>Group Chat</h2>
      </div>

      {/* CHAT WINDOW */}
      <div className="chat_window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              {msg.isGif ? (
                <img src={msg.text} alt="GIF" className="chat-gif" />
              ) : (
                <p>{msg.text}</p>
              )}
            </div>
          ))}

          {/* LOADER */}
          {loading && (
            <div className="message received">
              <p>🤖 Typing...</p>
            </div>
          )}
        </div>

        {/* GIF PICKER */}
        {showGifs && (
          <div className="gif-picker">
            <div className="gif-header">
              <h3>Choose a GIF 🎥</h3>

              <button onClick={() => setShowGifs(false)}>✖</button>
            </div>

            <div className="gif-grid">
              {gifs.map((gif, index) => (
                <button
                  key={index}
                  className="gif-item"
                  onClick={() => sendGif(gif)}
                >
                  {gif.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* INPUT */}
        <form className="chat_input" onSubmit={sendMessage}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
          />

          <button type="submit">Send</button>

          <button type="button" onClick={() => setShowGifs(!showGifs)}>
            🎥 GIF
          </button>

          <button type="button" onClick={addEmoji}>
            😀
          </button>
        </form>
      </div>
    </section>
  );
}

export default Chat;
