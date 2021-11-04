import { NextPage } from 'next';
import Image from 'next/image';

import Navbar from '../components/Navbar/Navbar';

import { Flex } from '@chakra-ui/react';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import TableSection from '../components/TableSection/TableSection';
import { createContext, useEffect, useMemo, useState } from 'react';

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

type Submission = {
	subID: string;
	topic: string;
	sessionLink: string;
	email: string;
};

// interface HomeProps {
// 	submissionsList: Submission[];
// }

const Home: NextPage = () => {
	// State is initially feteched from "database" and then put into a state hook
	const [submissions, setSubmissions] = useState<any[]>([]);
	useEffect(() => {
		const fetchSubmissions = async () => {
			const client = new ApolloClient({
				uri: 'https://polar-ravine-66624.herokuapp.com/api/graphql',
				// uri: 'http://localhost:3000/api/graphql',
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

			setSubmissions(data.getAllSubmissions);
		};

		fetchSubmissions();
	}, []);

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
				{addModal ? (
					<AddSubmissionModal addModal={addModal} setAddModal={setAddModal} />
				) : null}
				<TableSection />
			</SubmissionContext.Provider>

			{pairsModal ? (
				<CandidatePairModal
					pairsModal={pairsModal}
					setPairsModal={setPairsModal}
				/>
			) : null}
		</Flex>
	);
};

export default Home;
