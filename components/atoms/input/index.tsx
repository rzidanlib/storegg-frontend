export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...nativeProps }: InputProps) {
  return (
    <>
      <label
        htmlFor={nativeProps.id || "name"}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id={nativeProps.id || "name"}
        name={nativeProps.name || "name"}
        aria-describedby={nativeProps.id || "name"}
        placeholder="Enter your name"
        {...nativeProps}
      />
    </>
  );
}
