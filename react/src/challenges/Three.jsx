import React from "react";

const Item = ({ text }) => {
	// Don't touch this
	if (typeof text === "string") {
		return <p data-testid="three-faulty-item">Inte ett nummer</p>;
	}

	// Men detta går bra
	return <p data-testid="three-item">{text}</p>;
};

// Slutför Three så att den skriver ut
// de items den får genom props i en lista av Items.
// Men se till att den filtrerar ut de som inte är nummer.
// Item ska alltså inte skriva ut "Inte ett nummer"

const Three = ({ items }) => {
	const numericItems = items.filter((item) => typeof item === "number");

	return (
		<div>
			{numericItems.map((numericItem) => (
				<Item key={numericItem} text={numericItem} />
			))}
		</div>
	);
};

export default Three;
