import { NextPage } from 'next';

import Navbar from '../components/Navbar/Navbar';

import { Flex, CircularProgress } from '@chakra-ui/react';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import TableSection from '../components/TableSection/TableSection';
import { useEffect, useState } from 'react';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { SubmissionContext } from '../context/context';
import CandidatePairModal from '../components/CandidatePairModal/CandidatePairModal';
import AddSubmissionModal from '../components/AddSubmissionModal/AddSubmissionModal';

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
	const [submissions, setSubmissions] = useState<Submission[]>([]);
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
				{submissions.length === 0 ? (
					<CircularProgress isIndeterminate color='blue.300' />
				) : (
					<TableSection />
				)}
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
