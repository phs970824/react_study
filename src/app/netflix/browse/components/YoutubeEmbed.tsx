import YouTube from 'react-youtube';

const YouTubeEmbed = ({ embedId }: { embedId: string }) => {
    const opts = {
        playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
        },
    };
    return <YouTube videoId={embedId} opts={opts} />;
};

export default YouTubeEmbed;
