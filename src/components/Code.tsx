import { useTheme } from "@nextui-org/react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { FC } from "react";

interface CodeProps {
  code: string;
}

const CodeBlock: FC<CodeProps> = ({ code }) => {
  const { isDark } = useTheme();
  return (
    <div
      style={{
        maxWidth: "800px",
      }}
    >
      <style>
        {`
      .w-tc-editor-text {
        position: unset !important;
        display: none !important;
      }
      textarea{
        display: none;
      }
      code {
        background: transparent;
      }
    `}
      </style>
      <CodeEditor
        disabled
        value={code}
        language="tsx"
        placeholder="Please enter JS code."
        padding={20}
        style={{
          fontSize: "12px !important",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          background: isDark ? "#1e1e1e" : "#f5f5f5",
        }}
      />
    </div>
  );
};

export default CodeBlock;
