import styled, {css} from 'styled-components';

const TabItem = styled.li`
  ${({tabState, title}) => {
    return (
      tabState === title &&
      css`
        border-bottom: 1px solid;
      `
    );
  }}
`;

function TabList({tab, tabState, setTabState}) {
  const handleTabState = ({target}) => {
    setTabState(prevState => {
      return {...prevState, category: target.title};
    });
  };

  return (
    <TabItem tabState={tabState} title={tab.title} onClick={handleTabState}>
      {tab.title}
    </TabItem>
  );
}

export {TabList};
