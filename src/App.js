import './App.css';
import ChatTitle from './components/ChatTitle/ChatTitle';
import LeftSideBarBottom from './components/LeftSideBarBottom/LeftSideBarBottom';
import VerticalIconWithHeader from './components/VerticalIconWithHeader/VerticalIconWithHeahder';

function App() {
  return (
    <div className="App">
      <div className="chat-gpt d-flex ">
        <div className="left-sidebar px-3">
          <div className='top-text'>
            <span className="new-chat"><i className="fas fa-plus"></i> New Chat</span>
          </div>
          <div className="left-sidebar-top">
            <ChatTitle Title="React and ASP.Net Skills"/>
            <ChatTitle Title="how to remove any git changes from local with commit id"/>
          </div>
          <hr className="text-primary" />
          <div className="left-sidebar-bottom">
            <LeftSideBarBottom IconName='fa-solid fa-trash-can' Text='Clear conversations'/>
            <LeftSideBarBottom IconName='fa-solid fa-circle-half-stroke' Text='Change Theme'/>
            <LeftSideBarBottom IconName='far fa-wrench' Text='Updates & FAQ'/>
            <LeftSideBarBottom IconName='fas fa-sign-out' Text='Login'/>
          </div>
        </div>
        <div className="right-sidebar bg-dark">
          <div className="chat-body">
            <div className=''>
              <h2 className='text-center text-danger chatGPtText'>ChatGPT</h2>
              <div className='row d-flex justify-content-center'>
              <div className='verticalIconWithTitle justify-content-center d-flex col-2 col-lg-3 p-0 col-md-3 col-sm-12'>
                  <VerticalIconWithHeader IsParagraph={false} IconName='far fa-smile-beam' Title='Examples' />
                  <VerticalIconWithHeader IsParagraph={true} IconName='' Title='Explain quantum computing in simple terms' />
                  <VerticalIconWithHeader IsParagraph={true} IconName='' Title='Explain quantum computing in simple terms' />
                  <VerticalIconWithHeader IsParagraph={true} IconName='' Title='Explain quantum computing in simple terms' />
              </div>
              <div className='verticalIconWithTitle justify-content-center d-flex col-2 col-lg-3 p-0 col-md-3 col-sm-12'>
                <VerticalIconWithHeader IsParagraph={false} IconName='fas fa-yin-yang' Title='Capabilities' />
                <VerticalIconWithHeader IsParagraph={true} IconName='' Title='Got any creative ideas for a 10 year old’s birthday?' />
                <VerticalIconWithHeader IsParagraph={true} IconName='' Title='Got any creative ideas for a 10 year old’s birthday?' />
                <VerticalIconWithHeader IsParagraph={true} IconName='' Title='Got any creative ideas for a 10 year old’s birthday?' />
              </div>
              <div className='verticalIconWithTitle justify-content-center d-flex col-2 col-lg-3 p-0 col-md-3 col-sm-12'>
                <VerticalIconWithHeader IsParagraph={false} IconName='fas fa-exclamation-triangle' Title='Limitations' />
                <VerticalIconWithHeader IsParagraph={true} IconName='' Title='How do I make an HTTP request in Javascript?' />
                <VerticalIconWithHeader IsParagraph={true} IconName='' Title='How do I make an HTTP request in Javascript?' />
                <VerticalIconWithHeader IsParagraph={true} IconName='' Title='How do I make an HTTP request in Javascript?' />
              </div>
              </div>
            </div>
            <div className="bottom-input text-center mt-5">
              <div className='position'>
                <textarea  className='p-2' ></textarea>
                <span className='sendMessage text-success'><i className="fas fa-paper-plane"></i></span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
