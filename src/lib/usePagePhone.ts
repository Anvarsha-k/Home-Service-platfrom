"use client";

import { usePathname } from "next/navigation";
import { getPhone } from "@/lib/phone";

/** Phone number for the page currently shown — each service has its own. */
export function usePagePhone() {
  return getPhone(usePathname());
}
