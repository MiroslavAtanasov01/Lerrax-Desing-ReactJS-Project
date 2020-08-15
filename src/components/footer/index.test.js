import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '.'
import TestingEnvironment from '../../test-utils/router'

jest.mock('../footer-link', () => 'FooterLink');
jest.mock('../icons', () => 'Icons');

describe('Footer Component', () => {
    it('should render Footer component', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                    id: '123'
                }
            }}>
                <Footer />
            </TestingEnvironment>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})