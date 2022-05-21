import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const AnimatedSpinner = styled.div`
	width: 2rem;
	height: 2rem;
	margin: 0;
	padding: 0;
	border-radius: 50%;
	border: 4px solid transparent;
	border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
	border-right: 4px solid ${({ theme }) => theme.colors.primary};
	animation: 750ms ${spin} linear infinite;
`;

const Spinner = () => {
	return <AnimatedSpinner />;
};

export default Spinner;
