import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

interface MenuItemProps {
  title: string;
  icon: string;
  href: string;
  active?: boolean;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, href = "/", active } = props;
  const className = cx({
    item: true,
    "mb-30": true,
    active,
  });

  return (
    <div className={className}>
      <Image
        src={`/icon/${icon}.svg`}
        width={25}
        height={25}
        className="icon me-3"
        alt="overview"
      />
      <p className="item-title m-0">
        <Link href={href} className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
}
