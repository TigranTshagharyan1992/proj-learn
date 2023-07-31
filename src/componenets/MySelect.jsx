import React from 'react';

const MySelect = ({options,defaultValue, value, onChange}) => {
    return (
        <div style={{marginTop:'10px'}}>
            <select value={value} onChange={event => onChange(event.target.value)}>
                <option disabled>{defaultValue}</option>
                {
                     options.map((option, index) => {
                      return  <option value={option.value} key={index+1}>
                            {option.title}
                        </option>
                    })
                }
            </select>
        </div>
    );
};

export default MySelect;