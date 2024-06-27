import React from 'react'

const PokeStatBar = ({label, value, maxValue}) => {

  const barWidth = (value/maxValue) * 100 + '%'

  return (
    <div className='stat-bar'>
      <div className='stat-bar__label'>{label}: <span className='font-poppins text-white dark:text-black font-[600]'>{value}</span>
      </div>
      <div className='flex items-center gap-1'>
        <div className='stat-bar__container'>
          <div className='stat-bar__value' style={{width: barWidth}}></div>
        </div>
        <div className='text-white font-bold text-[1.2rem]'>{Math.floor(parseInt(barWidth))}%</div>
      </div>
      
      
    </div>
  );
};

export default PokeStatBar
