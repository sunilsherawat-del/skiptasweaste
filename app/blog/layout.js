import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


export const metadata = {
  title: "Blog",
  description: "SKIP BIN HIRE - TASMANIA",
};


export default function AboutLayout({ children }) {
  return (
    <section>
      {children}
    </section>
  );
}