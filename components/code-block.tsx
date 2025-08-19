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
        <div
          className="absolute left-0 top-0 rounded-br px-3 py-1.5 font-mono text-xs"
          style={{ backgroundColor: '#313244', color: '#a6adc8' }}
        >
          {fileName}
        </div>
      )}
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 z-10 rounded-md p-2 transition-colors"
        style={{ backgroundColor: 'rgba(49, 50, 68, 0.5)', color: '#a6adc8' }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = 'rgba(49, 50, 68, 0.8)';
          e.currentTarget.style.color = '#cdd6f4';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'rgba(49, 50, 68, 0.5)';
          e.currentTarget.style.color = '#a6adc8';
        }}
        aria-label="Copy code to clipboard"
      >
        {copied ? 'Copied!' : <Copy className="h-4 w-4" />}
      </button>

      <div className="pt-8">
        <pre
          className="overflow-x-auto rounded-lg p-4 text-sm"
          style={{ backgroundColor: '#1e1e2e', color: '#cdd6f4' }}
        >
          <code>
            {showLineNumbers ? (
              <table className="w-full border-collapse">
                <tbody>
                  {lines.map((line, i) => (
                    <tr
                      key={i}
                      className="hover:bg-opacity-50"
                      style={{ '--tw-bg-opacity': '0.5' } as React.CSSProperties}
                      onMouseEnter={e =>
                        (e.currentTarget.style.backgroundColor = 'rgba(88, 91, 112, 0.3)')
                      }
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      {showLineNumbers && (
                        <td
                          className="w-8 select-none py-0.5 pr-4 text-right text-xs"
                          style={{ color: '#6c7086' }}
                        >
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

      <div
        className="absolute right-0 top-0 rounded-bl-lg px-2 py-1 font-mono text-xs uppercase"
        style={{ backgroundColor: '#313244', color: '#a6adc8' }}
      >
        {language}
      </div>
    </div>
  );
}
