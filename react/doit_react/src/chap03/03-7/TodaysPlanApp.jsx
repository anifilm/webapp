import React from 'react';
import TodaysPlan from '../03-2/TodaysPlan';

class TodaysPlanApp extends React.Component {
  render() {
    const { onButtonClick, hasPlan } = this.props;
    return (
     <div className="body">
       {hasPlan ? <TodaysPlan /> : null}
       <button onClick={onButtonClick}>
         계획없음
       </button>
     </div>
    );
  }
}

export default TodaysPlanApp;
