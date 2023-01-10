import React, { useState } from "react";

const UploadForm = () =>{
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];


    const changeHandler = (e) => {
        let selected = e.target.files[0];
        

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }
        else{
            setFile(null);
            setError("Please select a png or jpeg file.");
        }
    }


    return(
        <form>
            <label>
            <input type = "file"  onChange={changeHandler}/>
            <div className="output">
                { error && <div className =  "error" style={{color: 'red' }}>{error}</div>}
                {file && <div>{file.name}</div>}
            </div>
            </label>
        </form>
    )
}

export default UploadForm;