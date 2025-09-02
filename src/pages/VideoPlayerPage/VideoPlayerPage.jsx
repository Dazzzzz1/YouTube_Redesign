import MainVideo from 'components/MainVideo/MainVideo';
import Description from 'components/ Description/Description';
import './VideoPlayerPage.scss';
import AsideFeed from 'components/AsideFeed/AsideFeed';
import MenuMedia from 'components/MenuMedia/MenuMedia';

function VideoPlayerPage() {
    return (  <>
    <div className="VideoPlayer_box">
        <div className="VideoPlayer_start">
            <MainVideo></MainVideo>
            <Description></Description>
        </div>
        <AsideFeed></AsideFeed>
    </div>
    <MenuMedia></MenuMedia>   
    </>);
}

export default VideoPlayerPage;