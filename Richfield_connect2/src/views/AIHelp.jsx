import { useState } from "react";
import { Link } from "react-router-dom";
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

  const pick = (replies) => {
    return replies[Math.floor(Math.random() * replies.length)];
  };

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

  const stickers = [
    { emoji: "👍", mood: "positive" },
    { emoji: "😂", mood: "funny" },
    { emoji: "❤️", mood: "love" },
    { emoji: "😢", mood: "sad" },
    { emoji: "🔥", mood: "excited" },
    { emoji: "🤔", mood: "confused" },
  ];

  const getAIReply = (text) => {
    const lowerText = text.toLowerCase();

    if (
      lowerText.includes("hello") ||
      lowerText.includes("hi") ||
      lowerText.includes("hey")
    ) {
      return pick([
        "Heyyy! 👋 What are we cooking today?",
        "Yooo! 😄 Ready to learn something?",
        "Hey! 👋 I'm here and ready to help. What's up?",
        "What's good! 🤖📚 What are we working on today?",
      ]);
    }

    if (lowerText.includes("javascript")) {
      return pick([
        "JavaScript makes webpages interactive. 💻 Think buttons, forms, menus and dynamic content. Want me to show you a simple example?",
        "JavaScript is where webpages start getting interesting! ⚡ It lets you add logic and interaction to your HTML and CSS.",
        "JS time! 🟨 JavaScript lets your website actually respond to what the user does. Want a beginner example?",
      ]);
    }

    if (lowerText.includes("react")) {
      return pick([
        "React lets you build websites using reusable components. ⚛️ Think of each component as a LEGO piece for your UI.",
        "React time! ⚛️ Components, props and state are the big three to understand first. Want me to break them down?",
        "React is basically about building your UI from reusable pieces. 🧩 Once components click, the rest becomes much easier.",
      ]);
    }

    if (lowerText.includes("html")) {
      return pick([
        "HTML gives your webpage its structure. 🌐 Headings, paragraphs, buttons, forms and images all start here.",
        "HTML is basically the skeleton of your webpage. 🦴 CSS makes it look good and JavaScript makes it interactive.",
        "Let's talk HTML! 🌐 If you understand elements, attributes and nesting, you're already building a solid foundation.",
      ]);
    }

    if (lowerText.includes("css")) {
      return pick([
        "CSS is responsible for the look of your website. 🎨 Colours, spacing, layouts, animations and responsive design all live here.",
        "CSS time! 🎨 Think of HTML as the structure and CSS as the outfit. 😎",
        "Want your website looking clean? CSS is the answer. 🔥 We can work on Flexbox, Grid, responsive design or animations.",
      ]);
    }

    if (
      lowerText.includes("study") ||
      lowerText.includes("exam") ||
      lowerText.includes("test")
    ) {
      return pick([
        "Absolutely! 📚 Tell me the topic and we'll break it down into small pieces.",
        "Study mode activated! 🧠🔥 Give me the chapter or topic and let's tackle it together.",
        "We've got this! 💪📚 Send me the topic you're studying and I'll make it easier to understand.",
        "Exam coming up? 😭 No stress. Give me the topic and I'll help you work through it step by step.",
      ]);
    }

    if (
      lowerText.includes("code") ||
      lowerText.includes("coding") ||
      lowerText.includes("bug") ||
      lowerText.includes("error")
    ) {
      return pick([
        "Send me the code! 💻🔍 We'll figure out what's going wrong.",
        "Bug detected! 🐛😂 Paste the code here and let's hunt it down.",
        "Let's debug this thing. 🔧💻 Show me the code and I'll explain what's happening.",
        "No panic! 😎 Bugs are part of coding. Send me the code and we'll work through it.",
      ]);
    }

    if (lowerText.includes("quiz")) {
      return pick([
        "YOOOO 🧠🔥 Quiz mode activated! I'll give you one question at a time.",
        "Let's test that brain! 😈📚 Ready for question number one?",
        "Quiz time! 🎯 I'll start easy and we can increase the difficulty.",
        "Alright, professor 😎🧠 Let's see what you know!",
      ]);
    }

    if (lowerText.includes("thanks") || lowerText.includes("thank you")) {
      return pick([
        "You're welcome! 😄 Keep cooking! 🔥",
        "Anytime! 🤝 Keep building!",
        "No problem! 😎 That's what I'm here for.",
        "You got it! 💙 Now go make that code behave 😂",
      ]);
    }

    if (
      lowerText.includes("confused") ||
      lowerText.includes("don't understand") ||
      lowerText.includes("dont understand")
    ) {
      return pick([
        "No worries! 🧠💙 Let's slow it down and make it simple.",
        "That's completely fine! 😄 Tell me which part is confusing and we'll break it down.",
        "We've all been there 😂 Send me the part you don't understand and I'll explain it step by step.",
      ]);
    }

    if (
      lowerText.includes("hard") ||
      lowerText.includes("difficult") ||
      lowerText.includes("struggling")
    ) {
      return pick([
        "Yeah, some topics can hit hard 😭. Let's break it into smaller pieces.",
        "Don't stress! 💪 Difficult doesn't mean impossible. Let's tackle one part at a time.",
        "I got you! 🤝 Show me what you're struggling with and we'll simplify it.",
      ]);
    }

    if (
      lowerText.includes("good") ||
      lowerText.includes("great") ||
      lowerText.includes("awesome")
    ) {
      return pick([
        "Ayyy! 🔥 I like that energy!",
        "Let's gooo! 😎 Keep that momentum!",
        "That's what I like to hear! 🚀",
        "W! 🏆 Keep going!",
      ]);
    }

    return pick([
      "Hmm 🤔 I'm listening. Tell me a little more and I'll try to help.",
      "Interesting! 👀 Give me some more details.",
      "I'm with you! 🤖 Tell me what you're working on.",
      "Let's figure it out together. 💻🧠 What exactly do you need help with?",
      "I might need a little more context 😅. Tell me what you're trying to do.",
    ]);
  };

  const getGifReaction = (mood) => {
    if (mood === "happy") {
      return pick([
        {
          text: "You're bringing good vibes! 😄🔥",
          gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHR0emFvb2R4ZGRiYzRleDg4ZzQ4cDBuaTgyMDUzNmY2bTJ6NXpmdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aD18gkTDHDJZu12/giphy.gif",
        },
        {
          text: "Ayyy! 😎 I see those good vibes!",
          gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExazdueDhxeWxsZjlwYjAzeGFlYmN6cWplM2V3a2prYzZoOXkycTV6cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8npVoLpVpaeCp5siDr/giphy.gif",
        },
        {
          text: "Okayyy! 😂 SpongeBob approves!",
          gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmk4bTR2dGVydXp1MGtrNHlkMDdkMjM5ajNuOXRwM2Vyd2RiaHRzMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7absbD7PbTFQa0c8/giphy.gif",
        },
      ]);
    }

    if (mood === "funny") {
      return pick([
        {
          text: "😂 Okay, that was actually funny!",
          gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHhjdHd0d2IxZDFtenZsNmxlazdvNWltYXJ6bmN3dnE4eGl0YjhvNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VFBSi1R1q8K0TfLd0v/giphy.gif",
        },
        {
          text: "BROOO 😂 You got me!",
          gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2h5dWlkZWd4MG55ZzVmMXBpY3YweGZlaHg5YWtxbDhyNmR1cDJlbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AFYfA31DZoiug31eky/giphy.gif",
        },
        {
          text: "Nahhh 😭😂 That's actually hilarious!",
          gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExamc0bnhxbzZnaHM4Nm0wYXZscGYycHZwM213YW4yc2NqNnA3cGxtMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2rAIp46q7RjRE5mjHN/giphy.gif",
        },
      ]);
    }

    if (mood === "positive") {
      return pick([
        {
          text: "👍 I like that energy!",
          gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnR6YWltb3ZtZXA2YTZmdTRyNDlpdHhjcW92OXVieDNkY3V1eXNlbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Od0QRnzwRBYmDU3eEO/giphy.gif",
        },
        {
          text: "That's what I'm talking about! 🔥",
          gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2xkdzVqZWt0cTk3YWxoN3djN3k3MHhyMWF5aGp4MW16YmV3aHowcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jtJRgZuqZRYYEU5ZVS/giphy.gif",
        },
        {
          text: "Big W! 🏆 Keep it going!",
          gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3Y1dmwyMDc1am1ibmJubGliY2hkbHFqa3BrbWtxdWJ6NXJ6dGU5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Z3TNui6d50hlzXpxnp/giphy.gif",
        },
      ]);
    }

    if (mood === "excited") {
      return pick([
        {
          text: "YOOOO! 🔥 Let's go!",
          gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDE5bDVldDY5eWVyNGoyb3dpdmc3a21vMzVhM2IxNTRveng1aGZlayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JnZdM8OOYA3mk7HyFn/giphy.gif",
        },
        {
          text: "WE'RE COOKING! 🚀🔥",
          gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjd6ZWhybGh1M2tmOG1hbWJjZGU2eWFybzZmZXBhamhhamZvMW5sbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UO5elnTqo4vSg/giphy.gif",
        },
        {
          text: "AYYY! 😤🔥 I like the energy!",
          gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmdsZmUwdXd0Z21hM3RrMDd3ZWpsbGQ1OHNzYXAyMGF5ZnR1dzF2NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XwAOa90ASfcGkIfGVU/giphy.gif",
        },
      ]);
    }

    return pick([
      {
        text: "Nice GIF! 😂",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamQ1bDJ4MjRuZDB6Mms1aXN1cWU2bWl4N2tpZTgwMnNjY2lqcm9qbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QsU3vYYHB69R3bvBMK/giphy.gif",
      },
      {
        text: "😂 Okay, I see you!",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHZhYWhxaTA2cTR5eWF6cHBuODQ5bnk0eHNzdWpydXFnMjduN3V3OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/egvJaBsUkhs9xzCMjr/giphy.gif",
      },
      {
        text: "That GIF says everything! 😭",
        gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXRwdWc3M3p1b2V0ZHk2bWZuZG5oOWZkeW9oa2JucnJxbTZ2aHJmYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m2Q7FEc0bEr4I/giphy.gif",
      },
    ]);
  };

  const getStickerReaction = (mood) => {
    if (mood === "positive") {
      return pick([
        "👍 Nice! Let's keep going!",
        "🔥 That's the energy we need!",
        "😎 Big W! Keep it up!",
        "💪 You're doing great! Don't stop now!",
      ]);
    }

    if (mood === "funny") {
      return pick([
        "😂 You got me!",
        "😭😂 Nahhh, that was good!",
        "🤣 Okay, I wasn't ready for that!",
        "😂 Brooo, you're actually funny!",
      ]);
    }

    if (mood === "love") {
      return pick([
        "❤️ Appreciate the good vibes!",
        "❤️ Awww, right back at you!",
        "🥹 That's wholesome!",
        "💙 Good vibes only around here!",
      ]);
    }

    if (mood === "sad") {
      return pick([
        "💙 Everything okay? I'm here if you need help.",
        "🫂 Don't worry, we'll figure it out together.",
        "💙 It's okay to have a rough day. Take it one step at a time.",
        "🤝 I'm here. Want to talk about what's bothering you?",
      ]);
    }

    if (mood === "excited") {
      return pick([
        "🔥 I see the energy! Let's cook!",
        "YOOOO! 🚀🔥 Let's go!",
        "😤🔥 Now THAT'S the energy!",
        "🚀 We're locked in! Let's do this!",
      ]);
    }

    if (mood === "confused") {
      return pick([
        "🧠 No worries. Let's break it down step by step.",
        "🤔 That's okay! Let's simplify it together.",
        "💡 Don't stress. I'll explain it in a simpler way.",
        "🧠 One step at a time. We'll get it!",
      ]);
    }

    return pick(["😊 Nice!", "😎 I see you!", "👍 Got you!", "🔥 Good vibes!"]);
  };

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

  const useQuickOption = (text) => {
    setMessage(text);
  };

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

  const addEmoji = () => {
    setMessage((oldMessage) => oldMessage + " 😀");
  };

  return (
    <main className="ai-page">
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
