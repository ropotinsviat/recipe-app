interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <p className="text-red-500 text-center mt-4">{message}</p>;
}
