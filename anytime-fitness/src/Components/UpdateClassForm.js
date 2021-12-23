import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { connect } from "react-redux";
import {
	updateClass,
	updateCurrentUser,
	getClasses,
} from "../../actions/actions";
import axios from "axios";

const initialFormErrors = {
	cType: "",
	date: "",
    time: "",
	duration: "",
	intensity_level: "",
	location: "",
    attendees: "",
	max_size: "",
};

const FormSchema = yup.object().shape({
	cType: yup.string().required(),
    date: yup.string().required(),
	time: yup.string().required(),
	duration: yup.string().required(),
	class_intensity_level: yup.string().required(),
	location: yup.string().required(),
    attendees: yup.string().required(),
	max_size: yup.string().required(),
});

const UpdateForm = (props) => {
	const id = props.match.params.id;
	const initialFormData = props.classes.find(
		(card) => card.classId === parseInt(id)
	);

	const [formData, setFormData] = useState({
		...initialFormData,
		duration: initialFormData.duration.toString() + " Minutes",
	});
	
	const [formErrors, setFormErrors] = useState(initialFormErrors);

	const validate = (name, value) => {
		yup
			.reach(FormSchema, name)
			.validate(value)
			.then(() => setFormErrors({ ...formErrors, [name]: "" }))
			.catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
	};

	const onChange = (e) => {
		const { name, value } = e.target;
		validate(name, value);
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// props.updateClass(formData);
		// props.updateCurrentUser();
		formData.class_instructor_username = props.currentUser.username;
		formData.duration = parseInt(formData.duration);
		formData.max_size = Number(formData.max_class_size);

		delete formData.classId;
		delete formData.class_client_list_id;
		delete formData.max_size;

		axios
			.put(
				`https://anywherefitnessapis.herokuapp.com/api/v1/class/${id}`,
				formData
			)
			.then((res) => {
				props.getClasses();
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {}, [props.classes]);
	return (
		<section className="create/update-class">
			<div className="create/update-class-container">
				<form
					onSubmit={handleSubmit}
					className="class-form"
				>
					<h1>Edit Class</h1>

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
								value={formData.time}
								onChange={onChange}
								InputLabelProps={{
									shrink: true,
								}}
								inputProps={{
									step: 300, // 5 min
								}}
								name="time"
							/>
						</label>

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

						<label className="intensity-div">
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
                            Location
                            <LocationBar
                                setFormData={setFormData}
                                formData={formData}
                                editClassLocation={formData.class_location}
                            />
                        </label>
					</div>

                    <div className="class-size-vs-max">
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
					<button type="submit" className="btn btn-primary align-self-end ">
						Submit
					</button>
				</form>
				<img
					src={Logo}
					className="class-form-logo d-none d-sm-block me-xl-4"
					alt="people working together"
				/>
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
	updateClass,
	updateCurrentUser,
	getClasses,
})(UpdateForm);