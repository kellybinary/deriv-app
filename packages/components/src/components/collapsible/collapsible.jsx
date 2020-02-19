import classNames from 'classnames';
import React, { useState, useEffect, Children } from 'react';
import { positionPropType } from './utils';
import ArrowButton from './arrow-button.jsx';

const Collapsible = ({ as, is_collapsed, position = 'top', children, onClick }) => {
    const [is_open, expand] = useState(!is_collapsed);
    const [should_show_collapsible, setShouldShowCollapsible] = useState(false);

    const toggleExpand = () => {
        const new_state = !is_open;
        expand(new_state);
        if (typeof onClick === 'function') {
            onClick(new_state); // pass new state in a callback function
        }
    };

    useEffect(() => {
        expand(!is_collapsed);
        setShouldShowCollapsible(Children.toArray(children).some(({ props }) => 'collapsible' in props));
    }, [is_collapsed]);

    useEffect(() => setShouldShowCollapsible(Children.toArray(children).some(({ props }) => 'collapsible' in props)));

    const arrow_button = <ArrowButton is_collapsed={!is_open} position={position} onClick={toggleExpand} />;
    const CustomTag = as || 'div';
    return (
        <CustomTag
            className={classNames('dc-collapsible', {
                'dc-collapsible--is-expanded': is_open,
                'dc-collapsible--is-collapsed': !is_open,
                'dc-collapsible--has-collapsible-btn': should_show_collapsible,
            })}
        >
            {should_show_collapsible && position === 'top' && arrow_button}
            <div className='dc-collapsible__content'>
                {Children.map(children, element => {
                    if (!element) return element;
                    const collapsed_class = classNames('dc-collapsible__item', element.props.className, {
                        'dc-collapsible__item--collapsed': 'collapsible' in element.props && !is_open,
                    });

                    const no_collapsible_props = { ...element.props };
                    if ('collapsible' in no_collapsible_props) delete no_collapsible_props.collapsible;

                    const props = {
                        ...no_collapsible_props,
                        className: collapsed_class,
                    };

                    return React.cloneElement(element, props);
                })}
            </div>
            {should_show_collapsible && position === 'bottom' && arrow_button}
        </CustomTag>
    );
};

Collapsible.propTypes = {
    ...positionPropType,
};

Collapsible.displayName = 'Collapsible';

export default Collapsible;
