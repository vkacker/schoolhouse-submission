import type { NextPage } from 'next';
import Image from 'next/image';

import Navbar from '../components/Navbar/Navbar';

import { Flex } from '@chakra-ui/react';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import TableSection from '../components/TableSection/TableSection';

/**
 * State Notes
 * -------------
 * Navbar --> It will not inherit or manipulate any states
 *
 * SectionHeader --> It will activate two modals: A modal where a user can submit a submission
 *                  (this will update the list of submissions) and a modal where the user can see the generated pairs
 *                  (this will require the list of submissions).
 *
 * TableSection --> It will inherit the list of submissions to display them
 *
 */

const Home: NextPage = () => {
	return (
		<Flex direction='column' align='center' m='0 auto'>
			<Navbar />
			<SectionHeader />
			<TableSection />
		</Flex>
	);
};

export default Home;
