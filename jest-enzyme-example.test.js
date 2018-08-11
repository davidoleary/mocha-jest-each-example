const React = require('react');
const enzyme = require('enzyme');
const Button = require('./Button').default;
const Adapter = require('enzyme-adapter-react-16');
let props;

enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  props = {
    isPrimary: false,
    isDanger: false,
    isSuccess: false,
  };
});

describe('test Button component', () => {
  it.each`
    propName       | propValue | className       | result
    ${'isPrimary'} | ${true}   | ${'is-primary'} | ${true}
    ${'isDanger'}  | ${true}   | ${'is-danger'}  | ${true}
    ${'isSuccess'} | ${true}   | ${'is-success'} | ${true}
  `('should have class $className when prop $propName is equal to $propValue', ({propName, propValue, className, result}) => {
    props = { ...props, [propName]: propValue };
    const enzymeWrapper = enzyme.shallow(<Button {...props} />);
    expect(enzymeWrapper.hasClass(className)).toEqual(result);
  });
});