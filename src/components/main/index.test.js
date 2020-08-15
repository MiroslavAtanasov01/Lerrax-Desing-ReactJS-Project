import React from 'react'
import renderer from 'react-test-renderer'
import Main from '.'
import TestingEnvironment from '../../test-utils/router'

jest.mock('../mainImg', () => 'MainImg');


describe('Main Component', () => {
    it('should render Main component', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                    id: '123'
                }
            }}>
                <Main />
            </TestingEnvironment>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})