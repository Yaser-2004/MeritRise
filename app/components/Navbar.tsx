"use client";

import * as React from "react";
import Link from "next/link";
import logo from "../assets/MeritRise_without_Tagline_Logo-removebg-preview.png";
import logoBlack from "../assets/logoBlack.webp"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import {
    LayoutDashboard,
    ShoppingCart,
    Users,
    MenuIcon,
    BookOpen,
    MessageCircle,
    Info,
    Phone,
    Compass,
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { MdElectricBolt } from "react-icons/md";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { VariantProps } from "class-variance-authority";
import Image from "next/image";
import { useState } from "react";
import WaitlistModal from "./WaitlistModal";

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
type IconElement = React.ReactElement<{ size: number; className?: string }>;

type BaseButtonProps = {
    text?: string;
    className?: string;
    variant?: ButtonVariant;
    isVisible?: boolean;
};

type ButtonClickProps = BaseButtonProps & {
    onClick?: () => void;
    urlLink?: never;
};

type ButtonUrlProps = BaseButtonProps & {
    onClick?: never;
    urlLink?: string;
};

type ButtonProps = ButtonClickProps | ButtonUrlProps;

interface NavBar2Props<T extends MenuItem> {
    domain?: {
        name?: string | React.ReactNode;
        logo?: React.ReactNode;
    };
    navigationMenu?: T[];
    isSticky?: boolean;
    authLinks?: {
        login?: ButtonProps;
        register?: ButtonProps;
    };
    leftAddon?: React.ReactNode;
    className?: string;
}

export interface MenuItem {
    title: string;
    url: string;
    className?: string;
    subMenu?: SubMenu[];
}

export interface SubMenu {
    title: string;
    description?: string;
    url?: string;
    icon?: React.ReactNode;
    className?: string;
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"li"> {
    customClassName?: string;
    href: string;
    title: string;
    description?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

const mainMenu: MenuItem[] = [
    {
        title: "Products",
        url: "/products",
        subMenu: [
            {
                title: "All Products",
                url: "/products/all",
                description: "Browse our complete catalog.",
                icon: <ShoppingCart />,
            },
            {
                title: "New Arrivals",
                url: "/products/new",
                description: "Discover the latest additions.",
                icon: <Compass />,
            },
            {
                title: "Categories",
                url: "/products/categories",
                description: "Explore by product type.",
                icon: <LayoutDashboard />,
            },
        ],
    },
    {
        title: "About Us",
        url: "/about",
        subMenu: [
            {
                title: "Our Story",
                url: "/about/story",
                description: "Learn about our mission and values.",
                icon: <BookOpen />,
            },
            {
                title: "Team",
                url: "/about/team",
                description: "Meet the people behind our success.",
                icon: <Users />,
            },
        ],
    },
    {
        title: "Support",
        url: "/support",
        subMenu: [
            {
                title: "Help Center",
                url: "/support/help",
                description: "Find answers to common questions.",
                icon: <MessageCircle />,
            },
            {
                title: "Contact Us",
                url: "/support/contact",
                description: "Get in touch with our support team.",
                icon: <Phone />,
            },
            {
                title: "FAQs",
                url: "/support/faq",
                description: "Frequently Asked Questions.",
                icon: <Info />,
            },
        ],
    },
];

export function NavBar2<T extends MenuItem>(navBar2Props: NavBar2Props<T>) {
    const [openType, setOpenType] = useState<"student" | "institution" | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const {
        domain = { name: "Bolt Stack" },
        isSticky = true,
        authLinks,
        leftAddon,
        className = "",
        navigationMenu,
        ...props
    } = navBar2Props;

    const defaultLogo = domain.logo || <MdElectricBolt size={26} />;
    const defaultNavigationMenu = navigationMenu ?? mainMenu;

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const { login = {} } = authLinks || {};
    const { register = {} } = authLinks || {};
    const {
        className: loginClassName = "",
        isVisible: isLoginVisbile = true,
        onClick: onLoginClicked,
        text: loginText = "Login",
        urlLink: urlLoginUrl = "",
        variant: loginVariant = "ghost",
    } = login;

    const {
        className: registerClassName = "hover:bg-black hover:text-white rounded-lg bg-transparent border border-black/50 text-black text-base transition-all duration-300 ease-in-out px-6 h-12",
        isVisible: isRegisterVisible = true,
        onClick: onRegisterClicked,
        text: registerText = "Register",
        urlLink: urlRegisterUrl = "",
        variant: registerVariant = "default",
    } = register;

    const navBarSticklyTailwindCss = `
        mb-12 py-5 flex justify-between items-center transition-all duration-300
        ${isScrolled
            ? "py-2"
            : "py-3"
        }`;

    const RenderMainMenuItem = ({ menuItem }: { menuItem: MenuItem }) => {
        if (menuItem.subMenu && menuItem.subMenu.length > 0) {
            return (
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className={`bg-transparent ${menuItem.className || ""}`}
                    >
                        {menuItem.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="w-[300px]">
                            {menuItem.subMenu.map((subMenuItem) => (
                                <ListItem
                                    key={subMenuItem.title}
                                    title={subMenuItem.title}
                                    description={subMenuItem.description}
                                    icon={subMenuItem.icon}
                                    href={subMenuItem.url || ""}
                                    customClassName={subMenuItem.className}
                                />
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            );
        }

        return (
            <NavigationMenuLink asChild>
                <Link href={menuItem.url} className={menuItem.className || "text-black rounded-full"}>
                    {menuItem.title}
                </Link>
            </NavigationMenuLink>
        );
    };

    const RenderNameAndLogo = ({
        defaultLogo,
    }: {
        defaultLogo: React.ReactNode;
    }) => {
        return (
            <Link href={"/"}>
                <div className="pb-1 flex justify-start md:justify-center md:items-center gap-2 md:mb-[2px]">
                    <Image src={logoBlack} alt="Logo" className="md:h-[40px] h-[25px] object-contain w-fit" />
                </div>
            </Link>
        );
    };

    return (
        <nav
            {...props}
            className={`relative z-50 ${isSticky
                ? navBarSticklyTailwindCss
                : "flex justify-between items-center p-6 px-20"
                } ${className}`}
        >
            <div className="border-b flex justify-between px-4 md:px-[80px] items-center pb-6 w-full">
                <RenderNameAndLogo defaultLogo={defaultLogo} />
                <NavigationMenu viewport={false} className="max-lg:hidden mt-2 ">
                    <NavigationMenuList>
                        {defaultNavigationMenu.map((mainMenuItem) => (
                            <RenderMainMenuItem
                                key={mainMenuItem.title}
                                menuItem={mainMenuItem}
                            />
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <div>
                    <RenderMobileMenu defaultLogo={defaultLogo} />
                    <div className="flex gap-2 items-center">
                        {leftAddon && (
                            <div className="max-lg:hidden flex items-center gap-2">
                                {leftAddon}
                            </div>
                        )}
                        <RenderAuthButton
                            className={registerClassName}
                            isVisible={isRegisterVisible}
                            onClick={() => setOpenType("student")}
                            text={registerText}
                            urlLink={urlRegisterUrl}
                            variant={registerVariant}
                        />
                    </div>
                </div>
            </div>

            {openType && <WaitlistModal
                isOpen={true}
                userType={openType}
                onClose={() => setOpenType(null)}
            />}
        </nav>
    );

    function RenderMobileMenu({ defaultLogo }: { defaultLogo: React.ReactNode }) {
        return (
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant={"outline"} size="icon" className="hidden max-lg:flex relative z-[100] cursor-pointer touch-manipulation">
                        <MenuIcon className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="">
                    <SheetHeader>
                        <SheetTitle className="flex items-center justify-start gap-2">
                            <Image
                                src={logoBlack}
                                alt="Logo"
                                className="h-6 w-auto"
                            />
                        </SheetTitle>
                    </SheetHeader>

                    <div className="mt-20 mx-10">
                        {/*
                            The base <Accordion> component (components/ui/accordion.tsx) hardcodes
                            "rounded-2xl overflow-hidden" — that's what made the whole menu look like
                            a floating card with rounded corners in the screenshot.

                            We override BOTH of those here, directly at the usage site:
                              - rounded-none  → kills the 2xl rounding
                              - !overflow-visible → kills the clipping (the ! forces it past the
                                base component's own class, since Tailwind's `cn()` merge order
                                otherwise lets the component's own "overflow-hidden" win)
                        */}
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full rounded-none !overflow-visible"
                        >
                            {defaultNavigationMenu.map((mainMenuItem) => {
                                if (mainMenuItem.subMenu && mainMenuItem.subMenu.length > 0) {
                                    return (
                                        <AccordionItem
                                            key={mainMenuItem.title}
                                            value={mainMenuItem.title}
                                            /*
                                                Base AccordionItem ships with:
                                                  "not-last:border-b data-open:bg-muted/50"
                                                The border-b IS there, but with no explicit color it
                                                inherits from the theme's --border CSS variable, which
                                                can be very faint/invisible depending on your theme.
                                                We make it explicit and visible here, AND we remove the
                                                "open state" background tint since we want a flat list.
                                            */
                                            className="border-b border-gray-200 data-open:bg-transparent"
                                        >
                                            <AccordionTrigger className="text-left text-lg font-medium px-0 py-6 w-full hover:no-underline">
                                                {mainMenuItem.title}
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-4 px-0">
                                                <div className="space-y-2">
                                                    {mainMenuItem.subMenu.map((subMenuItem) => (
                                                        <Link
                                                            key={subMenuItem.title}
                                                            href={subMenuItem.url || ""}
                                                            className="p-2 flex items-center gap-4 rounded-md hover:bg-accent text-base"
                                                        >
                                                            <div className="text-sm">
                                                                {React.isValidElement(subMenuItem.icon)
                                                                    ? React.cloneElement(
                                                                        subMenuItem.icon as IconElement,
                                                                        {
                                                                            size: 17,
                                                                            className: "text-muted-foreground",
                                                                        },
                                                                    )
                                                                    : subMenuItem.icon}
                                                            </div>
                                                            <div>
                                                                <div className="font-medium">
                                                                    {subMenuItem.title}
                                                                </div>
                                                                {subMenuItem.description && (
                                                                    <div className="text-muted-foreground text-xs mt-1">
                                                                        {subMenuItem.description}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    );
                                }

                                // Simple menu items without submenu also get the same bottom border
                                // so the whole list looks visually consistent, divider after divider.
                                return (
                                    <div key={mainMenuItem.title} className="w-full border-b border-gray-200">
                                        <Link
                                            href={mainMenuItem.url}
                                            className="block py-4 w-full text-lg font-medium hover:text-accent-foreground"
                                        >
                                            {mainMenuItem.title}
                                        </Link>
                                    </div>
                                );
                            })}
                        </Accordion>

                        <div className="mt-20 w-full">
                            <RenderAuthButton
                                className={`${registerClassName} w-full`}
                                isVisible={isRegisterVisible}
                                onClick={() => setOpenType("student")}
                                text={registerText}
                                urlLink={urlRegisterUrl}
                                variant={registerVariant}
                                isInSheet={true}
                            />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        );
    }
}

type RequiredButtonsProps = Required<Omit<ButtonProps, "onClick">> & {
    onClick?: () => void;
    isInSheet?: boolean;
};

function RenderAuthButton({
    className,
    isVisible,
    onClick,
    text,
    urlLink,
    variant,
    isInSheet = false,
}: RequiredButtonsProps) {
    return (
        <>
            {isVisible ? (
                <div
                    className={`flex items-center space-x-4 ${isInSheet ? "hidden max-lg:flex w-full max-lg:gap-3 max-lg:flex-col" : " block max-lg:hidden"}`}
                >
                    {onClick ? (
                        <>
                            <Button
                                onClick={onClick}
                                className={`h-10 ${isInSheet && "w-full"} cursor-pointer select-none ${className}`}
                                variant={variant}
                            >
                                <span>{text}</span>
                            </Button>
                        </>
                    ) : (
                        <Button
                            className={`h-10 ${isInSheet && "w-full mt-5"} cursor-pointer select-none ${className}`}
                            variant={variant}
                            asChild
                        >
                            <a className="no-underline" href={urlLink}>
                                {text}
                            </a>
                        </Button>
                    )}
                </div>
            ) : (
                <div className="max-lg:hidden"></div>
            )}
        </>
    );
}

function ListItem({
    title,
    description,
    icon,
    children,
    href,
    ...props
}: ListItemProps) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className="block   select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none 
          transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                    <div className="flex items-start gap-3">
                        <span className="flex-shrink-0">{icon && <>{icon}</>}</span>
                        <div>
                            <h3 className="leading-none font-medium text-[15px]">{title}</h3>
                            {description && (
                                <p className="mt-1 text-sm text-muted-foreground">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>

                    {children && (
                        <p className="mt-2 text-muted-foreground line-clamp-2 text-sm leading-snug">
                            {children}
                        </p>
                    )}
                </Link>
            </NavigationMenuLink>
        </li>
    );
}