import './MainVideo.scss';
import {vid} from 'assets/images/imports';

function MainVideo() {
    return ( <>
        <div className="mainVideo">
            <img className="mainVideoPlayer" src={vid} alt=''/>
            <div className="mainVideoDescr">
                <div className="mainVideoDescr_start">
                    <div className="mainVideoDescr_start_head_box">
                        <div className="mainVideoDescr_start_head">Dude You Re Getting A Telescope</div>
                        <button className="mainVideodescr_start_head_moreBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" fill="none">
                                <path fill="#000" fill-rule="evenodd" d="m9.762.798-.48-.534A.782.782 0 0 0 8.696 0a.749.749 0 0 0-.578.264L5 3.728 1.88.264A.749.749 0 0 0 1.304 0a.782.782 0 0 0-.584.264L.244.798a.936.936 0 0 0-.244.65c0 .256.081.47.244.64L4.422 6.73C4.576 6.91 4.77 7 5 7a.76.76 0 0 0 .584-.27l4.178-4.641A.925.925 0 0 0 10 1.447a.968.968 0 0 0-.238-.649Z" clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                    <div className="mainVideoDescr_start_views">123k views</div>
                </div>
                <div className="mainVideoDescr_end">
                    <div className="mainBtn_box">
                        <button className="mainVideoDescr_end_likes">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none">
                                <path fill="#000" fill-rule="evenodd" d="M0 11.733c0 .7.597 1.265 1.333 1.265 0 0 6.716.005 7.67 0 2.078.021 3.39-.543 3.955-2 .152-.372.992-3.581 1-3.617.239-1.064-.557-1.993-1.717-1.993H9.835c-.185 0-.307-.14-.27-.312 0 0 .178-.844.217-1.053.146-.783.225-1.399.218-1.816.012-.66-.36-1.214-.95-1.651C8.732.32 8.247.1 8.247.1 7.74-.14 7.136.068 6.9.551c0 0-1.914 3.96-2.073 4.263-.16.303-.576.574-.946.574H1.333C.597 5.388 0 5.954 0 6.653v5.08Zm9.017-.003c1.48.015 2.214-.27 2.588-.952h-.27c-.37 0-.669-.281-.669-.634 0-.35.296-.634.669-.634h.668l.173-.634h-.508c-.37 0-.668-.282-.668-.634 0-.35.295-.634.668-.634h.852l.132-.487c.063-.278-.098-.465-.41-.465H9.834c-1.024 0-1.78-.87-1.577-1.83.007-.033.199-.956.211-1.024.138-.742.203-1.272.197-1.574v-.044c.004-.19-.117-.391-.436-.628a7.4 7.4 0 0 0-.27-.161L6.038 5.347C5.682 6.079 4.848 6.608 4 6.653v5.08l5.017-.003Zm-6.35-5.074H1.333v5.077h1.334V6.656Z" clip-rule="evenodd" opacity=".24"/>
                            </svg>                  
                            <div className="mainVideoDescr_end_likes_count">123k</div>
                        </button>
                        <button className="mainVideoDescr_end_dislikes">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none">
                                <path fill="#000" fill-rule="evenodd" d="M0 1.267C0 .567.597.002 1.333.002c0 0 6.716-.004 7.67 0 2.078-.021 3.39.543 3.955 2 .152.372.992 3.581 1 3.617.239 1.064-.557 1.993-1.717 1.993H9.835c-.185 0-.307.14-.27.312 0 0 .178.844.217 1.053.146.783.225 1.399.218 1.816.012.66-.36 1.214-.95 1.651-.318.236-.803.455-.803.455-.506.242-1.111.033-1.346-.45 0 0-1.914-3.96-2.073-4.263-.16-.303-.576-.574-.946-.574H1.333C.597 7.612 0 7.046 0 6.347v-5.08Zm9.017.003c1.48-.015 2.214.27 2.588.952h-.27c-.37 0-.669.281-.669.634 0 .35.296.634.669.634h.668l.173.634h-.508c-.37 0-.668.282-.668.634 0 .35.295.634.668.634h.852l.132.487c.063.278-.098.465-.41.465H9.834c-1.024 0-1.78.87-1.577 1.83.007.033.199.956.211 1.024.138.742.203 1.272.197 1.574v.044c.004.19-.117.391-.436.628-.036.026-.27.161-.27.161L6.038 7.653C5.682 6.921 4.848 6.392 4 6.347v-5.08l5.017.003Zm-6.35 5.074H1.333V1.267h1.334v5.077Z" clip-rule="evenodd" opacity=".24"/>
                            </svg>
                            <div className="mainVideoDescr_end_dislikes_count">435k</div>
                        </button>
                        <button className="mainVideoDescr_end_share">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" fill="none">
                                <path fill="#000" d="M8.556 0 14 5.6l-5.444 5.6V7.92C4.666 7.92 1.944 9.2 0 12c.778-4 3.111-8 8.556-8.8V0Z" opacity=".24"/>
                            </svg>
                            <div className="mainVideoDescr_end_share_text">Share</div>
                        </button>
                        <button className="mainVideoDescr_end_more">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="6" fill="none">
                                <path fill="#000" fill-rule="evenodd" d="M3 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm11 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm14-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </> );
}

export default MainVideo;