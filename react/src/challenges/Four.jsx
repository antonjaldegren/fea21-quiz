import React, { useState, useEffect } from "react";

// Den här komponenten har ett par stycken problem och
// saknar några delar. Mer exakt: 5 stycken.
// Det är din uppgift att identifiera och lösa dessa.
//
// Men komponentens syfte är att hämta en användare
// från dummyjson-apiet och skriva ut dennes namn.

const Four = () => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(null);

	const getData = async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	};

	async function getUser() {
		setIsLoading(true);
		const user = await getData("https://dummyjson.com/users/1");
		setUser(user);
		setIsLoading(false);
	}

	useEffect(() => {
		getUser();
	}, []);

	if (isLoading) {
		return <div data-testid="four-loading">Loading...</div>;
	}

	// Rör inte koden under denna kommentaren
	if (!user) {
		return <div data-testid="four-name">No user found</div>;
	}

	return <div data-testid="four-name">My name is: {user.firstName}</div>;
};

export default Four;
