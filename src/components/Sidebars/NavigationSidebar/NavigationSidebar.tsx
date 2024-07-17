import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../Logo";
import { links } from "./constants";

export const NavigationSidebar: FC = () => {
    return (
        <aside className="w-[306px] min-h-screen pt-12 pb-16 flex flex-col justify-between items-start">
            <div>
                <Logo />

                <nav className="mt-16">
                    <ul className="flex flex-col justify-between items-start gap-10">
                        {links.map((link) => (
                            <NavLink
                                to={link.path}
                                key={link.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-5 ${isActive ? "text-primary" : "text-black dark:text-white"}`
                                }
                            >
                                {link.icon}

                                <span className="text-inherit">{link.label}</span>
                            </NavLink>
                        ))}
                    </ul>
                </nav>
            </div>

            <span>© All Rights Reserved</span>
        </aside>
    );
};
