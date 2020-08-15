import React from 'react'
import renderer from 'react-test-renderer'
import Input from '.'
import TestingEnvironment from '../../test-utils/router'

describe('Input Component', () => {
    it('should render Input component', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                    id: '123'
                }
            }}>
                <Input />
            </TestingEnvironment>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})