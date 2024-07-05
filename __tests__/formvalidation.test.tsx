import Form from '../src/components/contactform/Form'
import {render, fireEvent, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('\n### Testing firstname/lastname input edge cases ###', () => {

  test('checking name/full name validation for empty strings', async () => {
    userEvent.setup()
    const { getByLabelText, getByText } = render(<Form setFormResult={() => {}}/>)
    const nameInput = getByLabelText('First name') as HTMLInputElement, submitButton = getByText('send');
    nameInput.focus()
    nameInput.value = ''
    nameInput.blur()
    await userEvent.click(submitButton)
    expect(nameInput.checkValidity()).toBeFalsy()
  })

  test('checking name/full name validation for strings full of spaces', async () => {
    userEvent.setup()
    const { getByLabelText, getByText } = render(<Form setFormResult={() => {}}/>)
    const nameInput = getByLabelText('First name') as HTMLInputElement, submitButton = getByText('send');
    nameInput.focus()
    nameInput.value = '                                    '
    nameInput.blur()
    await userEvent.click(submitButton)
    expect(nameInput.checkValidity()).toBeFalsy()
  })

  test('checking name/full name validation for valid strings with empty spaces at the beginning and end', async () => {
    userEvent.setup()
    const { getByLabelText, getByText } = render(<Form setFormResult={() => {}}/>)
    const nameInput = getByLabelText('First name') as HTMLInputElement, submitButton = getByText('send');
    nameInput.focus()
    nameInput.value = '           michael                 '
    nameInput.blur()
    await userEvent.click(submitButton)
    expect(nameInput.checkValidity()).toBeTruthy()
  })
})

function setupEmailValidation (toWrite:string) {
  const { getByLabelText, getByText } = render(<Form setFormResult={() => {}}/>)
    userEvent.setup()
    const mailInput = getByLabelText('Email') as HTMLInputElement, submitButton = getByText('send'), firstnameInput = getByLabelText('First name') as HTMLInputElement, lastnameInput = getByLabelText('Last name') as HTMLInputElement
    firstnameInput.value = 'Michael'
    lastnameInput.value = 'Jordan'
    mailInput.focus()
    mailInput.value = toWrite
    mailInput.blur()
    return { mailInput, submitButton }
}

describe('\n### Testing email input edge cases ###', () => {

  test('Checking email validation with empty strings', async () => {
    const { mailInput, submitButton } = setupEmailValidation('')
    await userEvent.click(submitButton)
    expect(mailInput.checkValidity()).toBeFalsy()
  })

  test('Checking email validation with strings full of spaces', async () => {
    const { mailInput, submitButton } = setupEmailValidation('                            ')
    await userEvent.click(submitButton)
    expect(mailInput.checkValidity()).toBeFalsy()
  })

  test('Checking email validation with strings full of spaces', async () => {
    const { mailInput, submitButton } = setupEmailValidation('       michaeljordan@gmail.com                     ')
    await userEvent.click(submitButton)
    expect(mailInput.checkValidity()).toBeTruthy()
  })
})

function setupTextAreaValidation(toWrite: string) {
  const { getByLabelText, getByText } = render(<Form setFormResult={() => {}}/>)
    userEvent.setup()
    const mailInput = getByLabelText('Email') as HTMLInputElement, submitButton = getByText('send'), firstnameInput = getByLabelText('First name') as HTMLInputElement, lastnameInput = getByLabelText('Last name') as HTMLInputElement
    const textarea = getByLabelText('Message') as HTMLTextAreaElement
    firstnameInput.value = 'Michael'
    lastnameInput.value = 'Jordan'
    mailInput.value = 'michaeljordan@gmail.com'
    textarea.focus()
    textarea.value = toWrite
    textarea.blur()
    return { textarea, submitButton, getByText }
}

describe('\n### Testing message textarea edge cases ###', () => {
  test('Checking message validation with empty strings', async () => {
    const { textarea, submitButton } = setupTextAreaValidation('')
      await userEvent.click(submitButton)
      expect(textarea.checkValidity()).toBeFalsy()
  })

  test('Checking the validation of the message with valid strings with spaces at the beginning and at the end.', async () => {
    const { textarea, submitButton } = setupTextAreaValidation('                   Hola como estas? queria comunicarme para x motivo y comentarte que bla bla bla bla           ')
      await userEvent.click(submitButton)
      expect(textarea.checkValidity()).toBeTruthy()
  })
})