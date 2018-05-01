import React from 'react';
import PropTypes from 'prop-types';

import { MainWrapper, ClickerWrapper, ClickerHeader, ClickBtn } from './style';

const Main = ({ count, clickBtn }) => {
  const isReady = count === 0;
  return (
    <MainWrapper>
      <ClickerWrapper>
        <ClickerHeader>
          {isReady ?
            'Looks like you\'re ready! Happy coding!' :
            'Are you ready to work hard?'
          }
        </ClickerHeader>
        {
          !isReady &&
          <ClickBtn onClick={clickBtn} >
            {count} clicks
          </ClickBtn>
        }
      </ClickerWrapper>
    </MainWrapper>
  );
};

export default Main;

Main.propTypes = {
  count: PropTypes.number.isRequired,
  clickBtn: PropTypes.func.isRequired
};
