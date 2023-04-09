import { createRef, useEffect,  useState } from 'react';
import './App.css';
import ChatTitle from './components/ChatTitle/ChatTitle';
import HomePageDefaultView from './components/HomePageDefaultView/HomePageDefaultView';
import LeftSideBarBottom from './components/LeftSideBarBottom/LeftSideBarBottom';
import { API, codeText } from './index.constant';
import PropagateLoader  from 'react-spinners/PropagateLoader'
import { Alert } from 'bootstrap';
function App() {
  const [inputValue, setInputValue] = useState('');
  const [isShowMessageBody, setIsShowMessageBody] = useState(true);
  const [valueArray,setArrayValue] = useState([])
  const [chatLeftTitles,setChatLeftTitles] = useState([])
  const [isThemeChange, setIsThemeChange] = useState(true);
  const inputRef = createRef();
  const [isChatGPT, setIsChatGPT] = useState(Boolean); 

  useEffect(() => {
      inputRef?.current?.scrollIntoView({ behavior: "smooth" })
  }, [valueArray]);

  useEffect(() => {
    const data = localStorage.getItem('userMessage')
    setChatLeftTitles(JSON.parse(data)?.sort((a,b) => b.time - a.time))
}, [setChatLeftTitles]);

  const onSubmit = async () => {
    setArrayValue((pre) => [...pre, {user:'me', value:inputValue}])
    if(isShowMessageBody){
      const UserInput = []
      const data = localStorage.getItem('userMessage')
      if(data) {
        const jsonData = JSON.parse(data)
        UserInput.push(...jsonData)
      }
      UserInput.push({inputValue: inputValue, time: new Date().getTime()})
      localStorage.setItem('userMessage', JSON.stringify(UserInput))
      setChatLeftTitles(UserInput.sort((a,b)=> b.time - a.time))
    }
    const requestBody = {
      prompt:inputValue,
      ip: '103.161.105.12'
    }
    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    }
    setIsChatGPT(true)
      // api call will be there
      fetch(API,  requestOptions)
      .then(_res => _res.json())
      .then(response => {
        setIsChatGPT(false)
        if(response.success) {
          setArrayValue((pre) => [...pre, {user:'robot', value:response.message}]);
        }
    }).catch((err) => {
      if(err){
        setIsChatGPT(false)
        alert("Something went wrong. Please try again later")
        setArrayValue((pre) => [...pre, {user:'robot', value:codeText}]);
        console.log('>>>>>>>>>>>', codeText.split('\n'))
      }
    })
    setInputValue('')
    setIsShowMessageBody(false)

  }
  const onColorChange = (isChanged) => {
    setIsThemeChange(isChanged)
  }
  const LogInFunc = ()  => {
    alert('Login functionality will be implemented soon Thanks!')
  }
  const clearConversation  = () => {
    alert("Are you sure you want to clear conversation")
    setArrayValue([])
    setChatLeftTitles([])
    setIsShowMessageBody(true)
  }
  const updateAndFaq = ()  => {
    console.log('>>>>>>>>>>>', "Ok")
  }
  return (
    <div className={isThemeChange?"AppLight App": 'bg-dark App'}>
      <div className="chat-gpt d-flex ">
        <div className="left-sidebar px-3">
          <div onClick={() =>{setIsShowMessageBody(true); setArrayValue([])}} className='top-text'>
            <span className="new-chat"><i className="fas fa-plus"></i> New Chat</span>
          </div>
          <div className="left-sidebar-top">
            {
              chatLeftTitles?.map((ChatInput) =><ChatTitle Title={ChatInput.inputValue}/>)
            }
            <ChatTitle Title="You Don't have any chat history ⚡"/>
          </div>
          <hr className="text-primary" />
          <div className="left-sidebar-bottom">
            <LeftSideBarBottom returnFunc={()=> clearConversation()} IconName='fa-solid fa-trash-can' Text='Clear conversations'/>
            <LeftSideBarBottom returnFunc={onColorChange} IconName='fa-solid fa-circle-half-stroke' Text='Change Theme'/>
            <LeftSideBarBottom returnFunc={() => updateAndFaq()} IconName='fa-solid fa-wrench' Text='Updates & FAQ'/>
            <LeftSideBarBottom returnFunc={()=>LogInFunc()} IconName='fas fa-sign-out' Text='Login'/>
          </div>
        </div>
        <div className={isThemeChange?"right-sidebar right-sidebarOnChange": 'bg-dark right-sidebar'}>
          <div className="chat-body">
            {
              isShowMessageBody?
                <HomePageDefaultView/>:
              <div className='pt-5'>
                <div className='floating'>{isChatGPT?<PropagateLoader color="#FF7A48" />: ''}</div>
                  {
                    valueArray?.map((value, index) => (
                      <div key={index}>
                      <div className={value.user === 'robot'? 'pt-0 bgForRobot messageBody d-flex justify-content-center' : 'messageBody d-flex justify-content-center'}>
                        <div className='useImage d-flex'>
                          <img height={40} width={40}  src={value.user === 'me'?
                          '/image/man.png':"/image/chatGPT.png"} alt="User" />
                            {isChatGPT}
                          <div className='message'>
                            <p ref={inputRef} className='p-4 pt-0'>{value.value?.split('\n')?.map(text => (
                                <>
                                <p className={text.includes('//')? "textGreen": ""}>{text}</p>
                                </>
                              ))
                              }
                            </p>
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
                  <input disabled={isChatGPT} value={inputValue} rows={1} onChange={(e) => setInputValue(e.target.value)} className='p-2' ></input>
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
