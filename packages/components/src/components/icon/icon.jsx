
import React     from 'react';
import PropTypes from 'prop-types';
import { deriv_icon_map } from './svg';

class Icon extends React.PureComponent {
    constructor(props) {
        super(props);
        this.generateIcon.bind(this);
        this.icons = {};
    }

    componentWillMount() {
        this.generateIcon();
    }

    generateIcon() {
        Object.keys(deriv_icon_map)
            .forEach((icon) => {
                this.icons[icon] = React.lazy(() => import(`./svg/${deriv_icon_map[icon]}`));
            });
    }

    render() {
        const options = {
            // category     : this.props.category,
            className    : this.props.className,
            // classNamePath: this.props.classNamePath,
            // classNameRect: this.props.classNameRect,
            // is_dark_theme: this.props.is_dark_theme,
            is_disabled  : this.props.is_disabled,
            // onClick      : this.props.onClick,
            // onMouseEnter : this.props.onMouseEnter,
            // onMouseLeave : this.props.onMouseLeave,
            type         : this.props.type,
        };

        const IconLazy = this.icons[this.props.icon];
        if (!IconLazy) return <div />;
        
        return (
            <React.Suspense fallback={<div />}>
                <IconLazy {...options} />
            </React.Suspense>
        );
    }
}

Icon.propTypes = {
    // category     : PropTypes.string,
    className    : PropTypes.string,
    // classNamePath: PropTypes.string,
    // classNameRect: PropTypes.string,
    icon         : PropTypes.string,
    // is_dark_theme: PropTypes.bool,
    // is_disabled  : PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    // onClick      : PropTypes.func,
    type         : PropTypes.string,
};

export default Icon;
