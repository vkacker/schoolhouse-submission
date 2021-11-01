import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Header = () => {
	return (
		<Flex
			align='center'
			borderBottom={2}
			borderStyle='solid'
			borderColor='gray.400'
			width='100%'
			color='gray.600'
			bg='white'
			minH='60px'
			py={2}
			px={4}
		>
			<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
				<Text>Schoolhouse Logo goes here</Text>
			</Flex>
		</Flex>
	);
};

export default Header;
