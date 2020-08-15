import React from 'react'
import renderer from 'react-test-renderer'
import Icons from '.'
import TestingEnvironment from '../../test-utils/router'


describe('Icons component', () => {
    it('should render Icons component', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                    id: '123'
                }
            }}>
                <Icons />
            </TestingEnvironment>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})