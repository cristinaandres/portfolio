import Image from 'next/image';
import type { RenderImageProps, RenderImageContext } from 'react-photo-album';

export default function NextJsImage(
  { alt, title, sizes, className, onClick }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div style={{ width, height, position: 'relative' }}>
      <Image
        fill
        src={photo}
        alt={alt ?? ''}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
        {...{ title, sizes, className, onClick }}
      />
    </div>
  );
}
