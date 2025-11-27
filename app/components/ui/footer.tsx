export default function Footer() {
  return (
    <footer className="pb-5 pt-10 px-10 flex flex-col md:flex-row justify-between text-muted-foreground">
      <p>{new Date().getFullYear()} Danelec X MAUDE</p>
      <p>Version 0.1.0</p>
    </footer>
  );
}
