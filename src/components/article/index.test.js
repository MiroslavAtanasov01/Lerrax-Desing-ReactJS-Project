import React from 'react'
import renderer from 'react-test-renderer'
import Article from '.'
import TestingEnvironment from '../../test-utils/router'


describe('Article component', () => {
    it('should render Article component', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                    id: '123'
                }
            }}>
                <Article />
            </TestingEnvironment>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})