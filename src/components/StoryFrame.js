import React, {useContext} from 'react';
import Button from './Button';
import { FrameContext } from '../App'

const StoryFrame = (props) => {
    const [frameNumber] = useContext(FrameContext)
    const { title, text, background, textColor, image, buttons } = props;

    const generateTextMarkup = () => {
        return {__html: text}
    }

    const contentLayout = () => {
        if (image.length > 0) {
            return (
                <div className="story-frame__content">
                    <div className="story-frame__text story-frame__content--text-image" dangerouslySetInnerHTML={generateTextMarkup()}></div>
                    <img className="story-frame__image" src={process.env.PUBLIC_URL + image}/>
                </div>
            )
        } else {
            return (
                <div className="story-frame__content">
                    <div className="story-frame__text story-frame__content--text-only" dangerouslySetInnerHTML={generateTextMarkup()}></div>
                </div>
            )
        }
    }

    const parseButtons = (buttonsArr) => {
        if (buttonsArr.length > 0 ) {
            if (buttonsArr.length === 1 ) {
                return <Button 
                            position="right" 
                            text={buttons[0].text} 
                            background={background}
                            textColor={textColor}
                            linkIndex={buttons[0].linkindex}
                        />
            } else {
                return (
                <>
                    <Button
                        position="left"
                        text={buttons[0].text}
                        background={background}
                        textColor={textColor}
                        linkIndex={buttons[0].linkindex}
                    />
                    <Button
                        position="right"
                        text={buttons[1].text}
                        background={background}
                        textColor={textColor}
                        linkIndex={buttons[1].linkindex}
                    />
                </>
                )
                
            }
        }
    }

    return (
        <div className="content story-frame" style={{color: textColor}}>
            <h1 className="story-frame__number" style={{backgroundColor: background}}>{frameNumber + 1}</h1>
            <section className="story-frame__inner">
                <h1 className="story-frame__title">{title}</h1>
                {contentLayout()}
            </section>
            {parseButtons(buttons)}
        </div>
    )
}

export default StoryFrame