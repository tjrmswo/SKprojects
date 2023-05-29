import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TabExample = ({ tabValue }) => {
    const handleTabChange = (event, newValue) => {
      // 탭 변경 시의 동작
    };
  
    return (
      <div>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="탭 1" value={0} />
          <Tab label="탭 2" value={1} />
          <Tab label="탭 3" value={2} />
        </Tabs>
  
        {tabValue === 0 && (
          // 탭 1의 내용 표시
          <div>탭 1 내용</div>
        )}
  
        {tabValue === 1 && (
          // 탭 2의 내용 표시
          <div>탭 2 내용</div>
        )}
  
        {tabValue === 2 && (
          // 탭 3의 내용 표시
          <div>탭 3 내용</div>
        )}
      </div>
    );
  };
  
  export default TabExample;