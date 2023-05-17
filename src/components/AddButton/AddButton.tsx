import * as React from "react";
import "./AddButton.css";
// @ts-ignore
import AddIcon from "./add.png";
type AddButtonProps = {
	addNewSubject(): void;
};
export default function AddButton(props: AddButtonProps) {
	return (
		<div
			className="add-button bubble-element primary-button "
			onClick={props.addNewSubject}
		>
			<img className="add-icon" src={AddIcon} alt="add icon" />
		</div>
	);
}
