import { createContext, Dispatch } from 'react';

export const SubmissionContext = createContext<{
	submissions: any;
	setSubmissions: Dispatch<any>;
}>({
	submissions: [],
	setSubmissions: () => {},
});

// export const SubmissionContext = createContext({
// 	submissions: [],
// 	setSubmissions: (value: any) => void,
// });
