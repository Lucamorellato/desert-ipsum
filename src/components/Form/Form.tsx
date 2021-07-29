import React, { ChangeEvent } from 'react'
import { Form, Label, Input } from './styles'
import { Copy } from '../Text'

interface FormProps {
  handleSubmit: (e:ChangeEvent<HTMLInputElement>) => void;
  handleRange: (e:ChangeEvent<HTMLInputElement>) => void;
  paragraphs: number;
}

export default ({ handleSubmit, handleRange, paragraphs }:FormProps) => {

  const handleSubmitClick = (e:ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    handleSubmit()
  }
  return (
    <Form>
      <Label htmlFor="paragraphs"><Copy>{paragraphs}</Copy><span>paragraphs</span></Label>
      <Input type="range" id="paragraphs" onChange={(e) => handleRange(e)} name="paragraphs" min="1" max="10" value={paragraphs} />
      <button onClick={(e) => handleSubmitClick(e)}>Generate Lorem</button>
    </Form>
  )
}
