import React from 'react'
import renderer from 'react-test-renderer'
import Loading from '.'
import TestingEnvironment from '../../test-utils/router'

describe('Loading Component', () => {
    it('should render Loading component', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                    id: '123'
                }
            }}>
                <Loading />
            </TestingEnvironment>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})