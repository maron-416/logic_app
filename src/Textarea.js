import React, { Component } from 'react';
import styled from 'styled-components'

const STextarea = styled.textarea`
height:40px
`

function Textarea ({value,targetname,index1,index2,updateState,widthcnt}){
    let setwidth=160;
    if(targetname==='kasetsu'){
        setwidth=widthcnt*380
    }  
    return <STextarea 
    
        style={{width:setwidth}}
        defaultValue={value}
        onChange={(e) => updateState(targetname,e.target.value,index1,index2)}
        >
    </STextarea>
}

export default Textarea