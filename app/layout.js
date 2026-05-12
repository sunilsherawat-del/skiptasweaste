import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import "../public/style.css"

export const metadata = {
  title: "Skip Bin Taswaste",
  description: "SKIP BIN HIRE - TASMANIA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
