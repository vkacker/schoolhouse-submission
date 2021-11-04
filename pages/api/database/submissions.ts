// Type for Submission
type Submission = {
	subID: string;
	topic: string;
	sessionLink: string;
	email: string;
};

export let submissionData: Submission[] = [
	{
		subID: 'sub1',
		topic: 'Algebra 1',
		sessionLink: 'loom.com/a',
		email: 'a@gmail.com',
	},
	{
		subID: 'sub2',
		topic: 'Algebra 1',
		sessionLink: 'loom.com/b',
		email: 'b@gmail.com',
	},
	{
		subID: 'sub3',
		topic: 'Geometry',
		sessionLink: 'loom.com/c',
		email: 'c@gmail.com',
	},
	{
		subID: 'sub4',
		topic: 'Algebra 1',
		sessionLink: 'loom.com/d',
		email: 'd@gmail.com',
	},
	{
		subID: 'sub5',
		topic: 'Calculus',
		sessionLink: 'loom.com/e',
		email: 'e@gmail.com',
	},
	{
		subID: 'sub6',
		topic: 'Algebra 1',
		sessionLink: 'loom.com/f',
		email: 'f@gmail.com',
	},
	{
		subID: 'sub7',
		topic: 'Geometry',
		sessionLink: 'loom.com/g',
		email: 'g@gmail.com',
	},
];
