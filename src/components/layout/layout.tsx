import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/layout/navigation-menu";
import { urls } from "@/utils/urls";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { PropsWithChildren } from "react";

export function Layout({
  children,
  navigation,
  activeRoute,
}: PropsWithChildren & {
  navigation: Array<{
    id: string;
    label: string;
    url: string;
  }>;
  activeRoute: string;
}) {
  return (
    <div className="flex h-screen items-start">
      <header className="bg-slate-700 w-max py-6 h-screen px-6">
        <NavigationMenu orientation="vertical">
          <div className="flex flex-col gap-8">
            <NavigationMenuLink asChild>
              <Link href={urls.home}>
                <h1 className="text-2xl text-white whitespace-nowrap">
                  <span className="inline-block -translate-y-1 ">🚬</span>{" "}
                  Cigarette Explorer
                </h1>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuList>
              {navigation.map((navItem) => (
                <NavigationMenuItem key={navItem.id}>
                  <NavigationMenuLink asChild>
                    <Link href={navItem.url}>
                      <span
                        className={cn(
                          "text-slate-300 font-semibold hover:text-slate-400",
                          activeRoute.includes(navItem.url) &&
                            "text-white hover:text-slate-200 font-bold"
                        )}
                      >
                        {navItem.label}
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </div>
        </NavigationMenu>
      </header>

      <div className="container mx-auto p-8 max-h-screen overflow-auto">
        <div className="flex flex-col gap-6">{children}</div>
      </div>
    </div>
  );
}
