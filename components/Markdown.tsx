import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import styled from 'styled-components'

type PropsType = {
  children: string
}

const Copy = styled.div({
  '*': {
    fontFamily: 'text',
    fontSize: 16,
    lineHeight: 1.4,
  },
  li: {
    marginLeft: 12,
    textIndent: -11,
  },
  ol: {
    marginBottom: 32,
  },
  ul: {
    marginBottom: 32,
  },
})

export default function Markdown({ children }: PropsType) {
  return (
    <Copy>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {children}
      </ReactMarkdown>
    </Copy>
  )
}
