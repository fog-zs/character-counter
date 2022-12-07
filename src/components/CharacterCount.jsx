import { useState } from "react";
import TextField from '@mui/material/TextField';

const CharacterCount = () =>{
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);
    const onChangeText = (event) => { 
        setText(event.target.value);
        let txt = event.target.value;
        txt = txt.replaceAll("\n", "");
        setCount(txt.length);
    }

    return <>
        <TextField
            id="outlined-multiline-static"
            label={count}
            multiline
            rows={5}
            value={text}
            onChange={onChangeText}
            sx={{ width: '50ch' }}
        />
    </>
}

export default CharacterCount;