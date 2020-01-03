import ContentLoader from 'react-content-loader';
import React         from 'react';
import PropTypes     from 'prop-types';

const TradeParamsLoader = ({ is_mobile, speed }) => (
    <>
        {is_mobile ?
            <ContentLoader
                height={214}
                width={344}
                speed={speed}
                primaryColor={'var(--general-section-1)'}
                secondaryColor={'var(--general-hover)'}
            >
                <rect x='148' y='6' rx='3' ry='3' width='40' height='4' />
                <rect x='8' y='18' rx='4' ry='4' width='328' height='40' />
                <rect x='8' y='66' rx='4' ry='4' width='235' height='40' />
                <rect x='250' y='66' rx='4' ry='4' width='85' height='40' />
                <rect x='8' y='114' rx='4' ry='4' width='160' height='70' />
                <rect x='176' y='114' rx='4' ry='4' width='160' height='70' />
            </ContentLoader>
            :
            <ContentLoader
                height={548}
                width={240}
                speed={speed}
                primaryColor={'var(--general-section-1)'}
                secondaryColor={'var(--general-hover)'}
            >
                <rect x='0' y='0' rx='4' ry='4' width='240' height='76' />
                <rect x='0' y='84' rx='4' ry='4' width='240' height='132' />
                <rect x='0' y='224' rx='4' ry='4' width='240' height='120' />
                <rect x='0' y='352' rx='4' ry='4' width='240' height='194' />
            </ContentLoader>
        }
    </>
);

TradeParamsLoader.propTypes = {
    speed: PropTypes.number,
};

export { TradeParamsLoader };
