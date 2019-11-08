import React            from 'react';
import { Button, Icon } from 'deriv-components';
import Localize         from 'App/Components/Elements/localize.jsx';
import { localize }     from 'App/i18n';

const FinishedSetCurrency = ({
    current,
    onCancel,
    onSubmit,
    prev,
}) => {
    const IconPrevCurrency = () => <Icon icon={`IconCurrency-${prev.toLowerCase()}`} width={90} height={120} />;
    const IconNextCurrency = () => <Icon icon={`IconCurrency-${current.toLowerCase()}`} width={90} height={120} />;
    const IconArrow        = () => <Icon icon='IconRedArrow' width={50} height={20} />;
    const IconWon          = ({ className }) => <Icon className={className} icon='IconCheckmarkCircle' />;

    return (
        <div className='success-change'>
            <div className='success-change__icon-area'>
                <IconPrevCurrency />
                <IconArrow />
                <IconNextCurrency />
                <IconWon className='bottom-right-overlay' />
            </div>
            <div className='success-change__body-area'>
                <h2>
                    <Localize
                        i18n_default_text='Success!'
                    />
                </h2>
                <p>
                    <Localize
                        i18n_default_text={`You have successfully changed your currency to ${current}.<br />Make a deposit now to start trading.`}
                    />
                </p>
            </div>
            <div className='success-change__btn-area'>
                <Button
                    onClick={onCancel}
                    text={localize('Maybe later')}
                    secondary
                />
                <Button
                    onClick={onSubmit}
                    text={localize('Deposit now')}
                    primary
                />
            </div>
        </div>
    );
};

export default FinishedSetCurrency;
