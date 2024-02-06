interface OptionProps {
  value: string
  text: string
}

export default function Option({ value, text }: OptionProps) {
  return (
    <option className="bg-white text-sm" value={value}>
      {text}
    </option>
  )
}
