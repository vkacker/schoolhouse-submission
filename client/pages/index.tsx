import type { NextPage } from 'next';
import Image from 'next/image';

import Navbar from '../components/Navbar/Navbar';

import { Flex } from '@chakra-ui/react';
import SectionHeader from '../components/SectionHeader/SectionHeader';

const Home: NextPage = () => {
	return (
		<Flex direction='column' align='center' m='0 auto'>
			<Navbar />
			<SectionHeader />
			<div>Main Content Here</div>
		</Flex>
	);
};

export default Home;
