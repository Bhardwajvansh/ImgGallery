import React,{useState} from "react";

const Search = ({ searchtext }) => {
    const [text,settext]=useState("")
    const onsubmit=(e)=>{
      e.preventDefault();
      searchtext(text)
    }
  return (
    <div style={{margin: "50px 500px" }}>
      <form onSubmit={onsubmit}>
        <div className="mb-3">
          <label className="form-label">
            Search the perfect Image
          </label>
          <input
            onChange={e=>settext(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
          <button className="btn btn-primary">Search</button>
      </form>
    </div>
  );
};

export default Search;
