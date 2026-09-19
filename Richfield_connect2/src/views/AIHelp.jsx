import { useState } from "react";
import "../styles/AIHelp.css";

function AIHelp() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "received",
      text: "Hey! 👋 I'm Richfield AI. What would you like help with today?",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [showGifs, setShowGifs] = useState(false);
  const [showStickers, setShowStickers] = useState(false);

  /* =========================================
     QUICK HELP OPTIONS
  ========================================= */

  const quickOptions = [
    {
      icon: "📚",
      title: "Explain a Topic",
      text: "Explain a Web Technology topic to me.",
    },
    {
      icon: "📝",
      title: "Help Me Study",
      text: "Help me study for my Web Technology test.",
    },
    {
      icon: "💻",
      title: "Code Help",
      text: "Help me understand my code.",
    },
    {
      icon: "🧠",
      title: "Quiz Me",
      text: "Quiz me on Web Technology.",
    },
  ];

  /* =========================================
     GIFS
  ========================================= */

  const gifs = [
    {
      name: "👋 Wave",
      mood: "happy",
      url: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGNyNHViYWx3Z3h3YjhmMzlodWJ3bnoxNW5yODlwZTc5NnJxcDY4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgG50Fb7Mi0prBC/giphy.gif",
    },
    {
      name: "😂 Laugh",
      mood: "funny",
      url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTk4c2lmYmV6YTRvYmZ4b2dneWVmZ2g2cWJlcWJuN2I1dHF6cHV4NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wWue0rCDOphOE/giphy.gif",
    },
    {
      name: "👍 Thumbs Up",
      mood: "positive",
      url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdnbDE5M3Q5b3lyZzJwYXhqdmdjeXM2b3IyMW9yMDdpdHoxZm5yOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tIeCLkB8geYtW/giphy.gif",
    },
    {
      name: "🎉 Celebration",
      mood: "excited",
      url: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MHV4bDhrd2ViYXNubHZvd2Y1NngyZWJpdzRia3M5aTdrcDF2NDkzdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/FY5vhK1zpoJGqap917/giphy.gif",
    },
  ];

  /* =========================================
     STICKERS
  ========================================= */

  const stickers = [
    {
      emoji: "👍",
      mood: "positive",
    },
    {
      emoji: "😂",
      mood: "funny",
    },
    {
      emoji: "❤️",
      mood: "love",
    },
    {
      emoji: "😢",
      mood: "sad",
    },
    {
      emoji: "🔥",
      mood: "excited",
    },
    {
      emoji: "🤔",
      mood: "confused",
    },
  ];

  /* =========================================
     AI TEXT REPLIES
  ========================================= */

  const getAIReply = (text) => {
    const lowerText = text.toLowerCase();

    if (
      lowerText.includes("hello") ||
      lowerText.includes("hi") ||
      lowerText.includes("hey")
    ) {
      return "Hey! 👋 What are we learning today?";
    }

    if (lowerText.includes("javascript")) {
      return "JavaScript is a programming language used to make webpages interactive. For example, React uses JavaScript to create interactive components. 💻";
    }

    if (lowerText.includes("react")) {
      return "React is a JavaScript library used to build user interfaces using reusable components. Think of a component as a reusable piece of your website. ⚛️";
    }

    if (lowerText.includes("html")) {
      return "HTML provides the structure of a webpage. Things like headings, paragraphs, buttons and forms are created with HTML. 🌐";
    }

    if (lowerText.includes("css")) {
      return "CSS controls how your webpage looks. You can use it for colours, spacing, layouts, animations and responsive design. 🎨";
    }

    if (
      lowerText.includes("study") ||
      lowerText.includes("exam") ||
      lowerText.includes("test")
    ) {
      return "Absolutely! 📚 Tell me the chapter or topic and I'll help you break it down step by step.";
    }

    if (
      lowerText.includes("code") ||
      lowerText.includes("coding") ||
      lowerText.includes("bug")
    ) {
      return "Send me the code you're struggling with 💻 and I'll help you understand what each part is doing.";
    }

    if (lowerText.includes("quiz")) {
      return "Let's go! 🧠 I'll give you questions one at a time. Tell me when you're ready!";
    }

    if (lowerText.includes("thanks") || lowerText.includes("thank you")) {
      return "You're welcome! 😄 Keep cooking!";
    }

    return "I can help with studying, Web Technology, React, JavaScript, HTML, CSS and coding. 📚💻";
  };

  /* =========================================
     GIF REACTIONS
  ========================================= */

  const getGifReaction = (mood) => {
    if (mood === "happy") {
      return {
        text: "You're bringing good vibes! 😄",
        gif: gifs[3].url,
      };
    }

    if (mood === "funny") {
      return {
        text: "😂 Okay, that was actually funny!",
        gif: gifs[1].url,
      };
    }

    if (mood === "positive") {
      return {
        text: "👍 I like that energy!",
        gif: gifs[2].url,
      };
    }

    if (mood === "excited") {
      return {
        text: "YOOOO! 🔥 Let's go!",
        gif: gifs[3].url,
      };
    }

    return {
      text: "Nice GIF! 😂",
      gif: gifs[1].url,
    };
  };

  /* =========================================
     STICKER REACTIONS
  ========================================= */

  const getStickerReaction = (mood) => {
    if (mood === "positive") {
      return "👍 Nice! Let's keep going!";
    }

    if (mood === "funny") {
      return "😂 You got me!";
    }

    if (mood === "love") {
      return "❤️ Appreciate the good vibes!";
    }

    if (mood === "sad") {
      return "💙 Everything okay? I'm here if you need help.";
    }

    if (mood === "excited") {
      return "🔥 I see the energy! Let's cook!";
    }

    if (mood === "confused") {
      return "🧠 No worries. Let's break it down step by step.";
    }

    return "😊";
  };

  /* =========================================
     SEND TEXT MESSAGE
  ========================================= */

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    const userText = message;

    setMessages((oldMessages) => [
      ...oldMessages,
      {
        type: "sent",
        text: userText,
      },
    ]);

    setMessage("");
    setLoading(true);

    setTimeout(() => {
      setMessages((oldMessages) => [
        ...oldMessages,
        {
          type: "received",
          text: getAIReply(userText),
        },
      ]);

      setLoading(false);
    }, 800);
  };

  /* =========================================
     QUICK OPTION
  ========================================= */

  const useQuickOption = (text) => {
    setMessage(text);
  };

  /* =========================================
     SEND GIF
  ========================================= */

  const sendGif = (gif) => {
    const reaction = getGifReaction(gif.mood);

    setMessages((oldMessages) => [
      ...oldMessages,
      {
        type: "sent",
        isGif: true,
        gif: gif.url,
      },
      {
        type: "received",
        isGif: true,
        gif: reaction.gif,
        text: reaction.text,
      },
    ]);

    setShowGifs(false);
  };

  /* =========================================
     SEND STICKER
  ========================================= */

  const sendSticker = (sticker) => {
    setMessages((oldMessages) => [
      ...oldMessages,
      {
        type: "sent",
        isSticker: true,
        sticker: sticker.emoji,
      },
      {
        type: "received",
        text: getStickerReaction(sticker.mood),
      },
    ]);

    setShowStickers(false);
  };

  /* =========================================
     EMOJI
  ========================================= */

  const addEmoji = () => {
    setMessage((oldMessage) => oldMessage + " 😀");
  };

  return (
    <main className="ai-page">
      {/* =====================================
          AI HEADER
      ===================================== */}

      <section className="ai-hero">
        <div className="ai-icon">🤖</div>

        <div>
          <p className="ai-label">RICHFIELD CONNECT</p>

          <h1>Richfield AI</h1>

          <p>Your study and coding assistant</p>
        </div>

        <div className="ai-status">
          <span></span>
          Online
        </div>
      </section>

      {/* =====================================
          QUICK OPTIONS
      ===================================== */}

      <section className="ai-options">
        <h2>What would you like help with?</h2>

        <div className="quick-options">
          {quickOptions.map((option) => (
            <button
              key={option.title}
              className="quick-option"
              onClick={() => useQuickOption(option.text)}
            >
              <span className="quick-icon">{option.icon}</span>

              <span>
                <strong>{option.title}</strong>

                <small>Get help with this</small>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* =====================================
          AI CHAT
      ===================================== */}

      <section className="ai-chat">
        <div className="ai-chat-header">
          <div className="ai-chat-user">
            <div className="small-ai-icon">🤖</div>

            <div>
              <strong>Richfield AI</strong>

              <span>Study Assistant</span>
            </div>
          </div>

          <span className="ai-online">● Online</span>
        </div>

        {/* MESSAGES */}

        <div className="ai-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`ai-message ${msg.type}`}>
              {msg.isGif ? (
                <div>
                  <img src={msg.gif} alt="AI reaction GIF" className="ai-gif" />

                  {msg.text && <p>{msg.text}</p>}
                </div>
              ) : msg.isSticker ? (
                <div className="ai-sticker">{msg.sticker}</div>
              ) : (
                <p>{msg.text}</p>
              )}
            </div>
          ))}

          {loading && (
            <div className="ai-message received typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>

        {/* =================================
            GIF PICKER
        ================================= */}

        {showGifs && (
          <div className="ai-picker">
            <div className="picker-header">
              <h3>Choose a GIF 🎥</h3>

              <button type="button" onClick={() => setShowGifs(false)}>
                ×
              </button>
            </div>

            <div className="gif-grid">
              {gifs.map((gif) => (
                <button
                  type="button"
                  key={gif.name}
                  className="gif-item"
                  onClick={() => sendGif(gif)}
                >
                  <img src={gif.url} alt={gif.name} />

                  <span>{gif.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* =================================
            STICKER PICKER
        ================================= */}

        {showStickers && (
          <div className="ai-picker sticker-picker">
            <div className="picker-header">
              <h3>Choose a Sticker 😊</h3>

              <button type="button" onClick={() => setShowStickers(false)}>
                ×
              </button>
            </div>

            <div className="sticker-grid">
              {stickers.map((sticker, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => sendSticker(sticker)}
                >
                  {sticker.emoji}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* =================================
            INPUT
        ================================= */}

        <form className="ai-input" onSubmit={sendMessage}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask Richfield AI anything..."
          />

          <button
            type="button"
            onClick={() => {
              setShowGifs(!showGifs);
              setShowStickers(false);
            }}
            title="GIFs"
          >
            🎥
          </button>

          <button
            type="button"
            onClick={() => {
              setShowStickers(!showStickers);
              setShowGifs(false);
            }}
            title="Stickers"
          >
            😊
          </button>

          <button type="button" onClick={addEmoji} title="Add emoji">
            😀
          </button>

          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </section>
    </main>
  );
}

export default AIHelp;
