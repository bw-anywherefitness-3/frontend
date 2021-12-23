import React, { useState } from "react";
import * as yup from "yup";
import { connect } from "react-redux";
import {
	addNewClass,
	updateCurrentUser,
	setClasses,

} from "./actions";

import "../App.css";
import axios from "axios";

const CreateClass = (props) => {
	const [formData, setFormData] = useState({});

	const formSchema = yup.object().shape({
		cType: yup
			.string()
			.oneOf(
				[
					"Aerobics",
					"Aquatic Fitness",
					"CrossFit",
					"Dance",
					"Jazzercise",
					"Kickboxing",
					"Personal Training",
					"Pilates",
					"Spinning",
					"Step Aerobics",
					"Yoga",
					"Zumba",
					"Other",
				],
				"class_type is required"
			),

		sunday: yup.boolean(),
		monday: yup.boolean(),
		tuesday: yup.boolean(),
		wednesday: yup.boolean(),
		thursday: yup.boolean(),
		friday: yup.boolean(),
		saturday: yup.boolean(),

		duration: yup
			.string()
			.oneOf(
				[
					"30 Minutes",
					"45 Minutes",
					"60 Minutes",
					"75 Minutes",
					"90 Minutes",
					"105 Minutes",
					"120 Minutes",
				],
				"duration is required"
			),
		intensity_level: yup
			.string()
			.oneOf(["Low", "Medium", "High", "Extreme"], "intensity is required"),
		location: yup.string().max(100, "Shorten your message to 100 chars"),
		attendees: yup.number(),
        max_size: yup.number(),
	});

	const onChange = (e) => {
		let valueToUse = e.target.value;
		if (e.target.type === "checkbox") {
			valueToUse = e.target.checked;
		}
		setFormData({ ...formData, [e.target.name]: valueToUse });
	};
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const time = formData.time;
		formatTime(time);
		formData.class_instructor_username = props.currentUser.username;
		formData.duration = parseInt(formData.duration);

		const formToSend = await {
            cType: formData.cType,
			date: formData.date,
            time: await time,
			duration: formData.duration,
			intensity_level: formData.intensity_level,
			location: formData.location,
            attendees: formData.attendees,
			max_size: Number(formData.max_size),
		};

		const response = await axios.post(
			"https://bw-anywherefitness-3.herokuapp.com/api/classes",
			formToSend
		);
		axios
			.get("https://bw-anywherefitness-3.herokuapp.com/api/classes")
			.then((res) => {
				props.setClasses(res.data.allClasses);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<section className="">
			<div className="create/update-class-container">
				<form
					onSubmit={handleSubmit}
					className="class-form"
				>
					<h1>Create Class</h1>

					<div className="cType-div">
						<label className="cType">
							{" "}
							Class Type:
							<select
								id="type-dropdown"
								type="dropdown"
								value={formData.cType}
								onChange={onChange}
								name="cType"
							>
								<option>--Choose Class Type--</option>
								<option>Aerobics</option>
								<option>Aquatic Fitness</option>
								<option>CrossFit</option>
								<option>Dance</option>
								<option>Jazzercise</option>
								<option>Kickboxing</option>
								<option>Personal Training</option>
								<option>Pilates</option>
								<option>Spinning</option>
								<option>Step Aerobics</option>
								<option>Yoga</option>
								<option>Zumba</option>
								<option>Other</option>
							</select>
						</label>
					</div>

                    <div className="date-div">
                        <label className="date">
                            Class Date
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={onChange}
                            />
                        </label>
                        <label className="time">
                            Class Time:
                            <input
                                type="time"
                                //value={time}
                                onChange={onChange}
                                name="time"
                            />
                        </label>
                    </div>

                    <div className="duration-div">
						<label className="duration">
							{" "}
							Class Duration:
							<select
								id="duration-dropdown"
								type="dropdown"
								value={formData.duration}
								onChange={onChange}
								name="duration"
							>
								<option>--Duration--</option>
								<option>30 Minutes</option>
								<option>45 Minutes</option>
								<option>60 Minutes</option>
								<option>75 Minutes</option>
								<option>90 Minutes</option>
								<option>105 Minutes</option>
								<option>120 Minutes</option>
							</select>
						</label>
                    </div>

                    <div className="intensity-div">
						<label className="intensity">
							{" "}
							Intensity Level:
							<select
								type="dropdown"
								value={formData.intensity_level}
								onChange={onChange}
								name="intensity_level"
							>
								<option>--Intensity--</option>
								<option>Low</option>
								<option>Medium</option>
								<option>High</option>
								<option>Extreme</option>
							</select>
						</label>
					</div>
					
					<div className="location-div">
                        <label>
                            Class Location:
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    
                    <div classname="class-size-vs-max">
                        <label className="class-size">
							{" "}
						    Class Size:
							<input
								type="number"
								value={formData.attendees}
								onChange={onChange}
								name="attendees"
							/>
						</label>
						<label className="max-size">
							{" "}
							Max Class Size:
							<input
								type="number"
								value={formData.max_size}
								onChange={onChange}
								name="max_size"
							/>
						</label>
					</div>

					<button type="submit" className="create-class-submit">
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, {
	addNewClass,
	updateCurrentUser,
	setClasses,
})(CreateClass);