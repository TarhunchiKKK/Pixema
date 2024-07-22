import { FC } from "react";
import { links } from "./constants";
import { NavLink } from "react-router-dom";

export const NavigationList: FC = () => {
    return (
        <nav>
            <ul className="flex flex-col justify-between items-start gap-10">
                {links.map((link) => (
                    <NavLink
                        to={link.path}
                        key={link.path}
                        className={({ isActive }) =>
                            `flex items-center gap-5 ${isActive ? "text-primary" : "text-secondary dark:text-white"}`
                        }
                    >
                        {link.icon}

                        <span className="text-inherit">{link.label}</span>
                    </NavLink>
                ))}
            </ul>
        </nav>
    );
};
