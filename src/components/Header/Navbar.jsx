import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
	display: ${({ navOpen }) => (navOpen ? 'block' : 'none')};
	width: 100%;
	margin-top: 1rem;
	@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
		/* ! 600px or greater. */
		width: auto;
		display: block;
		margin-top: 0;
	}
`;

const NavList = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
		/* ! 600px or greater. */
		flex-direction: row;
		justify-content: space-between;
	}
`;

const ListItem = styled.li`
	color: white;
	font-size: 1.1rem;
	text-transform: uppercase;
	a {
		text-decoration: none;
		color: white;
	}
	a:hover,
	a:focus,
	a:active {
		cursor: pointer;
		color: ${({ theme }) => theme.colors.secondary};
	}
	a.active {
		color: ${({ theme }) => theme.colors.secondary};
	}

	& + & {
		margin-top: 1rem;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
		/* ! 600px or greater. */
		& + & {
			margin-top: 0;
			margin-left: 1.5rem;
		}
	}
`;

const SpecialListItem = styled(ListItem)`
	padding: 0.3rem 1.2rem;
	background-color: ${({ theme }) => theme.colors.secondary};
	border-radius: 100rem;
	a {
		color: black;
	}
	&:hover {
		transform: scale(1.1);
		a {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
	a:hover,
	a:focus,
	a:active {
		color: ${({ theme }) => theme.colors.primary};
	}
	a.active {
		color: ${({ theme }) => theme.colors.primary};
	}
`;

const NavListItem = ({ label, route, isSpecial }) => {
	if (!isSpecial) {
		return (
			<ListItem>
				<NavLink
					to={route}
					className={({ isActive }) => (isActive ? 'active' : '')}
				>
					{label}
				</NavLink>
			</ListItem>
		);
	} else {
		return (
			<SpecialListItem>
				<NavLink
					to={route}
					className={({ isActive }) => (isActive ? 'active' : '')}
				>
					{label}
				</NavLink>
			</SpecialListItem>
		);
	}
};

const routes = [
	{
		label: 'home',
		route: '/home',
		isSpecial: false,
	},
	{
		label: 'about',
		route: '/about',
		isSpecial: false,
	},
	{
		label: 'contact',
		route: '/contact',
		isSpecial: false,
	},
	{
		label: 'sign in',
		route: '/signin',
		isSpecial: false,
	},
	{
		label: 'sign up',
		route: '/signup',
		isSpecial: true,
	},
];

const Navbar = ({ navOpen }) => {
	return (
		<StyledNavbar navOpen={navOpen}>
			<NavList>
				{routes.map((routeData) => (
					<NavListItem key={routeData.route} {...routeData} />
				))}
			</NavList>
		</StyledNavbar>
	);
};

export default Navbar;
