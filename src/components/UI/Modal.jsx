import React from 'react';
import styled from 'styled-components';

const BackDrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Card = styled.div`
	width: 90%;
	max-width: 30rem;
	z-index: 100;
	background-color: white;
	border-radius: 1rem;
	min-height: 10rem;
	padding: 0.7em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const CardParent = styled.div`
	flex-grow: 1;
`;

const CloseButtonContainer = styled.div`
	/* margin-top: auto; */
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`;

const CloseButton = styled.button`
	border: none;
	outline: none;
	background-color: ${({ theme }) => theme.colors.primary};
	padding: 0.3em 1em;
	font-size: 1.1rem;
	border-radius: 0.5rem;
	&:hover {
		color: ${({ theme }) => theme.colors.secondary};
		cursor: pointer;
		transform: scale(1.01);
	}
`;

const Modal = ({ children, onClose }) => {
	const clickHandler = (event) => {
		event.preventDefault();
		if (event.target === event.currentTarget) {
			onClose();
		}
	};

	return (
		<BackDrop onClick={clickHandler}>
			<Card>
				<CardParent>{children}</CardParent>
				<CloseButtonContainer>
					<CloseButton onClick={onClose}>Close</CloseButton>
				</CloseButtonContainer>
			</Card>
		</BackDrop>
	);
};

export default Modal;
