import { shared_styles } from "@/lib/shared";
import { svg } from "@/lib/svg";

export const styles = `
    ${shared_styles}

    .container {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        background-color: hsl(var(--background));
        padding: 24pt 68pt;
        justify-content: space-between;
        border-radius: var(--radius);
        gap: 40pt;
        max-width: 65rem;
    }

    header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logolinks {
        display: flex;
        align-items: center;
        gap: 28pt;
    }

    .logo-img {
        width: 32pt;
        height: 32pt;
        object-fit: contain;
    }

    nav {
        display: flex;
        align-items: center;
    }

    .navlinks {
        list-style: none;
        display: flex;
        gap: 28pt;
    }

    .navlinks > li > a {
        text-decoration: none;
        color: hsl(var(--foreground));
    }

    .navlinks > li:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    .readmemd {
        font-size: 0.875rem;
        color: hsl(var(--muted-foreground));
    }

    .hero {
        display: flex;
        flex-direction: column;
        gap: 22pt;
    }

    .presentation {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
    }

    .presentation > .wrapper {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .samiename {
        font-size: 32pt;
    }

    .role > span {
        font-weight: 600;
        color: hsl(var(--background));
        background-color: hsl(var(--foreground));
        padding: 2pt 8pt;
        border-radius: 4pt;
    }

    .location {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 1rem;
        color: hsl(var(--muted-foreground));
    }

    .avatarsquare {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: var(--radius);
        height: 83pt;
        width: 83pt;
    }

    .avatarsquare > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .presentation > .buttons {
        display: flex;
        gap: 10pt;
    }

    .buttons {
        display: flex;
        gap: 10pt;
        margin-top: 16pt;
    }

    .cta-button {
        padding: 8pt 16pt;
        background-color: hsl(var(--foreground));
        color: hsl(var(--background));
        font-size: 12pt;
        border: 2px solid hsl(var(--foreground));
        border-radius: 5pt;
        text-decoration: none;
        display: inline-block;
    }

    .cta-button:hover {
        background-color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
        border-color: rgba(0, 0, 0, 0.8);
    }

    .cta-secondary {
        padding: 8pt 16pt;
        background-color: hsl(var(--background));
        color: hsl(var(--foreground));
        font-size: 12pt;
        border: 2px solid hsl(var(--foreground));
        border-radius: 5pt;
        text-decoration: none;
        display: inline-block;
    }

    .cta-secondary:hover {
        cursor: pointer;
        background-color: hsl(var(--secondary));
    }

    .divider {
        width: 100%;
        height: 1px;
        background-color: hsl(var(--foreground));
    }

    .links {
        display: flex;
        gap: 12pt;
        align-items: center;
    }

    .link-icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .link-icon a {
        color: hsl(var(--foreground));
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 768px) {
        .container {
            padding: 24pt 24pt;
        }

        .samiename {
            font-size: 20pt;
        }

        .mediumtext {
            font-size: 1.125rem !important;
            line-height: 1.75rem !important;
        }

        .avatarsquare {
            height: 60pt;
            width: 60pt;
        }

        .cta-button, .cta-secondary {
            font-size: 10pt;
            padding: 6pt 12pt;
        }

        .location {
            font-size: 0.875rem;
        }

        .navlinks {
            gap: 16pt;
        }
    }
`;

export const html = `
    <div class='container'>
        <header>
            <div class='logolinks'>
                <img class='logo-img' src='/favicon.png' alt='Samie Logo' />
                <nav class='text-sm font-medium' aria-label='Main navigation'>
                    <ul class='navlinks'>
                        <li><a href='https://readme.samsite.in.net' target='_blank' rel='noopener noreferrer'>Home</a></li>
                        <li><a href='https://www.linkedin.com/in/md-samie-sohrab' target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
                        <li><a href='mailto:samie@trackyfy.in.net'>Contact</a></li>
                    </ul>
                </nav>
            </div>
            <span class='text-sm readmemd'>readme.md</span>
        </header>
        <section class='hero' aria-labelledby='samie-heading'>
            <div class='presentation'>
                <div class='wrapper'>
                    <span class='text-xl tracking-tight mediumtext'>Hi! I'm</span>
                    <h1 id='samie-heading' class='samiename font-semibold tracking-tighter'>Md Samie Sohrab</h1>
                    <h2 class='role text-2xl font-normal tracking-tight mediumtext'>
                        a <span>Builder. Maker. Founder.</span>
                    </h2>
                    <span class='location'>
                        <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' aria-hidden='true'>
                            <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                            <circle cx='12' cy='10' r='3'></circle>
                        </svg>
                        India
                    </span>
                </div>
                <div class='avatarsquare'>
                    <img src='/favicon.png' alt='Md Samie Sohrab avatar' />
                </div>
            </div>
            <div class='buttons'>
                <a href='https://samsite.in.net' target='_blank' rel='noopener noreferrer'>
                    <span class='cta-button tracking-tight'>View Portfolio</span>
                </a>
                <a href='mailto:samie@trackyfy.in.net'>
                    <span class='cta-secondary tracking-tight'>Contact me</span>
                </a>
            </div>
        </section>
        <div class='divider' aria-hidden='true'></div>
        <nav class='links' aria-label='Social links'>
            <div class='link-icon'>
                <a href='https://www.instagram.com/scientific_samie/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                    <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' aria-hidden='true'>
                        <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
                        <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                        <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
                    </svg>
                </a>
            </div>
            <div class='link-icon'>
                <a href='https://www.linkedin.com/in/md-samie-sohrab' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                    <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' aria-hidden='true'>
                        <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                        <rect x='2' y='9' width='4' height='12'></rect>
                        <circle cx='4' cy='4' r='2'></circle>
                    </svg>
                </a>
            </div>
            <div class='link-icon'>
                <a href='https://samsite.in.net' target='_blank' rel='noopener noreferrer' aria-label='Portfolio'>
                    <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' aria-hidden='true'>
                        <circle cx='12' cy='12' r='10'></circle>
                        <line x1='2' y1='12' x2='22' y2='12'></line>
                        <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'></path>
                    </svg>
                </a>
            </div>
            <div class='link-icon'>
                <a href='mailto:samie@trackyfy.in.net' aria-label='Email'>
                    <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' aria-hidden='true'>
                        <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                        <polyline points='22,6 12,13 2,6'></polyline>
                    </svg>
                </a>
            </div>
        </nav>
    </div>
`;

export const Readme = () => {
    return svg(styles, html, { height: "520" });
};