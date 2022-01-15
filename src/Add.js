import React, { Component } from 'react';
import styled from 'styled-components'

const SAdd = styled.button`
margin-Left : 10px
`

function Add ({addList , index}){
    return <SAdd 
    onClick={(e) => {addList(index)}
    }
    >
        追加
    </SAdd>
}

export default Add