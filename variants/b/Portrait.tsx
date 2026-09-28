import Image from 'next/image';

/** Her self-portrait line drawing, the guide of the room. Decorative unless given alt text. */
export default function Portrait({ size = 56, alt = '' }: { size?: number; alt?: string }) {
  return (
    <Image
      src="/images/logo_no_text.svg"
      width={size}
      height={size}
      alt={alt}
      className="shrink-0 rounded-full bg-[#FBF3EA] p-1"
      style={{ width: size, height: size }}
    />
  );
}
