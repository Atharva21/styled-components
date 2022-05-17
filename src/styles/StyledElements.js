import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Svg = styled.svg`
	fill: white;
	height: 2rem;
	/* filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.4)); */
	animation: ${spin} 5s linear infinite;
	&:hover {
		cursor: pointer;
		fill: ${({ theme }) => theme.colors.secondary};
	}
`;

export const Container = styled.div`
	width: 90%;
	max-width: 1000px;
	margin: 0 auto;
`;

export const HamburgerContent = styled.div`
	width: 100%;
	padding: 0.14rem;
	background-color: white;
	border-radius: 1rem;
	margin: 0;
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
`;
export const HamburgerButton = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 0;
	padding: 0;
	border: none;
	outline: none;
	width: 1.5rem;
	height: 1.5rem;
	background-color: ${({ theme }) => theme.colors.primary};
	align-items: center;
	font-size: 1.5rem;
	text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3);
	color: white;
	font-weight: 700;
	&:hover {
		cursor: pointer;
		text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.8);
		${HamburgerContent} {
			box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.8);
		}
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
		/* ! 600px or greater. */
		display: none;
	}
`;

export const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.colors.primary};
	padding-top: 1rem;
	padding-bottom: 1rem;
`;
