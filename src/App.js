import { useState } from 'react';
import './App.css';
import ChatTitle from './components/ChatTitle/ChatTitle';
import HomePageDefaultView from './components/HomePageDefaultView/HomePageDefaultView';
import LeftSideBarBottom from './components/LeftSideBarBottom/LeftSideBarBottom';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [isShowMessageBody, setIsShowMessageBody] = useState(true);
  const [valueArray,setArrayValue] = useState([])
  const [isThemeChange, setIsThemeChange] = useState(true);
  // const [isChatGPT, setIsChatGPT] = useState(false);
  const onSubmit = () => {
    setArrayValue((pre) => [...pre, {user:'me', value:inputValue}])
    setArrayValue((pre) => [...pre, {user:'robot', value:"I am doing good  from robot, Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but  also the leap into electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}]);
    setInputValue('')
    setIsShowMessageBody(false)
    // api call will be there
  }
  const onColorChange = (isChanged) => {
    setIsThemeChange(isChanged)
  }
  return (
    <div className="App">
      <div className="chat-gpt d-flex ">
        <div className="left-sidebar px-3">
          <div onClick={() => setIsShowMessageBody(true)} className='top-text'>
            <span className="new-chat"><i className="fas fa-plus"></i> New Chat</span>
          </div>
          <div className="left-sidebar-top">
            <ChatTitle Title="React and ASP.Net Skills"/>
            <ChatTitle Title="how to remove any git changes from local with commit id"/>
          </div>
          <hr className="text-primary" />
          <div className="left-sidebar-bottom">
            <LeftSideBarBottom IconName='fa-solid fa-trash-can' Text='Clear conversations'/>
            <LeftSideBarBottom  returnFunc={onColorChange} IconName='fa-solid fa-circle-half-stroke' Text='Change Theme'/>
            <LeftSideBarBottom IconName='fa-solid fa-wrench' Text='Updates & FAQ'/>
            <LeftSideBarBottom IconName='fas fa-sign-out' Text='Login'/>
          </div>
        </div>
        <div className={isThemeChange?"right-sidebar right-sidebarOnChange": 'bg-dark right-sidebar'}>
          <div className="chat-body">
            {
              isShowMessageBody?
                <HomePageDefaultView/>:
              <div className='pt-5'>
                  {
                    valueArray?.map((value, index) => (
                      <div key={index}>
                      <div className={value.user === 'robot'? 'pt-0 bgForRobot messageBody d-flex justify-content-center' : 'messageBody d-flex justify-content-center'}>
                        <div className='useImage d-flex'>
                          <img height={40} width={40}  src={value.user === 'me'?
                          'https://avatars.githubusercontent.com/u/67551591?v=4':"/image/chatGPT.png"} alt="User" />
                          <div className='message'>
                            <p className='p-4 pt-0'>{value.value}</p>
                          </div>
                        </div>
                      </div>
                      </div>
                    ))
                  } 
              </div>
            }
            <div className="bottom-input text-center mt-5">
              <div className='position'>
               <form onSubmit={(e)=>{e.preventDefault(); onSubmit() }}>
                  <input value={inputValue} rows={1} onChange={(e) => setInputValue(e.target.value)} className='p-2' ></input>
                  <span className='sendMessage'><i onClick={onSubmit} className="fas fa-paper-plane"></i></span>
               </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
