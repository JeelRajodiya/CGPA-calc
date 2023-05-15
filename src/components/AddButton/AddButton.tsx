import * as React from "react";
import "./AddButton.css";
// @ts-ignore
import AddIcon from "./add.png";
export default function AddButton() {
	return (
		<div className="add-button bubble-element primary-button">
			<img className="add-icon" src={AddIcon} alt="add icon" />
		</div>
	);
}
