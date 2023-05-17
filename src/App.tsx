import * as React from "react";
import { useState } from "react";
import "./App.css";
import Subject from "./components/Subject/Subject";
import Headings from "./components/Headings/Headings";
import AddButton from "./components/AddButton/AddButton";
import CGPAViewer from "./components/CGPAViewer/CGPAViewer";
function fetchSubjectsFromStorage() {
	let subjects = localStorage.getItem("subjects");
	if (subjects) {
		return JSON.parse(subjects);
	}
	return [];
}
export default function App() {
	const [subjects, setSubjects] = useState<(string | number)[][]>([]);
	const addNewSubject = () => {
		let newSubjects = [...subjects, ["MAT281", 3, 4]];
		setSubjects(newSubjects);
	};
	React.useEffect(() => {
		const subjects = fetchSubjectsFromStorage();
		setSubjects(subjects);
	}, []);
	React.useEffect(() => {
		localStorage.setItem("subjects", JSON.stringify(subjects));
	}, [subjects]);

	return (
		<div className="container">
			<h1 className="title">CGPA Calculator</h1>
			<Headings />
			{subjects.map((s, index) => (
				<Subject
					name={s[0] as string}
					credit={s[1] as number}
					grade={s[2] as number}
					key={index}
					onChange={(newName, newCredits, newGpa) => {
						// update the subjects state with the new values
						const newSubjects = [...subjects];
						newSubjects[index] = [newName, newCredits, newGpa];
						setSubjects(newSubjects);
					}}
				/>
			))}
			<AddButton addNewSubject={addNewSubject} />
			<CGPAViewer subjects={subjects} />
		</div>
	);
}
