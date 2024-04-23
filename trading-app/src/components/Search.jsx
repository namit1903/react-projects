import { useState, useEffect,useContext } from "react";

//import api
import finnHub from "../api/finnHub.js";
import { WatchListContext } from "../store/dataContext.jsx";
const Search = () => {
const {addStock} =useContext(WatchListContext)

  const [search, setSearch] = useState("");
  const [results,setResults] = useState([]);
  const handleSearchClick=(e)=>{
    console.log(e);
 setSearch(e.target.innerText);
  };
  const renderDropdown = ()=>{
    const showList=search.length>1?"show":null;
    return(
    
    <ul style={{
      height:"400px",
      overflowY: 'scroll',
      overflowX:"hidden",
      cursor:"pointer",
      width:"400px"
    }} className={`dropdown-menu ${showList}`}>
    {results.map((item)=>{
            return (
              <li className="dropdown-item" key={item.symbol} onClick={(e)=>{
                console.log(item.symbol)//see how this works
                addStock(item.symbol);
                setSearch("");
              }}>
                {item.description}(item.symbol)</li>
            )
          })}
    </ul>)
        
  }
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
       {renderDropdown()}
      </div>
    </div>
  );
};
export default Search;
