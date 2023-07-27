import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import gfm from "remark-gfm";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { getReadmeData } from "@/lib/apiUtils";
import { PageWrapper } from "@/components/PageWrapper";



export default async function Boxes({ params }: any) {
  const { difficulty, name } = params || {};
  const response = await getReadmeData( difficulty, name);
  const decodedContent = response.content
        ? atob(response.content.toString())
        : "";
  return (
    <>
      <PageWrapper>
        <div className="px-[250px] py-[100px] justify-center">
        <ReactMarkdown
          remarkPlugins={[gfm]}
            children={decodedContent}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    codeTagProps={{ style: { fontSize: "inherit" } }}
                    customStyle={{ fontSize: 18 }}
                    children={String(children).replace(/\n$/, '')}
                    style={atomOneDark}
                    language={match[1]}
                    PreTag="div"
                  />
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                )
              }
            }}
          />
        </div>
      </PageWrapper>
    </>
  );
}


/**
 * const [decodedContent, setDecodedContent] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const response: any = await fetchWriteup( difficulty, name);

      const decodedContent = response.content
        ? atob(response.content.toString())
        : "";
      setDecodedContent(decodedContent);
    }

    fetchData();
  }, [difficulty, name]);

 */

  /**
   * <ReactMarkdown
          remarkPlugins={[gfm]}
          children={decodedContent ?? ""}
          components={{ code: Component }}
        />
   */