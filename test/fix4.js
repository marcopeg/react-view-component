
import { expect } from 'chai';

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import View from '../src/View';

describe('fix/#4', () => {

    it('should handle null children', () => {

        expect(function() {
            TestUtils.renderIntoDocument(
                <View color="#eee" width={200} height={200}>
                    <View flex={1} color="#aaa">{'line1'}</View>
                    {null}
                    <View flex={1} color="#ddd">{'line2'}</View>
                </View>
            );
        }).to.not.throw(Error);

    });

});
