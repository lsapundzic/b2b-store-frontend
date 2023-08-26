import {useEffect, useState} from "react";

export default function useFilter(data, category) {
    const [filteredData, setFilteredData] = useState([]);


    useEffect(() => {
        if (!data) {
            setFilteredData([]);
            return; // Return early if data is not available
        }

        if (category === "products" || category === "default" || category === "home") {
            setFilteredData(data.items);
        } else {
            const filterByCategory = data.items.filter((item) => item.fields.category === category);
            setFilteredData(filterByCategory);
        }
    }, [data, category]);

    return {filteredData};
}
