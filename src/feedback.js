// フィードバックに表示する文字列を更新する

function feedback(state,updateState){
    let text='';
    switch(state.feedbacknum){
        case 0:
            if(state.kasetsu===''||state.kasetsu==='仮説'){
                updateState('feedbacktext','仮説を入力してください');
                break
            }
            updateState('feedbacknum',state.feedbacknum+1)
        case 1:
            if(state.shouko[0]===''||state.shouko[0]==='証拠'){
                updateState('feedbacktext','証拠を入力してください');
                break
            }
            updateState('feedbacknum',state.feedbacknum+2)
        case 2:
          /*  if(state.hojozentei[0][0]===''||state.hojozentei[0][0]==='補助前提'){
                updateState('feedbacktext','補助前提を入力してください');
                break
            }
            updateState('feedbacknum',state.feedbacknum+1) */
        case 3:
            text = '「' + state.kasetsu + '」という仮説は以下の全ての証拠を説明していますか';
            for(let i=0;i<state.shouko.length;i++){
                text += '\n・'+state.shouko[i]
            }
            updateState('feedbacktext',text);
            break
        case 4:
            text = '「' + state.kasetsu + '」という仮説で用いている概念は以下の補助前提で全て説明されていますか';
            for(let i=0;i<state.shouko.length;i++){
                for(let j=0;j<state.hojozentei[i].length;j++){
                    text += '\n・'+state.hojozentei[i][j]
                }
            }
            updateState('feedbacktext',text);
            break  
        case 5:
            text = '以下の補助前提で用いられている全ての概念が説明されていますか';
            for(let i=0;i<state.shouko.length;i++){
                for(let j=0;j<state.hojozentei[i].length;j++){
                    text += '\n・'+state.hojozentei[i][j]
                }
            }
            updateState('feedbacktext',text);
            break  
        case 6:
            text = '以下の仮説と補助前提で用いられている概念の関係が示されていますか\n・' + state.kasetsu;
            for(let i=0;i<state.shouko.length;i++){
                for(let j=0;j<state.hojozentei[i].length;j++){
                    text += '\n・'+state.hojozentei[i][j]
                }
            }
            updateState('feedbacktext',text);
            break 
        case 7:
            text = '以下の全ての証拠と補助前提は正しい情報ですか';
            for(let i=0;i<state.shouko.length;i++){
                text += '\n・'+state.shouko[i]
            }
            for(let i=0;i<state.shouko.length;i++){
                for(let j=0;j<state.hojozentei[i].length;j++){
                    text += '\n・'+state.hojozentei[i][j]
                }
            }
            updateState('feedbacktext',text);
            break 
        case 8:
            text = '以下の証拠と補助前提のソースを補助前提で明示する必要はないですか';
            for(let i=0;i<state.shouko.length;i++){
                text += '\n・'+state.shouko[i]
            }
            for(let i=0;i<state.shouko.length;i++){
                for(let j=0;j<state.hojozentei[i].length;j++){
                    text += '\n・'+state.hojozentei[i][j]
                }
            }
            updateState('feedbacktext',text);
            break 
        case 9:
            text = '「' + state.kasetsu + '」という仮説は';
            text += '\n以下の補助前提をもとにして';
            for(let i=0;i<state.shouko.length;i++){
                for(let j=0;j<state.hojozentei[i].length;j++){
                    text += '\n・'+state.hojozentei[i][j]
                }
            }
            text += '\n以下の証拠を説明していますか';
            for(let i=0;i<state.shouko.length;i++){
                text += '\n・'+state.shouko[i] + ''
            }
            
            updateState('feedbacktext',text);
            break
        case 10:
            text = '以下の証拠は';
            for(let i=0;i<state.shouko.length;i++){
                text += '\n・' + state.shouko[i] + ''
            }
            text += '\n以下の補助前提をもとにして';
            for(let i=0;i<state.shouko.length;i++){
                for(let j=0;j<state.hojozentei[i].length;j++){
                    text += '\n・'+state.hojozentei[i][j]
                }
            }
            text += '\n「' + state.kasetsu + '」という仮説を導いていますか';
            
            updateState('feedbacktext',text);
            break
        case 11:
            text = '以下の全ての証拠を説明できる仮説は他に考えられませんか';
            for(let i=0;i<state.shouko.length;i++){
                text += '\n・'+state.shouko[i]
            }
            updateState('feedbacktext',text);
            break 
        case 12:
            updateState('feedbacktext','全てのフィードバックを終えました。もう一度押すと最初のフィードバックに戻ります');
            break 
    }
    if(state.feedbacknum < 12 && state.feedbacknum > 2){
        updateState('feedbacknum',state.feedbacknum+1);
      }else{
        updateState('feedbacknum',0);
      }
}

export default feedback; 