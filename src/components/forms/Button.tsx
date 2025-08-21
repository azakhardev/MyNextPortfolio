interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

export default function Button(props: Props) {
  return (
    <button
      className="px-3 py-2 border rounded-md cursor-pointer hover:scale-105 bg-button"
      {...props}
    >
      {props.children}{" "}
    </button>
  );
}
