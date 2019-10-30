import classNames   from 'classnames';
import { observer } from 'mobx-react';
import PropTypes    from 'prop-types';
import React        from 'react';
import { Icon }     from 'deriv-components';

const MarkerLine = ({
    label,
    line_style,
    marker_config,
    status,
}) => {
    // TODO: Find a more elegant solution
    if (!marker_config) return <div />;
    return (
        <div className={classNames('chart-marker-line__wrapper', `chart-marker-line--${line_style}`)}>
            { label === marker_config.LINE_END.content_config.label &&
                <Icon
                    icon='IconEndTime'
                    className={classNames('chart-marker-line__icon', {
                        'chart-marker-line__icon--won' : status === 'won',
                        'chart-marker-line__icon--lost': status === 'lost',
                    })}
                    medium
                    green={status === 'won' || undefined}
                    red={status === 'lost' || undefined}
                />
            }
            { label === marker_config.LINE_START.content_config.label &&
                <Icon
                    icon='IconStartTimeCircle'
                    className={classNames(
                        'chart-marker-line__icon',
                        'chart-marker-line__icon--time',
                    )}
                    medium
                    secondary
                />
            }
        </div>
    );
};

MarkerLine.propTypes = {
    label        : PropTypes.string,
    line_style   : PropTypes.string,
    marker_config: PropTypes.object,
    status       : PropTypes.oneOf(['won', 'lost']),
};
export default observer(MarkerLine);
