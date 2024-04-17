import './HelpBox.css';

function HelpBox({ title, text } : {
  title: string;
  text: string;
}) {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

export default HelpBox;
