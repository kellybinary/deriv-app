import classNames    from 'classnames';
import PropTypes     from 'prop-types';
import React         from 'react';
import { Icon }      from 'deriv-components';
import { translate } from '../utils/lang/i18n';
import                    '../assets/sass/contract-result-overlay.scss';

const ContractResultOverlay = (props) => {
    const has_won_contract = props.profit >= 0;

    return (
        <div className={classNames('db-contract-card__result', {
            'db-contract-card__result--won' : has_won_contract,
            'db-contract-card__result--lost': !has_won_contract,
        })}
        >
            <span className='db-contract-card__result-caption'>
                { has_won_contract ?
                    <React.Fragment>
                        {translate('Won')}
                        <Icon icon='IconCheckmarkCircle' className='db-contract-card__result-icon' green />
                    </React.Fragment>
                    :
                    <React.Fragment>
                        {translate('Lost')}
                        <Icon icon='IconCloseCircle' className='db-contract-card__result-icon' red />
                    </React.Fragment>
                }
            </span>
        </div>
    );
};

ContractResultOverlay.propTypes = {
    profit: PropTypes.number,
};

export default ContractResultOverlay;
