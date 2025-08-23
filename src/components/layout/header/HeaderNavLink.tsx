import Link from "next/link";
import Text from "@/components/ui/typogrhapy/Text";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  text: string;
  url: string;
}

export default function HeaderNavLink(props: Props) {
  return (
    <Link href={props.url} className="group relative">
      <Text bold>{props.text}</Text>
      <span className="absolute top-[45%] inset-0 bg-contrast rounded-lg opacity-0 blur-md transition-opacity group-hover:opacity-50 h-2 -z-10"></span>
    </Link>
  );
}
