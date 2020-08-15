import React from 'react'
import renderer from 'react-test-renderer'
import Dots from '.'
import TestingEnvironment from '../../test-utils/router'


describe('Dots component', () => {
    it('should render Dots component', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                    id: '123'
                }
            }}>
                <Dots />
            </TestingEnvironment>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})