import PropTypes  from 'prop-types';
import React      from 'react';
import { Icon }   from 'deriv-components';

const IconTradetype = ({ trade_type, className }) => {
    switch (trade_type.toLowerCase()) {
        case 'asiand'      : return <Icon icon='IconTradetypeAsiand' className={className} color />;
        case 'asianu'      : return <Icon icon='IconTradetypeAsianu' className={className} color />;
        case 'call_barrier': return <Icon icon='IconTradetypeCallBarrier' className={className} color />;
        case 'calle'       :
        case 'call'        : return <Icon icon='IconTradetypeCall' className={className} color />;
        case 'calle_light' : return <Icon icon='IconTradetypeCalleLight' className={className} color />;
        case 'callspread'  : return <Icon icon='IconTradetypeCallSpread' className={className} color />;
        case 'putspread'   : return <Icon icon='IconTradetypePutSpread' className={className} color />;
        case 'digitdiff'   : return <Icon icon='IconTradetypeDigitdiff' className={className} color />;
        case 'digiteven'   : return <Icon icon='IconTradetypeDigiteven' className={className} color />;
        case 'digitmatch'  : return <Icon icon='IconTradetypeDigitmatch' className={className} color />;
        case 'digitodd'    : return <Icon icon='IconTradetypeDigitodd' className={className} color />;
        case 'digitover'   : return <Icon icon='IconTradetypeDigitover' className={className} color />;
        case 'digitunder'  : return <Icon icon='IconTradetypeDigitunder' className={className} color />;
        case 'expirymiss'  : return <Icon icon='IconTradetypeExpirymiss' className={className} color />;
        case 'expiryrange' : return <Icon icon='IconTradetypeExpiryrange' className={className} color />;
        case 'expiryrangee': return <Icon icon='IconTradetypeExpiryrangee' className={className} color />;
        case 'notouch'     : return <Icon icon='IconTradetypeNoTouch' className={className} color />;
        case 'onetouch'    : return <Icon icon='IconTradetypeOnetouch' className={className} color />;
        case 'put_barrier' : return <Icon icon='IconTradetypePutBarrier' className={className} color />;
        case 'pute'        :
        case 'put'         : return <Icon icon='IconTradetypePut' className={className} color />;
        case 'range'       : return <Icon icon='IconTradetypeRange' className={className} color />;
        case 'resetcall'   : return <Icon icon='IconTradetypeResetcall' className={className} color />;
        case 'resetput'    : return <Icon icon='IconTradetypeResetput' className={className} color />;
        case 'runhigh'     : return <Icon icon='IconTradetypeRunhigh' className={className} color />;
        case 'runlow'      : return <Icon icon='IconTradetypeRunlow' className={className} color />;
        case 'tickhigh'    : return <Icon icon='IconTradetypeTickhigh' className={className} color />;
        case 'ticklow'     : return <Icon icon='IconTradetypeTicklow' className={className} color />;
        case 'upordown'    : return <Icon icon='IconTradetypeUpordown' className={className} color />;
        default            : return <Icon icon='IconTradetypeUnknown' className={className} color />;
    }
};

IconTradetype.propTypes = {
    trade_type: PropTypes.string,
};

export default IconTradetype;
