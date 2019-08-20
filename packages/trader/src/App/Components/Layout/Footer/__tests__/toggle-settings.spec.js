import React                  from 'react';
import { CSSTransition }      from 'react-transition-group';
import { expect }             from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter                from 'enzyme-adapter-react-16';
import Icon                   from 'deriv-components/lib/icon';
import { ToggleSettings }     from '../toggle-settings.jsx';
import { Modal }              from '../../../Elements/modal.jsx';

configure({ adapter: new Adapter() });

describe('ToggleSettings', () => {
    it('should render one <ToggleSettings /> component with active class if is_settings_visible is true', () => {
        const wrapper = shallow(<ToggleSettings is_settings_visible={true} />);
        expect(wrapper).to.have.length(1);
        expect(wrapper.find('.ic-settings--active').exists()).to.be.true;
    });
    it('should not have active class if is_settings_visible is false', () => {
        const wrapper = shallow(<ToggleSettings is_settings_visible={false} />);
        expect(wrapper.find('.ic-settings--active').exists()).to.be.false;
    });
    it('should contain <Icon icon=\'IconSettings\' />', () => {
        const wrapper = shallow(<ToggleSettings />);
        expect(wrapper.contains(<Icon icon='IconSettings' className='footer__icon ic-settings__icon' />)).to.be.true;
    });
    it('property \'in\' should depend on \'is_settings_visible\'', () => {
        const wrapper = shallow(<ToggleSettings is_settings_visible={true} />);
        expect(wrapper.find(Modal).shallow().find(CSSTransition).prop('in')).to.be.true;
    });
    it('property \'is_open\' should depend on \'is_settings_visible\'', () => {
        const wrapper = shallow(<ToggleSettings is_settings_visible={true} />);
        expect(wrapper.find(Modal).prop('is_open')).to.be.true;
    });
});
