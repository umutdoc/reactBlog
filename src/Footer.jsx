import "bootstrap/dist/css/bootstrap.min.css";
export default function Footer() {
  return (
    <footer className="text-center">
      <span className="text-center">made with </span>
      <a href="https://react.dev/">React</a>{" "}
      <a href="https://react-bootstrap.github.io/">React-Bootstrap</a> &{" "}
      <a href="https://getbootstrap.com/">Bootstrap</a>
    </footer>
  );
}
