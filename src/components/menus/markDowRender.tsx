import ReactMarkdown from "react-markdown";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div
      className={`bg-patina-50 prose prose-h1:text-4xl prose-h1:text-green prose-p:text-base 
        prose-strong:text-blue prose-ul:list-decimal prose-ul:text-dark p-4 rounded-3xl
        `}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
