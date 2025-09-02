import './Description.scss';
import { avatar } from 'assets/images/imports';

function Description() {
    return ( <>
    <div className="description">
        <div className="description_box">
            <img src={avatar} alt="avatar" className="description_avatar" />
            <div className="description_text">
                <div className="description_text_head">Food & Drink</div>
                <div className="description_text_date">Published on 14 Jun 2019</div>
                <div className="description_text_subscr">245K subsribed</div>
                <div className="description_text_subhead">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </div>
                <button className="description_text_more">Show more</button>
            </div>
        </div>
        <button className="description_subscr">Subscribe<div className="description_subscr_amount">2.3m</div></button>
    </div>
    </> );
}

export default Description;