import React from 'react'
import renderer from 'react-test-renderer'
import MainImg from '.'
import TestingEnvironment from '../../test-utils/router'

jest.mock('../dots', () => 'Dots');


describe('MainImg Component', () => {
    it('should render MainImg component', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                    id: '123'
                }
            }}>
                <MainImg />
            </TestingEnvironment>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})