import React, { ChangeEvent } from 'react'
import { Form, Label, Input, Button } from './styles'
import { Copy } from '../Text'

interface FormProps {
  handleSubmit: () => void;
  handleRange: (e:ChangeEvent<HTMLInputElement>) => void;
  paragraphs: number;
}

export default ({ handleSubmit, handleRange, paragraphs }:FormProps) => {

  const handleSubmitClick = (e:ChangeEvent<HTMLInputElement | EventTarget>) => {
    e.preventDefault()
    handleSubmit()
  }
  return (
    <Form>
      <Label htmlFor="paragraphs"><Copy>{paragraphs}</Copy><span>paragraphs</span></Label>
      <Input type="range" id="paragraphs" onChange={(e) => handleRange(e)} name="paragraphs" min="1" max="10" value={paragraphs} />
      <Button onClick={(e) => handleSubmitClick(e)}>Generate Lorem</Button>
    </Form>
  )
}
