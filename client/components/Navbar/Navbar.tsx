import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Logo from './Logo/Logo';

const Navbar = () => {
	return (
		<Flex
			align='center'
			borderBottom={2}
			borderStyle='solid'
			borderColor='#CBD5E0'
			width='100%'
			color='gray.600'
			bg='white'
			minH='60px'
			py={2}
			px={4}
		>
			<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
				<Logo style={{ fontSize: '120px' }} />
			</Flex>
		</Flex>
	);
};

export default Navbar;
