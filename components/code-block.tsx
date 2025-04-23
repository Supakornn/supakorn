"use client";

import React from "react";
import { Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language: string;
  fileName?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language, fileName, showLineNumbers = true }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split("\n");

  return (
    <div className="group relative my-6 rounded-lg overflow-hidden">
      {fileName && (
        <div className="absolute top-0 left-0 bg-gray-800 text-gray-300 text-xs px-3 py-1.5 font-mono rounded-br">
          {fileName}
        </div>
      )}
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 rounded-md bg-gray-800/50 hover:bg-gray-700/70 text-gray-300 hover:text-white transition-colors z-10"
        aria-label="Copy code to clipboard"
      >
        {copied ? "Copied!" : <Copy className="h-4 w-4" />}
      </button>

      <div className="pt-8">
        <pre className="rounded-lg bg-gray-900 p-4 overflow-x-auto text-sm text-gray-200">
          <code>
            {showLineNumbers ? (
              <table className="border-collapse w-full">
                <tbody>
                  {lines.map((line, i) => (
                    <tr key={i} className="hover:bg-gray-800/50">
                      {showLineNumbers && (
                        <td className="text-right pr-4 select-none text-gray-500 text-xs w-8 py-0.5">
                          {i + 1}
                        </td>
                      )}
                      <td className="w-full">
                        <span className="whitespace-pre">{line}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="whitespace-pre">{code}</div>
            )}
          </code>
        </pre>
      </div>

      <div className="absolute top-0 right-0 bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-bl-lg font-mono uppercase">
        {language}
      </div>
    </div>
  );
}
