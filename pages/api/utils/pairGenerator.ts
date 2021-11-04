// Type for Submission
interface Submission {
	subID: string;
	topic: string;
	sessionLink: string;
	email: string;
}

export const pairGenerator = (submissionData: Submission[]) => {
	// Separating by Topic
	let topicDict: any = {};

	submissionData.forEach((submissionObject) => {
		let hasKey = submissionObject.topic in topicDict;
		if (!hasKey) {
			topicDict[submissionObject.topic] = [];
		}
		topicDict[submissionObject.topic].push(submissionObject);
	});

	// Creating Pairs
	let pairArray = [];

	// Go through each key in the topic dictionary
	for (let key in topicDict) {
		// Shuffle the array
		let topic = key;
		let topic_array = topicDict[topic];
		topic_array = topic_array.sort(() => Math.random() - 0.5);

		// If only one person in topic, then cannot make pair, thus invalid
		if (topic_array.length == 1) {
			let submissionID = topic_array[0].subID;
			let pair = {
				reviewer: submissionID,
				reviewee: submissionID,
				topic: topic,
				validPair: false,
			};
			pairArray.push(pair);
			continue;
		}

		// Go through the topic array and make pairs
		// Pairs are created by generating a Cn graph
		for (let i = 0; i < topic_array.length; i++) {
			// Variable Definitions
			let reviewerID = null;
			let revieweeID = null;
			// Cycle Back Case
			if (i == topic_array.length - 1) {
				reviewerID = topic_array[i].subID;
				revieweeID = topic_array[0].subID;
			} else {
				reviewerID = topic_array[i].subID;
				revieweeID = topic_array[i + 1].subID;
			}

			let pair = {
				reviewer: reviewerID,
				reviewee: revieweeID,
				topic: topic,
				validPair: true,
			};
			pairArray.push(pair);
		}
	}

	return pairArray;
};
