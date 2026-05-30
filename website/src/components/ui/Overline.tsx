interface Props {
  code: string;
  label: string;
}

export default function Overline({ code, label }: Props) {
  return (
    <div className="hud-overline">
      <span className="hud-tick" />
      <span className="hud-code">{code}</span>
      <span>// {label}</span>
    </div>
  );
}
