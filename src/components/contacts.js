import React from 'react';
import '../App.css';

export default function Contacts(props) {
    return (
        <div>
            
            <div  className='a' style={{position:"relative", overflow:"hidden"}}>
                <div>
                    <p>Телефон +7 951 398 3254</p>
                </div>
                <div>
                    <p>Страничка в <a href="https://instagram.com/xoroshiy_vkus?igshid=YmMyMTA2M2Y=">Instagram</a></p>
                </div>
                <address >
                    Новосибирск, Проспект Дзержинского, д.34/2.
                    Россия
                </address>
                <iframe title="This is a unique title" src="https://yandex.ru/map-widget/v1/-/CCUrE8c6KD" width="560" height="400" frameborder="1" allowfullscreen="true" style={{position:'relative', margin: '20px'}}></iframe>
            </div>
        </div>
    )
}