import Image from 'next/image';
import { Container } from 'react-bootstrap';

export default function LeadingPicture({ src, alt }) {
  return (
    <Container fluid className="headerPic">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />
    </Container>
  );
}
