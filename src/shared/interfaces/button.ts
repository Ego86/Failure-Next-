
type TypeVariant = "text" | "containd" | "outline"

export interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isActive?: boolean,
  status?: string;
  variant: TypeVariant,
}
