export const shared_styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900');
    @import url('https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800');

    *{
        font-family: 'Rethink Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --background: 0 0% 100%;
        --foreground: 240 10% 3.9%;
        --card: 0 0% 100%;
        --card-foreground: 240 10% 3.9%;
        --popover: 0 0% 100%;
        --popover-foreground: 240 10% 3.9%;
        --primary: 240 5.9% 10%;
        --primary-foreground: 0 0% 98%;
        --secondary: 240 4.8% 95.9%;
        --secondary-foreground: 240 5.9% 10%;
        --muted: 240 4.8% 95.9%;
        --muted-foreground: 240 3.8% 46.1%;
        --accent: 240 4.8% 95.9%;
        --accent-foreground: 240 5.9% 10%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 0 0% 98%;
        --border: 240 5.9% 90%;
        --input: 240 5.9% 90%;
        --ring: 240 5.9% 10%;
        --radius: 0.75rem;

        .text-xs{ font-size: 0.75rem; line-height: 1rem; }
        .text-sm{ font-size: 0.875rem; line-height: 1.25rem; }
        .text-base{ font-size: 1rem; line-height: 1.5rem; }
        .text-lg{ font-size: 1.125rem; line-height: 1.75rem; }
        .text-xl{ font-size: 1.25rem; line-height: 1.75rem; }
        .text-2xl{ font-size: 1.5rem; line-height: 2rem; }
        .text-3xl{ font-size: 1.875rem; line-height: 2.25rem; }
        .text-4xl{ font-size: 2.25rem; line-height: 2.5rem; }
        .text-5xl{ font-size: 3rem; line-height: 1; }
        .text-6xl{ font-size: 3.75rem; line-height: 1; }
        .text-7xl{ font-size: 4.5rem; line-height: 1; }
        .text-8xl{ font-size: 6rem; line-height: 1; }
        .text-9xl{ font-size: 8rem; line-height: 1; }
        .font-thin{ font-weight: 100; }
        .font-extralight{ font-weight: 200; }
        .font-light{ font-weight: 300; }
        .font-normal{ font-weight: 400; }
        .font-medium{ font-weight: 500; }
        .font-semibold{ font-weight: 600; }
        .font-bold{ font-weight: 700; }
        .font-extrabold{ font-weight: 800; }
        .font-black{ font-weight: 900; }
        .tracking-tighter{ letter-spacing: -0.05em; }
        .tracking-tight{ letter-spacing: -0.025em; }
    }
`;