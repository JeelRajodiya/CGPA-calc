import * as React from "react";
import "./Subject.css";
// @ts-ignore
import EditIcon from "./edit.png";
type SubjectProps = {
	name: string;
	credit: number;
	grade: number;
	onChange: (newName: string, newCredits: number, newGpa: number) => void;
};

type SubjectEntryProps = {
	field: string | number;
	setField: React.Dispatch<React.SetStateAction<any>>;
	isFieldDisabled: boolean;
	onChange: (newField: any) => void;

	setIsFieldDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};
function SubjectEntry({
	field: field,
	setField: setField,
	isFieldDisabled: isFieldEditable,
	setIsFieldDisabled: setIsFieldDisabled,
	onChange: onChange,
}: SubjectEntryProps) {
	const fieldRef = React.useRef<HTMLInputElement>(null);
	const handleClick = () => {
		setIsFieldDisabled((e) => !e);
		setTimeout(
			() => (fieldRef.current ? fieldRef.current.focus() : null),
			0
		);
	};
	React.useEffect(() => {
		if (fieldRef.current) {
			const width = fieldRef.current.value.length;
			fieldRef.current.style.width = `${Math.min(width + 2, 15)}ch`;
		}
	}, [field]);
	const handleFocusLose = () => {
		setIsFieldDisabled((e) => !e);
	};
	return (
		<span className="subject-entry" onBlur={handleFocusLose}>
			<input
				className="field"
				disabled={isFieldEditable}
				value={field}
				ref={fieldRef}
				onChange={(e) => {
					setField(e.target.value);
					onChange(e.target.value);
					setTimeout(
						() =>
							fieldRef.current ? fieldRef.current.focus() : null,
						0
					);
				}}
			></input>
			<img
				src={EditIcon}
				onClick={handleClick}
				className="edit-icon"
				alt="edit icon"
			/>
		</span>
	);
}

export default function Subject(props: SubjectProps) {
	const [name, setName] = React.useState(props.name);
	const [credit, setCredit] = React.useState(props.credit);
	const [grade, setGrade] = React.useState(props.grade);

	const [isNameDisabled, setIsNameDisabled] = React.useState(true);
	const [isCreditDisabled, setIsCreditDisabled] = React.useState(true);
	const [isGradeDisabled, setIsGradeDisabled] = React.useState(true);

	return (
		<div className="subject bubble-element">
			<SubjectEntry
				{...{
					field: name,
					setField: setName,
					isFieldDisabled: isNameDisabled,
					setIsFieldDisabled: setIsNameDisabled,
				}}
				onChange={(newName) => {
					props.onChange(newName, credit, grade);
				}}
			/>
			<SubjectEntry
				{...{
					field: credit,
					setField: setCredit,
					isFieldDisabled: isCreditDisabled,
					setIsFieldDisabled: setIsCreditDisabled,
				}}
				onChange={(newCredit) => {
					props.onChange(name, newCredit, grade);
				}}
			/>
			<SubjectEntry
				{...{
					field: grade,
					setField: setGrade,
					isFieldDisabled: isGradeDisabled,
					setIsFieldDisabled: setIsGradeDisabled,
				}}
				onChange={(newGrade) => {
					props.onChange(name, credit, newGrade);
				}}
			/>
		</div>
	);
}
