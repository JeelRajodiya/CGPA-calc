import * as React from "react";
import { useState } from "react";
import "./App.css";
import Subject from "./components/Subject/Subject";
import Headings from "./components/Headings/Headings";
import AddButton from "./components/AddButton/AddButton";
export default function App() {
	const [subjects, setSubjects] = useState<(string | number)[][]>([]);
	React.useEffect(() => {
		let newSubjects = [...subjects, ["MAT2810", 3, 4]];
		setSubjects(newSubjects);
	}, []);
	React.useEffect(() => {
		console.log(subjects);
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
			<AddButton />
		</div>
	);
}
