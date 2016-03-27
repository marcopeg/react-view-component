
import { expect } from 'chai';
import sinon from 'sinon';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import View from '../src/View';

describe('View', () => {

    it('should render a string', () => {
        let content = 'foo';
        let rendered = TestUtils.renderIntoDocument(<View>{content}</View>);
        let dom = ReactDOM.findDOMNode(rendered);
        expect(dom.innerHTML).to.contain(content);
    });

    it('should render a number', () => {
        let content = 123;
        let rendered = TestUtils.renderIntoDocument(<View>{content}</View>);
        let dom = ReactDOM.findDOMNode(rendered);
        expect(dom.innerHTML).to.contain(content);
    });

});
