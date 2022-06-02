import React, { useState } from 'react';
import { TabContainer, TabButton, Title, Indicator } from '@common/Tab/style';

const TabComponent = ({ tabs, setActiveTab, activeTab }) => {
  return (
    <>
      <TabContainer>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            <Title active={activeTab === index}>{tab.title}</Title>
            <Indicator active={activeTab === index} />
          </TabButton>
        ))}
      </TabContainer>
      {tabs[activeTab].render()}
    </>
  );
};

export default TabComponent;
