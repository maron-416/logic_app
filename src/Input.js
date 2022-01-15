import React, { Component } from 'react';
import styled from 'styled-components'

const SInput = styled.input`
width : 80px
`

function Input ({value}){
    return <SInput 
        type='number'
        min={0}
        defaultValue={value}
        >
    </SInput>
}

export default Input