import Link from "next/link";

interface FooterSectionProps {
  title: string;
  items: {
    text: string;
    href: string;
  }[];
}

export default function FooterSection(props: FooterSectionProps) {
  const { title, items } = props;

  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {items.map((item) => {
          return (
            <li className="mb-6" key={item.text}>
              <Link
                href={item.href}
                className="text-lg color-palette-1 text-decoration-none"
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
