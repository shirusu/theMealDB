import React from 'react';

const Youtube = ({youtube}) => {
    return (
        <div className="youtube-video">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtube}`}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    );
};

export default Youtube;