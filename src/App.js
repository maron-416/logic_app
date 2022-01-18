import React, { useState } from 'react';
import './App.css';
import Textarea from './Textarea.js';
import Modal from 'react-modal';
import Delete from './Delete';
import Add from './Add'
import feedback from './feedback';

Modal.setAppElement('#root');
const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.85)"
  },
  content: {
    position: "absolute",
    top: "5rem",
    left: "5rem",
    right: "5rem",
    bottom: "5rem",
    borderRadius: "1rem",
    padding: "1.5rem",
  }
};

function App() {
  const [state, setState] = useState({
    modalOpen: false, //モーダル管理用
    feedbacktext: '', //フェードバック表示用
    feedbacknum:0,
    shouko:['証拠'],
    hojozentei:[['補助前提']],
    kasetsu:'仮説',
    shoukocnt:1,
    hojozenteicnt:1,
  })
  const [shoukoList,setshoukoList] = useState([1])
  const [hojozenteiList, sethojozenteiList] = useState([[1]])
  

  function updateState(name,value,index1,index2){
    if((typeof index2)!=='undefined'){
      state[name][index1][index2] = value
    } else if((typeof index1)!=='undefined'){
      state[name][index1] = value 
    } else {
      state[name] = value
    }
    setState(Object.assign({},state))   
  }

  function addshoukoList(){
    updateState('shouko','証拠',shoukoList.length)
    updateState('hojozentei',['補助前提'],shoukoList.length)
   /* for(let i=1;i<hojozenteiList[0].length;i++){
      updateState('hojozentei','補助前提',shoukoList.length,i)
    } */ //このfor文は正常に動作していればいらない
    hojozenteiList[shoukoList.length]=[state.hojozenteicnt+1];
    updateState('hojozenteicnt',state.hojozenteicnt+1);
    sethojozenteiList(Object.assign({},hojozenteiList));  
    const newItem = [...shoukoList];
    newItem.push(state.shoukocnt+1);
    updateState('shoukocnt',state.shoukocnt+1);
    setshoukoList(newItem);
    console.log(shoukoList)
    console.log(hojozenteiList)
  }

  function addhojozenteiList(index){
    updateState('hojozentei','補助前提',index,hojozenteiList[index].length)
   /* for(let i=0;i<shoukoList.length;i++){
      updateState('hojozentei','補助前提',i,hojozenteiList[index].length)
    } *///このfor文は正常に動作していればいらない 
    hojozenteiList[index][hojozenteiList[index].length] = state.hojozenteicnt+1;
    updateState('hojozenteicnt',state.hojozenteicnt+1);
    sethojozenteiList(Object.assign({},hojozenteiList));
   
  //  console.log(hojozenteiLists);
  }

  function deleteshoukoList(index){
    if(shoukoList.length > 1){
      state.shouko.splice(index,1);
      state.hojozentei.splice(index,1)
      shoukoList.splice(index,1);
      // setshoukoList(Object.assign({},shoukoList));
      // console.log(shoukoList)
       hojozenteiList[index].splice(index,1);
       sethojozenteiList(Object.assign({},hojozenteiList));
    }
    
  }

  function deletehojozenteiList(index1,index2){
    if(hojozenteiList[index1].length>0){
      console.log(index1,index2)
      state.hojozentei[index1].splice(index2,1);
      hojozenteiList[index1].splice(index2,1);
      sethojozenteiList(Object.assign({},hojozenteiList));
    }
    
  }

  return (
    <>
    <h1>演習</h1>
    <h2>仮説形成</h2>
    <p>仮説形成とは「あることがらをもとに、そのことがらをうまく説明してくれるような仮説を立てるタイプの推測」のことを言います。<br/>
    ※推測とは「既知のことがらを根拠にしてそこからまだ知られてない新しいことを結論として導こうとする論証」のことを言います。


    </p>
    <ul style={{backgroundColor:'#EEE',padding:'5px' }}>
    <p>証拠 
    <Add addList={addshoukoList}/>
    </p>
    
    <div style={{display:'flex'}}>
    
    {shoukoList.map((value1, i) => <span style={{ marginLeft: '10px' }} key={value1}>
      <div>
      <Textarea value={state.shouko[i]} targetname={'shouko'} index1={i} updateState={updateState}/>
      <Delete deleteList={deleteshoukoList} index1={i}/>
      <div style={{display:'flex'}}>
      <img src={process.env.PUBLIC_URL + '/images/arrow.png'} alt='lmage' width='143' height='300'/>
      <div style={{backgroundColor:'#CCC' ,padding:'5px' }}>
      <p>補助前提
      <Add addList={addhojozenteiList} index={i} />
      </p>
        {
        hojozenteiList[i].map((value2, j) => <div key={value1*1000+value2}>
            <Textarea value={state.hojozentei[i][j]} targetname={'hojozentei'} index1={i} index2={j} updateState={updateState}/>
            <Delete deleteList={deletehojozenteiList} index1={i} index2={j}/>
        </div>)} 
      </div>
      </div>
      </div>
    </span>)}
    </div>
    <p>仮説</p>
    <Textarea value={state.kasetsu} targetname={'kasetsu'} updateState={updateState} widthcnt={shoukoList.length}/>
    
    </ul>
    <div style={{marginLeft:'5px'}}>
    <h2>フィードバック</h2>
      <button onClick={(e) => feedback(state,updateState)}>
        フィードバックを受ける
      </button>
      <p className="text">{state.feedbacktext}</p>
    </div>
    
{
    <Modal isOpen={state.modalOpen} style={modalStyle}>
          <p>{state.feedbacktext}</p>
          <button onClick={() => updateState('modalOpen',false)}>Close</button>
    </Modal>
}
    </>
  );
}

export default App;
