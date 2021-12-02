import { useState } from "react";

const AutoComplete = ({ value: _localValue, options=["Oranges", "Apples", "Pears"] }) => {
	const [value, setValue] = useState(_localValue || "");
	const [showSuggestions, setShowSuggestions] = useState(false);
	// const [suggestions, setSuggestions] = useState([...options]);

	const handleChange = (e) => {
		const newValue = e.target.value;
		// const newSuggestions = options.filter(option => option.toLowerCase().includes(newValue.toLowerCase()));
		setValue(newValue);
		// setSuggestions(newSuggestions);
	};

	const handleSuggestionClick = (suggestion) => {
		setValue(suggestion);
		setShowSuggestions(false);
	};


	const suggestions = options.filter(option => option.toLowerCase().includes(value.toLowerCase()));

	return (
		<div className="autocomplete">
			<input
				type="text"
				value={value}
				placeholder="Search......"
				onChange={handleChange}
				onFocus={() => setShowSuggestions(true)}
			/>
			{showSuggestions && (
				<ul className="suggestions">
					{suggestions.map((suggestion) => (
						<li
							key={suggestion}
							onClick={() => handleSuggestionClick(suggestion)}
						>
							{suggestion}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default AutoComplete;