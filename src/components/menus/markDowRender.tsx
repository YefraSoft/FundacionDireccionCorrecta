import ReactMarkdown from "react-markdown"; // Importamos la librería de react-markdown
// import remarkGfm from 'remark-gfm'; // Importamos remark-gfm para la sintaxis de GitHub Flavored Markdown (GFM)
import { useState } from "react";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const [markdown, setMarkdown] = useState(content);

  return (
    <div
      className={`bg-patina-50 prose prose-h1:text-4xl prose-h1:text-green prose-p:text-base 
        prose-strong:text-blue prose-ul:list-decimal prose-ul:text-dark p-4 rounded-3xl
        `}
    >
      <ReactMarkdown
        children={markdown}
      />
    </div>
  );
};

export default MarkdownRenderer;
