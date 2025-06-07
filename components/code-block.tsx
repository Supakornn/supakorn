'use client';

import React from 'react';
import { Copy } from 'lucide-react';

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

  const lines = code.trim().split('\n');

  return (
    <div className="group relative my-6 overflow-hidden rounded-lg">
      {fileName && (
        <div className="absolute left-0 top-0 rounded-br bg-gray-800 px-3 py-1.5 font-mono text-xs text-gray-300">
          {fileName}
        </div>
      )}
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 z-10 rounded-md bg-gray-800/50 p-2 text-gray-300 transition-colors hover:bg-gray-700/70 hover:text-white"
        aria-label="Copy code to clipboard"
      >
        {copied ? 'Copied!' : <Copy className="h-4 w-4" />}
      </button>

      <div className="pt-8">
        <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-200">
          <code>
            {showLineNumbers ? (
              <table className="w-full border-collapse">
                <tbody>
                  {lines.map((line, i) => (
                    <tr key={i} className="hover:bg-gray-800/50">
                      {showLineNumbers && (
                        <td className="w-8 select-none py-0.5 pr-4 text-right text-xs text-gray-500">
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

      <div className="absolute right-0 top-0 rounded-bl-lg bg-gray-800 px-2 py-1 font-mono text-xs uppercase text-gray-300">
        {language}
      </div>
    </div>
  );
}
