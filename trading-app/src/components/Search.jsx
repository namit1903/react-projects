import { useState, useEffect } from "react";
//import api
import finnHub from "../api/finnHub.js";

const Search = () => {
  const [search, setSearch] = useState("");
  const [results,setResults] = useState([]);
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/search", {
          params: {
            q: search,
          },
        });
        console.log(response);
        console.log(response.data.result);//this is an array of objects
        
        if (isMounted) {
        setResults(response.data.result);
       
        }
      } catch (err) {
        console.log("eRRor:", err);
      }
    };
    //kyuki jab pehle load hua page tb 11k ke kreeb responses aa rhe the for an Empty search "" , isiliye we put a check to fetch data only when atleast two charactes are entered in the search boxS
    if (search.length > 1)
     fetchData();
    else{
      setResults([]);//agar search bar blank kr de tb state ko empty krne ke liye
    }
    return()=>{
      isMounted=false;
    }
  }, [search]);
  return (
    <div className="w-50 p-5 rounded mx-auto">
      <div className="form-floating dropdown"> 
        <input
          style={{ backgroundColor: "rgba(145,158,171,0.04)" }}
          id="search"
          type="text"
          className="form-control"
          placeholder="Search"
          autoComplete="off"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <label htmlFor="search">SEARCH</label>
        <ul className="dropdown-menu ">
          <li>stock1</li>
          <li>stock2</li>
          <li>stock3</li>
        </ul>
      </div>
    </div>
  );
};
export default Search;
