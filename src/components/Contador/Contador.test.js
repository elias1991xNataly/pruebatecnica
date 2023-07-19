import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Contador from './Contador';

describe('Contador', () => {
  let props;
  let shallowContador;
  let renderedContador;
  let mountedContador;

  const shallowTestComponent = () => {
    if (!shallowContador) {
      shallowContador = shallow(<Contador {...props} />);
    }
    return shallowContador;
  };

  const renderTestComponent = () => {
    if (!renderedContador) {
      renderedContador = render(<Contador {...props} />);
    }
    return renderedContador;
  };

  const mountTestComponent = () => {
    if (!mountedContador) {
      mountedContador = mount(<Contador {...props} />);
    }
    return mountedContador;
  };  

  beforeEach(() => {
    props = {};
    shallowContador = undefined;
    renderedContador = undefined;
    mountedContador = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
