import React, {useContext} from 'react';
import { FrameContext } from '../App'

const Button = (props) => {
    const [frameNumber, setFrameNumber] = useContext(FrameContext)
    const { position, text, background, textColor, linkIndex } = props;

    return (
        <div>
            <h1 
                className={`button__text button__text--${position}`} 
                style={{backgroundColor: background, color: textColor}}
                onClick={() => setFrameNumber(linkIndex)}
            >
                {text}
            </h1>
        </div>
    )
};

export default Button;