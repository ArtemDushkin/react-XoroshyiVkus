import React from 'react';
import '../App.css';

export default function NavItem() {
    return (
    <nav id="nav"> 
        <a class="a" href="#C1" title="История о том, как я стала кондитером">Обо мне</a>
        <a class="a" href="#C2" title="Выбери свой десерт">Меню</a>
        <a class="a" href="#C3" title="Поможем выбрать тот самый">Вкусы</a>
        <a class="a" href="#C4" title="выберите свой дизайн">Мои работы</a>
        <a class="a" href="#C5" title="Все что нужно для связи">Заказать</a>
    </nav>
    )
}