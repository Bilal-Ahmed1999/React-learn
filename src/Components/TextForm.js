import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Write your text here");
    const handleUpClick = ()=>{
        console.log("You just click Uppercase button");
        let newText = text.toUpperCase();
        setText(newText);
    }
    

    const handleonChange = (event)=>{
        console.log('you are in onchange');
        setText(event.target.value);
    }
    return (
        <>
        <div className='container'>
            <h1 className='my-3'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonChange}  id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button type="button" onClick={handleUpClick} className="btn btn-primary">Convet uperCase</button>
        </div>
        
        
        </>
  
  
    )
}
