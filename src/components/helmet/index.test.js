import React from 'react'
import renderer from 'react-test-renderer'
import Helmet from '.'
import TestingEnvironment from '../../test-utils/router'

describe('Helmet Component', () => {
    it('should render Helmet component', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                    id: '123'
                }
            }}>
                <Helmet />
            </TestingEnvironment>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})