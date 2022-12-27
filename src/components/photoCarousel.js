import React from 'react';
import '../App.css';

const styles = {
    img: {
        width: '300px',
        paddingRight: '4px',
        paddingTop: '20px',
    }
}

export default function PhotoCarousel() {
    return (
        <div >
        <img style={styles.img} src="../../photo/1.jpg" alt="торт" />
        <img className="photoitem" src="../../photo/2.jpg" alt="торт" />
        <img className="photoitem" src="../../photo/3.jpg" alt="торт" />
        <img className="photoitem" src="../../photo/4.jpg" alt="торт" />
        <img className="photoitem" src="../../photo/5.jpg" alt="торт" />
        <img className="photoitem" src="../../photo/6.jpg" alt="торт" />
             </div>
            )
}




/* /* <div class="ant-carousel">
        <div class="ant-carousel-hider">
             <ul class="ant-carousel-list">
                 <li class="ant-carousel-element"><img src="../photo/1.jpg" alt="1"></img><p>Описание 1</p></li>
                 <li class="ant-carousel-element"><img src="../photo/2.jpg" alt="2"></img><p>Описание2</p></li>
             </ul>
        </div>
        <div class="ant-carousel-arrow-left"></div><div class="ant-carousel-arrow-right"></div>
        <div class="ant-carousel-dots"></div>
        </div> */  



        /*        <div >
        <img className="photoitem" src="../../photo/1.jpg" alt="торт" />
        <img className="photoitem" src="../../photo/2.jpg" alt="торт" />
        <img className="photoitem" src="../../photo/3.jpg" alt="торт" />
        <img className="photoitem" src="../../photo/4.jpg" alt="торт" />
        </div>*/ 