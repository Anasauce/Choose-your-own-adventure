import React from 'react';

const StoryFrame = (props) => {
    const { title, text, textColor, image, buttons, frameNumber } = props;

    const generateTextMarkup = () => {
        return {__html: text}
    }

    return (
        <div className="content content-story-frame" style={{color: textColor}}>
            <h1 className="story-frame__number">{frameNumber}</h1>
            <div className="story-frame__text" dangerouslySetInnerHTML={generateTextMarkup()}></div>
        </div>
    )
}

export default StoryFrame