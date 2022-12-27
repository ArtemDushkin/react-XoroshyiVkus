import React from 'react';
import '../App.css';

export default function InfoBlock() {
    return (
        <div className='flex-container'>
            <img src="../../photo/me1.jpg" alt="Обо мне" style={{width: '500px'}} />
            <div style={{width: "800px", textAlign:'center'}}> 
                <p class="a">Все началось с моей свадьбы... Если же говорить о расстоянии между элементами, то тут можно использовать свойство margin, либо — можно изменить свойство display элементов на inline-block.  Благодаря этому добавляется небольшое пространство между элементами, лежащими на одном уровне, из-за того, что такие элементы рассматриваются как символы.</p> 
                <p class="b">Зарина Душкина</p>
            </div>
        </div>
    )
}