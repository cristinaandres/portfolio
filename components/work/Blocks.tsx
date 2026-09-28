import type { Block } from '@/content';

/** Her text, block by block: paragraphs, lists and quotes. */
export default function Blocks({ blocks }: { blocks: readonly Block[] }) {
  return blocks.map((block, i) => {
    if (typeof block === 'string') return <p key={i}>{block}</p>;
    if ('list' in block)
      return (
        <ul key={i} className="list-disc pl-6">
          {block.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    return (
      <blockquote key={i} className="border-l-2 pl-4 italic">
        {block.quote}
      </blockquote>
    );
  });
}
