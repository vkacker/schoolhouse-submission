import type { NextPage } from 'next';
import Image from 'next/image';

import Navbar from '../components/Navbar/Navbar';

import {
	Button,
	Center,
	Flex,
	Grid,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import TableSection from '../components/TableSection/TableSection';
import { useMemo, useState } from 'react';

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
	// State should be brought in here and then distributed down via props and/or context

	const [addModal, setAddModal] = useState(false); // Used to control add modal
	const [pairsModal, setPairsModal] = useState(false); // Used to control pairs modal
	return (
		<Flex direction='column' align='center' m='0 auto'>
			<Navbar />
			<SectionHeader addModal={addModal} setAddModal={setAddModal} />
			<TableSection />

			{/* This Section will contain the Add and Pairings Modals*/}
			<Modal isOpen={addModal} onClose={setAddModal}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add New Submission</ModalHeader>
					<ModalCloseButton />
					<ModalBody></ModalBody>

					<ModalFooter>
						<Button>Confirm</Button>
						<Button>Deny</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Flex>
	);
};

export default Home;
