import React from 'react';
import TodaysPlan from './TodaysPlan';

function SFCTodaysPlanApp(props) {
  const { onButtonClick, hasPlan } = props;
  return (
     <div className="body">
       {hasPlan ? <TodaysPlan /> : null}
       <button onClick={onButtonClick}>
         계획없음
       </button>
     </div>
  );
}

export default SFCTodaysPlanApp;
