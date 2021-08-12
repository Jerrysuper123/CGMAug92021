import chris from './images/chris.jpeg'
import './App.css';

function App() {
  return (
    <div className="container">
      <Slide>
        <h2>为什么来小组？你想从小组得到什么？</h2>
      </Slide>

      <Slide>
        <h2>我们小组独有的文化是什么？</h2>
      </Slide>
      
      <Slide>
        <h2>你觉得你可以做什么让小组更好？</h2>
        <p>响应和参与</p>
      </Slide>

      <Slide>
        <h2>远景</h2>
        <ol>
          <li>三个星期小讨论</li>
            <ol>
              <li>相关</li>
              <li>实用</li>
              <li>重点</li>
            </ol>
            <img src={chris}/>
          <li>一个祷告游戏周</li>
          <li>成员轮流分配组织 - 拥有权=》成长</li>
          <li>每天的基本 - 读经和祷告</li>
        </ol>
      </Slide>

    </div>
  );
}

export default App;

const Slide=({children})=>{
  return(
    <div className="slide">
      {children}
  </div>
  
  );
}