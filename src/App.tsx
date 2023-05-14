import * as React from "react";
import "./App.css";
import Subject from "./components/Subject/Subject";
import Headings from "./components/Headings/Headings";
export default function App() {
	return (
		<div className="container">
			<h1 className="title">CGPA Calculator</h1>
			<Headings />
			<Subject name="Math" credit={3} grade={3.3} />
			<Subject name="Math2" credit={3} grade={3.3} />
		</div>
	);
}
