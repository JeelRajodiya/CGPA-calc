import * as React from "react";
import "./CGPAViewer.css";
type CGPAViewerProps = {
	subjects: (string | number)[][];
};

function calculateCGPA(subjects: (string | number)[][]): number {
	let creditsArr = subjects.map((subject) => subject[1]);
	let gradesArr = subjects.map((subject) => subject[2]);
	let totalCredits = creditsArr.reduce(
		(a, b) => Number(a) + Number(b),
		0
	) as number;
	let credits = 0;
	for (let i = 0; i < subjects.length; i++) {
		credits += (creditsArr[i] as number) * (gradesArr[i] as number);
	}
	return Math.round((credits / totalCredits) * 100) / 100;
}
export default function CGPAViewer(props: CGPAViewerProps) {
	return (
		<div>
			<h1>CGPA: {calculateCGPA(props.subjects)}</h1>
		</div>
	);
}
