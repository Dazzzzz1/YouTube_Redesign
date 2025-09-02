import './AsideVideo.scss';
import {vidsAide} from 'assets/images/imports';

function AsideVideo() {
    return ( <>
        <div className="asideVideo_box">
            <img src={vidsAide} alt="" className="video_box" />
            <div className="descr_box">
                <div className="descr_head">Baby Monitor Technology</div>
                <div className="descr_subhead">
                    <div className="descr_views">123k views</div>
                    <div className="descr_channel">Dollie Blair</div>
                </div>
            </div>
        </div>
    </> );
}

export default AsideVideo;