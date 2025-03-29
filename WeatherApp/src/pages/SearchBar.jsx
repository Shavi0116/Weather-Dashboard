import { useState } from "react"

const SearchBar=({fetchweather})=>{
    const [city, setCity]=useState("");
    const search=()=>{
        if(city.trim()){
            fetchweather(city);
            setCity("");
        }
    }
    return(
        <>
        <div className="flex justify-center gap-4 mt-5">
            <input 
            className="px-4 py-2 border rounded-md" 
            type="text" 
            placeholder="Enter the city name" 
            value={city} 
            onChange={(e)=>setCity(e.target.value)}>
            </input>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={search}>Search</button>
        </div>
        </>
    )
}
export default SearchBar;