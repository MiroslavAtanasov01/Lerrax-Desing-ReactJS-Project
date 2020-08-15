import React from 'react'
import renderer from 'react-test-renderer'
import Aside from '.'
import TestingEnvironment from '../../test-utils/router'


describe('Aside component', () => {
    it('should render Aside component', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                    id: '123'
                }
            }}>
                <Aside />
            </TestingEnvironment>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})