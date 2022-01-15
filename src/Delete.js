import React, { Component } from 'react';
import styled from 'styled-components'

const SDelete = styled.button`
margin-Left: 2px
`

function Delete ({deleteList,index1,index2}){
    return <SDelete 
    onClick={(e) => {
        if((typeof index2)!=='undefined'){
            deleteList(index1,index2);
        }else{
            deleteList(index1);
        }
    }
    }
    >
        削除
    </SDelete>
}

export default Delete