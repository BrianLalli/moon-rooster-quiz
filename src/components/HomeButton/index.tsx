import React from 'react';
import styled from 'styled-components';
import { useQuiz } from '../../context/QuizContext';
import { ScreenTypes } from '../../types';
import Button from '../ui/Button';
import { ReactComponent as HomeIconSVG } from '../../assets/icons/126572_home_house_icon.svg';

const StyledHomeIcon = styled(HomeIconSVG)`
  width: 20px;
  height: 20px;
`;

const HomeButtonWrapper = styled.div`
  margin-top: 20px; // Adjust the margin as needed
`;

const HomeButton = () => {
  const { setCurrentScreen } = useQuiz();

  const goToHome = () => {
    setCurrentScreen(ScreenTypes.QuizTopicsScreen);
  };

  return (
    <HomeButtonWrapper>
      <Button
        text="Home"
        icon={<StyledHomeIcon />}
        iconPosition="left"
        onClick={goToHome}
      />
    </HomeButtonWrapper>
  );
};

export default HomeButton;
