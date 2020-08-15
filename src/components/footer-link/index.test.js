import React from 'react'
import renderer from 'react-test-renderer'
import FooterLink from '.'
import TestingEnvironment from '../../test-utils/router'


describe('FooterLink component', () => {
    it('should render FooterLink component', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                    id: '123'
                }
            }}>
                <FooterLink />
            </TestingEnvironment>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})