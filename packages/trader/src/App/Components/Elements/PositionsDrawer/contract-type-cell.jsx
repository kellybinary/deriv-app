import React                      from 'react';
import PropTypes                  from 'prop-types';
import { getContractTypeDisplay } from 'Constants/contract';
import Icon                       from 'deriv-components/lib/icon';

const ContractTypeCell = ({ type, is_high_low }) => (
    <div className='contract-type'>
        <div className='contract-type__type-wrapper'>
            <Icon
                icon='IconTradeType'
                type={(is_high_low) ? `${type.toLowerCase()}_barrier` : type.toLowerCase()}
                className='category-type'
            />
        </div>
        <span className='contract-type__type-label'>
            {getContractTypeDisplay(type, is_high_low) || ''}
        </span>
    </div>
);

ContractTypeCell.propTypes = {
    type: PropTypes.string,
};

export default ContractTypeCell;
