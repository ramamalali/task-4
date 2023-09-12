import React from 'react';
import './MainStylee/Catiguris.css';

function CatigurisCard({ title , descrip }) {
  return (
    <div className='one-card'>
                <div className='left-side'>
                    <div>
                    <i class="fa-solid fa-atom" style={{color: '#00aeff'}}></i>
                    </div>
                </div>
                <div className='right-side'>
                    <p>{title}</p>
                    <span>{descrip}</span>
                </div>
            </div>
  )
}

export default CatigurisCard;