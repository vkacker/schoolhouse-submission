// React Imports
import { createContext, Dispatch } from 'react';

export const SubmissionContext = createContext<{
	submissions: any;
	setSubmissions: Dispatch<any>;
}>({
	submissions: [],
	setSubmissions: () => {},
});
