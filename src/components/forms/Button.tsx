interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

export default function Button(props: Props) {
  return (
    <button
      className="px-3 py-2 border rounded-md cursor-pointer hover:scale-105 hover:shadow-hover-primary bg-button hover:bg-button-hover transition-normal active:scale-95"
      {...props}
    >
      {props.children}{" "}
    </button>
  );
}
