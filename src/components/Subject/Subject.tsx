import * as React from "react";
import "./Subject.css";
// @ts-ignore
import EditIcon from "./edit.png";
type SubjectProps = {
	name: string;
	credit: number;
	grade: number;
};

type SubjectEntryProps = {
	field: string | number;
	setField: React.Dispatch<React.SetStateAction<any>>;
	isFieldDisabled: boolean;
	setIsFieldDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};

function SubjectEntry({
	field: field,
	setField: setField,
	isFieldDisabled: isFieldEditable,
	setIsFieldDisabled: setIsFieldDisabled,
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
				onChange={(e) => setField(e.target.value)}
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
			/>
			<SubjectEntry
				{...{
					field: credit,
					setField: setCredit,
					isFieldDisabled: isCreditDisabled,
					setIsFieldDisabled: setIsCreditDisabled,
				}}
			/>
			<SubjectEntry
				{...{
					field: grade,
					setField: setGrade,
					isFieldDisabled: isGradeDisabled,
					setIsFieldDisabled: setIsGradeDisabled,
				}}
			/>
		</div>
	);
}
