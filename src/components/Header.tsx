"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { AtSign, MoveUpRight } from "lucide-react";

import { ModeToggle } from "./theme/ModeToggle";
import { SlideTabsExample } from "./Tab";

export default function Header() {
  return (
    <header className="w-full py-4 sticky top-0 z-50 container mx-auto px-4">
      <nav className="flex items-center justify-between w-full">
        <div className="md:block hidden">
          <h2>Rikesh Shrestha</h2>
          <span>Software Engineer</span>
        </div>
        <SlideTabsExample />
        <div className="gap-4 md:block hidden">
          <div className="flex gap-4">
          <p className="flex gap-2 items-center">
            Linkdein <MoveUpRight size={12} />
          </p>
          <p className="flex gap-2 items-center">
            Resume <MoveUpRight size={12} />
          </p>
          </div>
        </div>
     <div className="block md:hidden">
     <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <AtSign size={20} />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Linkdein
                <MenubarShortcut>
                  <MoveUpRight size={12} />
                </MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                {" "}
                Resume
                <MenubarShortcut>
                  <MoveUpRight size={12} />
                </MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
     </div>
        <ModeToggle />
      </nav>
    </header>
  );
}
