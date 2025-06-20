import NewPrompt from "../../components/newPrompt/NewPrompt";
import "./chatPage.css";

const ChatPage = () => {
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">This is a message from the AI</div>
          <div className="message user">This is a message from the user</div>
          <div className="message">This is a message from the AI</div>
          <div className="message user">This is a message from the user</div>
          <div className="message">This is a message from the AI</div>
          <div className="message user">This is a message from the user</div>
          <div className="message">This is a message from the AI</div>
          <div className="message user">This is a message from the user</div>
          <div className="message">This is a message from the AI</div>
          <div className="message user">This is a message from the user</div>
          <div className="message">This is a message from the AI</div>
          <div className="message user">This is a message from the user</div>
          <div className="message">This is a message from the AI</div>
          <div className="message user">This is a message from the user</div>
          <div className="message">This is a message from the AI</div>
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
