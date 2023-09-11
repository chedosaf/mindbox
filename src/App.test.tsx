import React from 'react'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import { render } from '@testing-library/react'

import App from './App'
import resources from './locales/index'

test('renders learn react link', () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

  const { getByText } = render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
  )
  const linkElement = getByText(/todo list/i)
  expect(linkElement).toBeInTheDocument()
})
