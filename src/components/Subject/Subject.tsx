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
	name: string;
	isFieldDisabled: boolean;
	setIsFieldDisabled: React.Dispatch<React.SetStateAction<boolean>>;
	icon: string;
};
function SubjectEntry({
	name: field,
	isFieldDisabled: isFieldEditable,
	setIsFieldDisabled: setIsFieldEditable,
	icon,
}: SubjectEntryProps) {
	const fieldRef = React.useRef<HTMLInputElement>(null);
	return (
		<span className="subject-entry">
			<input
				className="field"
				disabled={isFieldEditable}
				value={field}
				ref={fieldRef}
			></input>
			<img
				src={icon}
				onClick={() => {
					setIsFieldEditable((e) => !e);
					if (fieldRef.current) {
						fieldRef.current.focus();
					}
				}}
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
		<div className="subject">
			<SubjectEntry
				{...{
					name,
					isFieldDisabled: isNameDisabled,
					setIsFieldDisabled: setIsNameDisabled,
					icon: EditIcon,
				}}
			/>
			<span className="subject-entry">
				<div
					className="subject-credit"
					contentEditable={isCreditDisabled}
				>
					{credit}
				</div>
				<img src={EditIcon} className="edit-icon" alt="My Icon" />
			</span>
			<span className="subject-entry">
				<div
					className="subject-grade"
					contentEditable={isGradeDisabled}
				>
					{grade}
				</div>
				<img src={EditIcon} className="edit-icon" alt="My Icon" />
			</span>
		</div>
	);
}
