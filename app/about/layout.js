import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../public/css/style.css";
import "../../public/css/responsive.css";


export const metadata = {
  title: "About Us",
  description: "SKIP BIN HIRE - TASMANIA",
};


export default function AboutLayout({ children }) {
  return (
    <section>
      {children}
    </section>
  );
}