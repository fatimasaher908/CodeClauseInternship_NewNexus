import React from "react";
import './Style.css';

const categories = [ 'technology' , 'business' , 'entertainment' , 'health' , 'science' , 'sports'];

function CategorySelector({selected , onChange}){
    return(
        <div style={{ marginBottom: '20px'}}>
            <label id="catLabel">Select Category:</label>
            <select id="selectBox" value={selected} onChange={(e) => onChange(e.target.value)}>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
        </div>
    );
}

export default CategorySelector;