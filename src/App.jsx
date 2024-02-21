import { useState, useEffect } from 'react'

import ReactMarkdown from 'react-markdown'


function App() {


  useEffect(() => {
    setMarkdown(defaultMarkdown)
  }, [])


const defaultMarkdown = `
# Header 1

## Sub Header 2

[Link](https://www.example.com)

Inline code: \`console.log('Hello, World!');\`

Code block:
\`\`\`javascript
function sum(a, b) {
  return a + b;
}
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote: Lorem ipsum dolor sit amet, consectetur adipiscing elit.

![Image](https://www.example.com/image.jpg)

**Bolded text**
`;



const [markdown, setMarkdown] = useState(defaultMarkdown)


  return (
    <section className='flex flex-col justify-center items-center h-screen w-screen bg-slate-500'>
      <h1 className='text-center font-bold text-3xl'>Markdown Preview</h1>
      <section className='flex flex-col gap-5'>
        
      <textarea name="markdownEditor" value={markdown} onChange={(e)=> setMarkdown(e.target.value)} id="editor" cols="30" rows="10"></textarea>

        <h2 className='text-center font-bold text-2xl'>Result</h2>
        <div id='preview' className="p-10 border-2 border-black rounded">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </section>
    </section>
  )
}

export default App
