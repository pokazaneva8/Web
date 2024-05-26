import React from 'react';
import Price from '../../components/Price.js';

const Tasks = ({}) => {
    return (
        <div>
          <div className='boxWindow'>
              <div className='itemBox'>
                <br/>
                <span className="product_1">Ремонт забора</span>
                <Price price={300}/>
              </div>
          </div>
        </div>
    );
  };
  
  export default Tasks;

//   showTask_1() {
//     this.setState({
//       content:(
//         <div className='taskBox'>
//           <div id = 'taskName'>Ремонт забора</div>
//           <div id='taskText'>
//             <p>Необходимо выполнить ремонт <br/> забора на участке сада. </p>
//             <p> Все необходимые для этого <br/> инстументы и 
//               материалы можно получить у садовника.</p>
//             <br/>
//           </div>
//           <div className='taskPriceBox' >
//             <div class = "taskCoin">
//               <img src={coinLogo} alt="Coin" width="30" height="30" vspace="0" hspace = "5" />
//             </div>
//             <div>
//               <span className="taskPriceText">300</span>
//             </div>
//           </div>
//             <button className = 'reportBox'> Загрузить отчётность</button>
//         </div>
//       ),
//       showMainContent: false
//     })
//   }