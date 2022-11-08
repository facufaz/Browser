import React, {useState} from 'react';
import Dropdown from "./Dropdown";
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af',
        type: 'language'
    },
    {
        label: 'Arabic',
        value: 'ar',
        type: 'language'
    },
    {
        label: 'Hindi',
        value: 'hi',
        type: 'language'
    }
];

const Translate = () => {
const [language,setLanguage] = useState(options[0]);
const [text,setText] = useState('');


    return (
        <div>
            <div className="ui form">
                <div className="field">
                <label>Enter Text</label>
                </div>
            </div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <Dropdown
            label="Select a Language"
            selected={language} 
            onSelectedChange={setLanguage}
            options={options} />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate;