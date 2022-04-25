export default function StyleLink(prop: any) {
  return (
    <span className={prop.className}>
      {prop.children}
      {prop.text}
    </span>
  );
}
