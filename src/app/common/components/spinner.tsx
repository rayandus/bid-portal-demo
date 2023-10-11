import React from 'react';
import styled from '@emotion/styled';
import appLogo from '../../../assets/app_logo.png';

const Spinner = () => {
  return (
    <SpinnerContainer>
      <Pulsate>
        <Image src={appLogo} />
      </Pulsate>
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Pulsate = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #7fb900;
  border-radius: 50%;
  text-align: center;
  font-size: 30px;
  color: #000;
  line-height: 50px;

  &:before,
  &:after {
    position: absolute;
    top: -52px;
    left: -52px;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    content: '';
    box-shadow: inset 0 0 0 50px #7fb900;
    transition:
      transform 0.2s,
      opacity 0.2s;
  }

  &:after {
    animation: pulsating 1.25s infinite linear;
  }

  @keyframes pulsating {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    50% {
      transform: scale(1);
      opacity: 0.6;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;

const Image = styled.img`
  position: absolute;
  top: -73px;
  left: -73px;
  z-index: 1;
`;

export default Spinner;
