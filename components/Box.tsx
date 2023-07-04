import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react';
import { Cinzel_Decorative } from 'next/font/google';

 const Component = ({children, className} : any) => {
  const lang: string = className && className.substring(9);

  return ( 
    <div>
      <SyntaxHighlighter language={lang} style={ oneDark } showLineNumbers={true}
      codeTagProps={{ style: { fontSize: "inherit" } }}
      customStyle={{ fontSize: 18 }}>
        {children}
      </SyntaxHighlighter>
    </div>
    
  );
};
export default Component;