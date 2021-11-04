// Function to generate color for Badge
export const renderColor = (topic: string) => {
	switch (topic.toLowerCase()) {
		case 'pre-algebra':
		case 'algebra 1':
		case 'algebra 2':
		case 'sat prep':
		case 'experimental':
			return 'blue';
		case 'geometry':
		case 'trigonometry':
		case 'ap review':
			return 'green';
		case 'pre-calculus':
		case 'calculus':
		case 'statistics':
			return 'purple';
		case 'indian exams':
			return 'orange';
		case 'community':
			return 'pink';
		default:
			return 'grey';
	}
};
