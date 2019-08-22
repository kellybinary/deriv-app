
import React, { lazy } from 'react';
import PropTypes       from 'prop-types';

const PascalCaseToKebabCase = (string) => {
    return string.split(/(?=[A-Z])/).join('-').toLowerCase().replace('icon', 'ic');
};

const loadLazyIcon = (icon) => (
    lazy(() => import(/* webpackMode: "eager" */ `./svg/${PascalCaseToKebabCase(icon)}.svg`)));

class Icon extends React.PureComponent {
    render() {
        const options = {
            className        : this.props.className,
            customThemeColors: this.props.customThemeColors,
            is_disabled      : this.props.is_disabled,
            disableTheme     : this.props.disableTheme,
            // type       : this.props.type,
        };

        const IconLazy = loadLazyIcon(this.props.icon);
        if (!IconLazy) return <div />;

        return (
            <React.Suspense fallback={<div />}>
                <IconLazy {...options} />
            </React.Suspense>
        );
    }
}

Icon.propTypes = {
    className        : PropTypes.string,
    customThemeColors: PropTypes.object,
    icon             : PropTypes.string,
    is_disabled      : PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    type             : PropTypes.string,
};

export default Icon;
