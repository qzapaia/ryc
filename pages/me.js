import dynamic from 'next/dynamic';

const Me = dynamic(import('../containers/me'), {
  ssr: false
});

export default Me;