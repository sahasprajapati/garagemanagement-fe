interface SwitchProps {
  checked: boolean;
  onChecked: () => void;
  className?: string;
  label: string;
}
export default function Switch({ label, className, checked, onChecked }: SwitchProps) {
  return (

    <div className={"switch form-switch-custom switch-inline form-switch-primary " + className}>
      <input
        className="switch-input"
        type="checkbox"
        role="switch"
        id="showPublicly"
        checked={checked}
        onClick={onChecked}
      />
      <label className="switch-label m-2" htmlFor="showPublicly">
        {label}
      </label>
    </div>
  );
}
