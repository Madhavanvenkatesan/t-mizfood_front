import React, { useState, useRef, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";

interface Result {
    id: number;
    title: string;
}
const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>(""); // For the input field
    const [results, setResults] = useState<Result[]>([]); // For search results
    const [loading, setLoading] = useState<boolean>(false); // For showing a loading state
    const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false); // Dropdown visibility
    const dropdownRef = useRef<HTMLDivElement>(null); // Ref to detect clicks outside
    const debounceTimer = useRef<NodeJS.Timeout | null>(null); // Debounce timer

    // Fetch data based on the search term
    const handleSearch = async () => {
        if (!searchTerm.trim()) {
            setResults([]); // Clear results if searchTerm is empty
            return;
        }

        try {
            setLoading(true); // Show loader
            const response = await fetch(
                `https://dummyjson.com/products/search?q=${encodeURIComponent(searchTerm)}`
            );
            if (response.ok) {
                const data = await response.json();
                setResults(data.products || []); // Update the results state
                setIsDropdownVisible(true); // Show the dropdown
            } else {
                console.error("Failed to fetch search results");
                setResults([]);
            }
        } catch (error) {
            console.error("Error during search:", error);
            setResults([]);
        } finally {
            setLoading(false); // Hide loader
        }
    };

    // Handle input changes with debounce
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Clear previous debounce timer
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }

        // Set a new debounce timer
        debounceTimer.current = setTimeout(() => {
            handleSearch();
        }, 500); // Adjust debounce delay (e.g., 500ms)
    };

    // Handle clicks outside the dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownVisible(false); // Hide dropdown if clicked outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-full">
            {/* Search Input */}
            <div className="relative w-full">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange} // Trigger debounce on change
                    placeholder="Search..."
                    className="w-full input-field text-md"
                    onFocus={() => setIsDropdownVisible(true)} // Show dropdown on focus
                />
                <button
                    type="button"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1"
                    onClick={handleSearch} // Optional: Allow manual trigger
                >
                    <BiSearchAlt className="text-xl" />
                </button>
            </div>

            {/* Search Results Dropdown */}
            {isDropdownVisible && (
                <div
                    ref={dropdownRef} // Attach ref to the dropdown
                    className="absolute max-h-[50vh] w-full overflow-x-hidden overflow-y-scroll mt-2 bg-white shadow-lg rounded-md z-10 text-sm"
                >
                    {loading ? (
                        <div className="p-2 text-gray-500">Loading...</div>
                    ) : results.length > 0 ? (
                        <ul>
                            {results.map((result) => (
                                <li
                                    key={result.id}
                                    className="p-2 border-b last:border-none hover:bg-gray-100 cursor-pointer"
                                >
                                    {result.title}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        searchTerm && (
                            <div className="p-2 text-gray-500">No results found</div>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
