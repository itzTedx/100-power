import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/logo.webp"
      alt="100 Power Logo"
      height={58}
      width={108}
      priority
      loading="eager"
    />
  );
};
