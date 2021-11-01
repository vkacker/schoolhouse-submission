import type { NextPage } from 'next';
import Image from 'next/image';
import Header from '../components/Header/Header';
import styles from '../styles/Home.module.css';

import { Flex } from '@chakra-ui/react';

const Home: NextPage = () => {
	return (
		<Flex direction='column' align='center' m='0 auto'>
			<Header />
			<div>Section Header</div>
			<div>Main Content Here</div>
		</Flex>
	);
};

export default Home;
