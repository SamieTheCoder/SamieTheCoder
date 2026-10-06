import { htmlJoin as join } from "@/lib/svg";
import { html, styles } from "@/components/Readme";

export default function Home() {
    return (
        <main style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
                style={{ width: "100%", display: "flex", justifyContent: "center" }}
                dangerouslySetInnerHTML={{ __html: join(styles, html) }}
            />
            <p className="sr-only">
                Md Samie Sohrab is a Maker, Builder and Founder from India,
                serving as Managing Director at TRACKYVERSE TECHNOLOGIES PRIVATE
                LIMITED. Full-stack developer working with React Native,
                Node.js, TypeScript and Supabase. Builder of Trackyfy, Talkezy
                and KeyzForge. View portfolio, products and contact links on
                this page.
            </p>
        </main>
    );
}