"use client";

import { useEffect, useState } from "react";

type User = {
  name: string;
};

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser({ name: "Akshay" });
  }, []);

  return user;
}