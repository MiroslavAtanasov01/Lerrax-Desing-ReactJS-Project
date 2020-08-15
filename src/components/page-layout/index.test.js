import React from 'react'
import renderer from 'react-test-renderer'
import PageLayout from '.'
import TestingEnvironment from '../../test-utils/router'

jest.mock('../header', () => 'Header')
jest.mock('../footer', () => 'Footer')


describe('PageLayout component', () => {
    it('should render authenticated', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                    id: '123'
                }
            }}>
                <PageLayout />
            </TestingEnvironment>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})