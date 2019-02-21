import React from 'react';


import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<App />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
it('onPress()', () => {
    const wrapper = shallow(<App/>)
    wrapper.find(Button).onPress().simulate('press');
})