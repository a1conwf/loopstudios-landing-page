import React from "react";
import {creationsData} from "../../data/data";
import "./Creations.scss";

const Creations = () => {
	return (
		<section className="creations">
			<div className="container">
				<div className="creations__head">
					<h2 className="creations__title">Our creations</h2>
					<button className="btn desk">See all</button>
				</div>

				<div className="creations__grid mob">
					{creationsData.map((creation) => (
						<div className="creation" key={creation.id} style={{backgroundImage: `url(${creation.bgImage.mob})`}}>
							<span className="creation__title">{creation.title}</span>
						</div>
					))}
				</div>

				<div className="creations__grid desk">
					{creationsData.map((creation) => (
						<div className="creation" key={creation.id} style={{backgroundImage: `url(${creation.bgImage.desk})`}}>
							<span className="creation__title">{creation.title}</span>
						</div>
					))}
				</div>
				<button className="btn mob">See all</button>
			</div>
		</section>
	);
};

export default Creations;
