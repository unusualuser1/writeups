import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import gfm from "remark-gfm";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { getDirFile, getReadmeContent } from "@/lib/apiUtils";
import { PageWrapper } from "@/components/PageWrapper";
import rehypeRaw from "rehype-raw";
import MDRenderer from "@/components/MDRenderer";
import TopOfPageButton from "@/components/backTopOfPage";

export default async function Boxes({ params }: any) {
  const { difficulty, name } = params || {};
  const response = await getReadmeContent(`HackTheBox/${difficulty}/${name}`);
  //console.log(response)
  return (
    <>
      
      <div className="fixed w-screen h-[40px] flex justify-end 
                      xsm:bottom-10 md:right-[40px]
                      xsm:right-[10px]">
        <TopOfPageButton/>
      </div> 
      <MDRenderer decodedContent={response}/>
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