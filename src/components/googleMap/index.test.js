import React from 'react'
import renderer from 'react-test-renderer'
import GoogleMap from '.'
import TestingEnvironment from '../../test-utils/router'

describe('GoogleMap Component', () => {
    it('should render GoogleMap component', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                    id: '123'
                }
            }}>
                <GoogleMap />
            </TestingEnvironment>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})