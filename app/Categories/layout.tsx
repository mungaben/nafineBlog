import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NaFine | Categories us page",
  description:
    "Discover the ultimate categories page for politics, entertainment, and business news from around the world. Stay informed, engage with industry experts, and explore opportunities through our comprehensive platform. Connect with us today to access a wealth of information, make valuable connections, and stay ahead in the dynamic landscape of politics, entertainment, and business.Description: Welcome to our contact page, where we provide an extensive resource for politics, entertainment, and business enthusiasts. Our platform connects you with global news, insights, and networking opportunities in these dynamic sectors. Stay updated with the latest political developments, delve into the realm of entertainment, and explore the ever-evolving world of business. Engage with industry professionals, share your thoughts, and foster connections that can shape your future. Contact us now to leverage our platform's vast resources and stay ahead in the ever-changing landscape of politics, entertainment, and business",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <section>
    <div>
{children}
    </div>
   </section>
  );
}
