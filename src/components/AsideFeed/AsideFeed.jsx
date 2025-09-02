import './AsideFeed.scss'
import AsideVideo from 'components/AsideVideo/AsideVideo';

function AsideFeed() {
    return (<>
    <div className="AsideFeed_box">
        <div className="AsideFeed_head">
            <div className="AsideFeed_head_next">Next</div>
            <div className="AsideFeed_head_autoplay">
                <div className="AsideFeed_head_autoplay_head">Autoplay</div>
                <label className="AsideFeed_head_autoplay_btn">
                    <input type="checkbox" />
                    <span class="fill"></span>
                </label>
            </div>
        </div>
        <div className="asideVodeos_box">
            <AsideVideo></AsideVideo>
            <AsideVideo></AsideVideo>
            <AsideVideo></AsideVideo>
        </div>
    </div>
    
    </> );
}

export default AsideFeed;