import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'

function CustomInput() {
    const tab=["Username","Email","password"]
    return (
        <div>
            {tab.map(el=>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="fab fa-teamspeak"></i> </InputGroup.Text>
                
                
                <FormControl 
                placeholder={el}
                aria-label={el}
                aria-describedby="basic-addon1"
            />
                  
                    
                
            </InputGroup>
            )}
        </div>
    )
}

export default CustomInput