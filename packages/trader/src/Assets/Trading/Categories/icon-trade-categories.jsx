import classNames from 'classnames';
import PropTypes  from 'prop-types';
import React      from 'react';
import { Icon }   from 'deriv-components';

const IconTradeCategory = ({ category, className }) => {
    let IconCategory;
    if (category) {
        switch (category) {
            case 'rise_fall':
                IconCategory = (
                    <React.Fragment>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypeCall'
                                className='category-type'
                                color
                            />
                        </div>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypePut'
                                className='category-type'
                                color
                            />
                        </div>
                    </React.Fragment>
                );
                break;
            case 'rise_fall_equal':
                IconCategory = (
                    <React.Fragment>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypeCall'
                                className='category-type'
                                color
                            />
                        </div>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypePut'
                                className='category-type'
                                color
                            />
                        </div>
                    </React.Fragment>
                );
                break;
            case 'high_low':
                IconCategory = (
                    <React.Fragment>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypeCallBarrier'
                                className='category-type'
                                color
                            />
                        </div>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypePutBarrier'
                                className='category-type'
                                color
                            />
                        </div>
                    </React.Fragment>
                );
                break;
            case 'end':
                IconCategory = (
                    <React.Fragment>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypeExpirymiss'
                                className='category-type'
                                color
                            />
                        </div>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypeExpiryrange'
                                className='category-type'
                                color
                            />
                        </div>
                    </React.Fragment>
                );
                break;
            case 'stay':
                IconCategory = (
                    <React.Fragment>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypeRange'
                                className='category-type'
                                color
                            />
                        </div>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypeUpordown'
                                className='category-type'
                                color
                            />
                        </div>
                    </React.Fragment>
                );
                break;
            case 'match_diff':
                IconCategory = (
                    <React.Fragment>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypeDigitmatch'
                                className='category-type'
                                color
                            />
                        </div>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypeDigitdiff'
                                className='category-type'
                                color
                            />
                        </div>
                    </React.Fragment>
                );
                break;
            case 'even_odd':
                IconCategory = (
                    <React.Fragment>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypeDigiteven'
                                className='category-type'
                                color
                            />
                        </div>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypeDigitodd'
                                className='category-type'
                                color
                            />
                        </div>
                    </React.Fragment>
                );
                break;
            case 'over_under':
                IconCategory = (
                    <React.Fragment>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypeDigitover'
                                className='category-type'
                                color
                            />
                        </div>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypeDigitunder'
                                className='category-type'
                                color
                            />
                        </div>
                    </React.Fragment>
                );
                break;
            case 'touch':
                IconCategory = (
                    <React.Fragment>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypeOnetouch'
                                className='category-type'
                                color
                            />
                        </div>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypeNotouch'
                                className='category-type'
                                color
                            />
                        </div>
                    </React.Fragment>
                );
                break;
            case 'asian':
                IconCategory = (
                    <React.Fragment>
                        <div className='category-wrapper'>
                            <Icon
                                icon='IconTradetypeAsianu'
                                className='category-type'
                                color
                            />
                        </div>
                        <div className='category-wrapper'>
                            <Icon
                                con='IconTradetypeAsiand'
                                className='category-type'
                                color
                            />
                        </div>
                    </React.Fragment>
                );
                break;
            case 'lb_call':
                IconCategory = (
                    <div className='category-wrapper'>
                        <Icon
                            className='category-type'
                            color
                            type='lbfloatcall'
                        />
                    </div>
                );
                break;
            case 'lb_put':
                IconCategory = (
                    <div className='category-wrapper'>
                        <Icon
                            className='category-type'
                            color
                            type='lbfloatput'
                        />
                    </div>
                );
                break;
            case 'lb_high_low':
                IconCategory = (
                    <div className='category-wrapper'>
                        <Icon
                            className='category-type'
                            color
                            type='lbhighlow'
                        />
                    </div>
                );
                break;
            default:
                IconCategory = (
                    <div className='category-wrapper'>
                        <Icon
                            icon='IconTradetypeUnknown'
                            className='category-type'
                            color
                        />
                    </div>
                );
                break;
        }
    }
    return (
        <div className={classNames('categories-container', className)}>
            {IconCategory}
        </div>
    );
};

IconTradeCategory.propTypes = {
    category : PropTypes.string,
    className: PropTypes.string,
};

export default IconTradeCategory;
