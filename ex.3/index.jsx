import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'


ReactDOM.render(
    <div>
        <Family lastName = "Fortes">
            <Member name="Jose"/>
            <Member name="Henrique"/>
        </Family>
    </div>
, document.getElementById('app'))