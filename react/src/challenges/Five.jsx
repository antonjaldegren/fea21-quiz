import React, { useEffect, useRef, useState } from "react";

// Lös den oändliga loopen!
// Jag har skapat en oändlig render-loop nedan
// som kommer göra att det kraschar.
// Där tanken är att den bara ska uppdatera en gång!

function Five() {
	const [count, setCount] = useState(0);
	const effectCalled = useRef(false);

	useEffect(() => {
		if (effectCalled.current) return;
		setCount((count) => count + 1);
		effectCalled.current = true;
	}, []);

	return <div data-testid="five-count">{count}</div>;
}

export default Five;
