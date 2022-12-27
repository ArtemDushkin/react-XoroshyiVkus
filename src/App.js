import React from 'react'
import logo from './logo.JPG';
import './App.css';
import NavItem from './components/navItems';
import PhotoCarousel from './components/photoCarousel';
import Header from './components/header';
import InfoBlock from './components/infoblock';
import DessertType from './components/dessertType';
import Contacts from './components/contacts';




const headers = [
  'О нас',
  'Меню',
  'Вкусы',
  'Варианты оформления',
  'Итоговый заказ',
  'Контакты',
]



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
           </header>
      <body>
        <NavItem />
        <PhotoCarousel />
        <hr></hr>
        <Header title={headers[0]}/>
        <InfoBlock />
        <hr></hr>
        <Header  title={headers[1]}/>
        <DessertType src='/photo/tart.jpg' type='tart' description='Тарты по 300 за шт минимум 6 одного вкуса'/>
        <DessertType src='/photo/7.jpg' type='cupcake' description='Капкейки 200 за штуку минимум 6 одного вкуса'/>
        <DessertType src='/photo/trifle.jpeg' type='trifle' description='Трайфлы 250 за штуку минимум 4 одного вкуса'/>
        <DessertType src='/photo/konfety.jpg' type='candy' description='Конфеты 80 за штуку, можно ассорти'/>
        <DessertType src='/photo/ecler.jpeg' type='ecler' description='Эклеры 150 за штуку, можно ассорти'/>
        <hr></hr>
        <Header  title={headers[2]}/>
        <DessertType src='/photo/1.jpg' type='' description='Банан-шоколад (шоко коржи,банановая пропитка, шоколадный ганаш, карамелизированные бананы, сливочно-сырный крем)'/>
        <DessertType src='/photo/1.jpg' type='' description='Вишневый (шоко коржи, вишневая пропитка, вишневая начинка и сливочный крем-чиз на темном шоколаде)'/>
        <DessertType src='/photo/1.jpg' type='' description='Шоколадный шоколад (Шоколадные коржи, шоколадный ганаш, шоколадный крем)'/>
        <DessertType src='/photo/1.jpg' type='' description='Полина (шоко коржи, сливочно-сметанный мусс, хрустящий слой из шоколада и орехов, крем на сгущенке)'/>
        <DessertType src='/photo/1.jpg' type='' description='Медовик со сметанным кремом (можно добавить фрукты/ягоды/чернослив/орех/курагу)'/>
        <DessertType src='/photo/1.jpg' type='' description='Молочная девочка (тонкие коржи на сгущенке со сметанным/заварным/сливочным кремом, можно добавить фрукты/ягоды/чернослив/курагу/мак)'/>
        <DessertType src='/photo/1.jpg' type='' description='Апельсин-шоколад с безе (шоко коржи, апельсиновый курд, крем-чиз, шоколадный крем, корж безе, апельсиновая пропитка)'/>
        <DessertType src='/photo/1.jpg' type='' description='Ягодный (ванильный бисквит, крем-чиз на сливках, кули из Микса ягод)'/>
        <DessertType src='/photo/1.jpg' type='' description='Чернично-лимонный с маком (ванильный бисквит с маком, черничная пропитка, черничный крем, лимонный курд)'/>
        <DessertType src='/photo/1.jpg' type='' description='Тропический (кокосовый бисквит, ганаш манго-маракуйя, кули манго, крем-чиз)'/>
        <DessertType src='/photo/1.jpg' type='' description='Карамельная груша (ванильные бисквиты пропитанные грушевым сиропом, груши в домашней карамели с грецким орехом, сливочно-сырный крем)'/>
        <DessertType src='/photo/1.jpg' type='' description='Молочный ломтик (шоко бисквит, пропитка, ванильный мусс, шоко мусс)'/>
        <DessertType src='/photo/1.jpg' type='' description='Клубничный пломбир (сливочный бисквит, ванильный чизкейк, клубничное компотэ, клубничный крем)'/>
        <DessertType src='/photo/1.jpg' type='' description='Вишнево-кокосовый (миндально-кокосовые бисквиты, кокосовая пропитка, кокосовый чизкейк, вишневый соус, сырный крем)'/>
        <DessertType src='/photo/1.jpg' type='' description='Кофейный хлопок (шоко бисквит, хлопковый чизкейк, кофейный крем, солёная карамель, арахис)'/>
        <DessertType src='/photo/1.jpg' type='' description='Шоколадный с лесными ягодами (очень шоколадный бисквит, шоколадный ганаш, кули из лесных ягод(малина, черника, смородина)'/>
         <hr></hr>
        <Header  title={headers[3]}/>
        <PhotoCarousel />
        <hr></hr>
        <Header  title={headers[4]}/>
        <hr></hr>
        <Header  title={headers[5]}/>
        <Contacts />
      </body>
    </div>
  );
}

export default App;
