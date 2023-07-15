import companylogo from './image/fplogo.png'
import quickmenu from './image/QuickMenu.png'
import downicon from './image/down.png'
import login from './image/login.png'
import id from './image/id.png'
import search from './image/search.png'
import sidebar from './image/sidebar.png'
import mainboard from './image/mainboard.png'
import info from './image/info.png'

import './App.css'; 

function App() {
  return (
    <div className="App">
      <div className="smart">
        <span className="smart_text">김수연님, 스마트 알리미가 오늘도 당신을 응원합니다!</span>
        <img className='downicon' src={downicon} />
      </div>
      <div className="header">
        <div className="login-container">
          <img className='login' src={login} />
        </div>
        <div className="image-container">
          <img className="logoimage" src={companylogo} alt="Image" />
        </div>
        <div className="quick-container">
          <img className="quickmenu" src={quickmenu} alt="Image" />
        </div>
      </div>
      <div className='menu-container'>
        <img className='id' src={id} />
        <div className='menus'>
          <span className='menu'>고객정보</span>
          <span className='menu'>터치자료</span>
          <span className='menu'>재무컨설팅</span>
          <span className='menu'>가입/청약</span>
          <span className='menu'>성과관리</span>
          <span className='menu'>고객관리활동</span>
          <span className='menu'>영업소통센터</span>
          <span className='menu'>One Stop</span>
        </div>
        <img className='search' src={search} />
      </div>
      <div className='todo'>
        <span className='todotext'>오늘의 할일</span>
      </div>
      <div className='main-container'>
        <div className='main-serve'>
          <div className='board-container'>
            <img className='main' src={mainboard} />
          </div>
          <span className='serve'>방문약속 고객 체크</span>
          <span className='separator1'></span>
          <img className='info' src={info} />
        </div>
        <div className='side-bar'>
          <img className='side' src={sidebar} />
        </div>
      </div>
    </div>
  );
}

export default App;
