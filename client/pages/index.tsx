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
import { createContext, useMemo, useState } from 'react';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { SubmissionContext } from '../context/context';
import CandidatePairModal from '../components/CandidatePairModal/CandidatePairModal';
import AddSubmissionModal from '../components/AddSubmissionModal/AddSubmissionModal';

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

const Home: NextPage = ({ submissionsList }) => {
	// State is initially feteched from "database" and then put into a state hook
	const [submissions, setSubmissions] = useState(submissionsList);

	const [addModal, setAddModal] = useState(false); // Used to control add modal
	const [pairsModal, setPairsModal] = useState(false); // Used to control pairs modal

	return (
		<Flex direction='column' align='center' m='0 auto'>
			<Navbar />
			<SectionHeader
				addModal={addModal}
				setAddModal={setAddModal}
				pairsModal={pairsModal}
				setPairsModal={setPairsModal}
			/>

			<SubmissionContext.Provider value={{ submissions, setSubmissions }}>
				<AddSubmissionModal addModal={addModal} setAddModal={setAddModal} />

				<TableSection />
			</SubmissionContext.Provider>

			{/* This Section will contain the Add and Pairings Modals*/}
			{pairsModal ? (
				<CandidatePairModal
					pairsModal={pairsModal}
					setPairsModal={setPairsModal}
				/>
			) : null}
		</Flex>
	);
};

export async function getStaticProps() {
	const client = new ApolloClient({
		uri: '/graphql',
		cache: new InMemoryCache(),
	});

	const { data } = await client.query({
		query: gql`
			query {
				getAllSubmissions {
					subID
					topic
					sessionLink
					email
				}
			}
		`,
	});
	return {
		props: {
			submissionsList: data.getAllSubmissions,
		},
	};
}

export default Home;
