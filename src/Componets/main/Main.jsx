import React, { useRef, useContext, useEffect } from 'react';
import '../main/main.css';
import useAuth from '../../FIrebase/useAuth'; 
import { Context } from '../../context/Context';
import sendIcon from './send.png'; 
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

const Main = () => {
  const { user } = useAuth(); 
  const textareaRef = useRef(null);
  const { onSent, recentPrompt, showResults, loading, resultData, setInput, input } = useContext(Context);

  const handleCardClick = (promptText) => setInput(promptText);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSent(input);
    }
  };
  
  const handleInput = (e) => {
    setInput(e.target.value);
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [input]);

  const handleSend = () => {
    if (input.trim() !== '') {
      onSent(input.trim());
    }
  };
  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter style={darcula} language={match[1]} PreTag="div" {...props}>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
  };
  return (
    <div className="main">
      <div className="nav">
        <p>Cypher</p>
        <img src={user?.photoURL} alt="userphoto" />
      </div>
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <p><span>Hello, {user?.displayName?.split(' ')[0]}</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => handleCardClick("Provide the code to create a personal website for me")}>
                <p>Provide the code to create a personal website for me</p>
              </div>
              <div className="card" onClick={() => handleCardClick("Explain Convolutional Neural Networks (CNN)")}>
                <p>Explain Convolutional Neural Networks (CNN)</p>
              </div>
              <div className="card" onClick={() => handleCardClick("How to create a simple chatbot using Python libraries and React for user interface")}>
                <p>How to create a simple chatbot using Python libraries and React for user interface</p>
              </div>
              <div className="card" onClick={() => handleCardClick("Debug the code and explain the error in it")}>
                <p>Debug the code and explain the error in it</p>
              </div>
            </div>
          </>
        ) : (
          <div className="messages">
            <div className="message-user">
              <img src={user?.photoURL} alt="" className='avatar' />
              <div className="message-content">{recentPrompt}</div>
              
            </div>
            <div className="result-data">
              {loading ? (
                <div className="loader"><hr /><hr /><hr /><hr /><hr /></div>
              ) : (
                <div className="response"> 
                  <div className="message-bot">
                  <img src="cypher.jpg" alt="" className='avatar'/>
                  <div className="message-content1">
                    <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>{resultData}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <textarea
              ref={textareaRef}
              onChange={handleInput}
              value={input}
              placeholder="Enter the prompt here"
              onKeyDown={handleKeyDown}
              rows={1}
            />
            <div>
              <img src={sendIcon} alt="Send" onClick={handleSend} className="send-icon" />
            </div>
          </div>
          <div className="bottom-info">
            <p>Powered by <strong className="gemini">GEMINI API</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
