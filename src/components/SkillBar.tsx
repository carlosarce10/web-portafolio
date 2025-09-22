type Props = { name: string; level: number; visible?: boolean };

export default function SkillBar({ name, level, visible }: Props) {
  return (
    <div className="skill-bar">
      <div className="skill-row">
        <span style={{ fontWeight: 700 }}>{name}</span>
        <span style={{ color: 'var(--text-secondary)' }}>{level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}