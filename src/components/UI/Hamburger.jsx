import React, { useState } from 'react';
import { HamburgerButton, HamburgerContent } from '../../styles/StyledElements';

const Hamburger = (props) => {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		setOpen((prev) => !prev);
	};

	return (
		<HamburgerButton
			onClick={() => {
				toggleOpen();
				if (props.onClick) {
					props.onClick();
				}
			}}
		>
			{!open && (
				<>
					<HamburgerContent />
					<HamburgerContent />
					<HamburgerContent />
				</>
			)}
			{open && <p>X</p>}
		</HamburgerButton>
	);
};

export default Hamburger;
