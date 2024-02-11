import React from 'react'
import { Checkbox } from 'antd'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 10px;
  background: #858584;
  color: #f2f2f2;
  border: 1px solid #656564;
  border-radius: 4px;
  margin: 6px 0;
  display: flex;
`
const TextWrapper = styled.div`
  white-space: normal;
  overflow: scroll;
  overflow-wrap: anywhere;
`

interface TaskProps {
  text: string
  status: string
  id: string
  handleChange: (id: string) => void
}

const Task = ({ text, status, id, handleChange }: TaskProps) => {
  return (
    <Wrapper
      style={{
        textDecoration: status === 'complited' ? 'line-through' : 'none',
      }}
    >
      <div style={{ margin: '0 12px' }}>
        <Checkbox
          checked={status === 'complited'}
          onChange={() => handleChange(id)}
        />
        1234
      </div>
      <TextWrapper>{text}</TextWrapper>
    </Wrapper>
  )
}

export default Task
