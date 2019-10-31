import React    from 'react';
import { Icon } from 'deriv-components';

export const getThemedIcon = (type) => {
    let IconType;
    if (type) {
        switch (type) {
            case 'id':
                IconType = <Icon icon='IconId' medium />;
                break;
            case 'duration':
                IconType = <Icon icon='IconDuration' medium />;
                break;
            case 'barrier':
                IconType = <Icon icon='IconBarrier' medium />;
                break;
            case 'target':
                IconType = <Icon icon='IconTarget' medium />;
                break;
            case 'start_time':
                IconType = <Icon icon='IconStartTime' medium />;
                break;
            case 'entry_spot':
                IconType = <Icon icon='IconEntrySpot' medium />;
                break;
            case 'exit_spot':
                IconType = <Icon icon='IconExitSpot' medium />;
                break;
            default:
                break;
        }
    }
    if (!IconType) return null;
    return IconType;
};
