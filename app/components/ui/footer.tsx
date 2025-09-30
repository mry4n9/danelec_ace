export default function Footer() {
  return (
    <footer className="pb-10 pl-10 pr-10 flex flex-col md:flex-row justify-between text-muted-foreground">
      <p>{new Date().getFullYear()} Danelec X MAUDE</p>
      <p>Version 0.0.3</p>
    </footer>
  );
}
