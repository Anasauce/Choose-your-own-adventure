import React, { useState, useEffect, useContext } from 'react';
import { storyData } from '../data/storyData';
import Loading from './Loading';
import StoryFrame from './StoryFrame';
import { FrameContext } from '../App'


const Story = () => {
    const [frameNumber] = useContext(FrameContext)
    const [loading, setLoading] = useState(true);
    const [story, setStory ] = useState({ 
        loading: true,
        background: '',
        title: '',
        text: '',
        textColor: '',
        image: ''
     });
 
    
    const getStoryData = async () => {
        const storyFrame = await storyData.frames[frameNumber];
        setLoading(false);
        setStory({
            background: storyFrame.colors.bg,
            title: storyFrame.title.toUpperCase(),
            text: storyFrame.body,
            textColor: storyFrame.colors.text,
            image: storyFrame.img ? storyFrame.img : '',
            buttons: storyFrame.buttons
        })
    };

    useEffect(() => {
        getStoryData()
    }, [frameNumber]);
    
    const { title, text, background, textColor, image, buttons } = story;

    const frame = story.loading ? <Loading /> 
        :   <StoryFrame 
                title={title}
                text={text}
                background={background}
                textColor={textColor}
                image={image}
                buttons={buttons}
            />;

    return (
        <div>
            <section className="main" style={{backgroundColor: loading ?  "#FFC100" : story.background}}>
                {frame}
            </section> 
        </div>
    )
}

export default Story