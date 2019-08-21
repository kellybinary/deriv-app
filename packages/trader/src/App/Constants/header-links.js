import React        from 'react';
import Icon         from 'deriv-components/lib/icon';
import { localize } from 'App/i18n';
import { routes }   from 'Constants/index';

const header_links = [
    {
        id     : 'dt_deriv_logo',
        logo   : <div className='header__logo'>{localize('BETA')}</div>,
        image  : <Icon icon='IconDerivWithTagline' className='header__icon' customThemeColors={{ 'fill=#a9a9a9': 'color3-fill' }} />,
        link_to: routes.trade,
    },
    {
        id        : 'dt_reports_tab',
        icon      : <Icon icon='IconReports' className='header__icon' />,
        text      : localize('Reports'),
        link_to   : routes.reports,
        login_only: true,
    },
];

export default header_links;
