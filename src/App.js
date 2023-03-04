import './App.css';
import ChatTitle from './components/ChatTitle/ChatTitle';
import LeftSideBarBottom from './components/LeftSideBarBottom/LeftSideBarBottom';

function App() {
  return (
    <div className="App">
      <div className="chat-gpt d-flex bg-dark">
        <div className="left-sidebar px-3">
          <div className='top-text'>
            <text className="new-chat"><i class="fas fa-plus"></i> New Chat</text>
          </div>
          <div className="left-sidebar-top">
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
            <ChatTitle Title="Chat Title"/>
          </div>
          <hr className="text-primary" />
          <div className="left-sidebar-bottom">
            <LeftSideBarBottom IconName='fa-solid fa-trash-can' Text='Clear conversations'/>
            <LeftSideBarBottom IconName='fa-solid fa-circle-half-stroke' Text='Change Theme'/>
            <LeftSideBarBottom IconName='far fa-wrench' Text='Updates & FAQ'/>
            <LeftSideBarBottom IconName='fas fa-sign-out' Text='Login'/>
          </div>
        </div>
        <div className="right-sidebar">
          <h2 className='text-success'>right side bar</h2>
          <div className="chat-body"></div>
          <div className="bottom-input">{/* <input type="text" /> */}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
