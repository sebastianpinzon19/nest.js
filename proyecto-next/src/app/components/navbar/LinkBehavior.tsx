import React, { forwardRef } from 'react';
import Link from 'next/link';

interface LinkBehaviorProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
}

const LinkBehavior = forwardRef<HTMLAnchorElement, LinkBehaviorProps>(
  ({ href, ...rest }, ref) => {
    return (
      <Link href={href} passHref>
        <a ref={ref} {...rest} />
      </Link>
    );
  }
);

export default LinkBehavior;