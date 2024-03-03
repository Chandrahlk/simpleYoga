import React from "react";
import { RocketIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Reviews({ name, place, content }) {
  return (
    <Alert className="hover:bg-primary-foreground">
      <RocketIcon className="h-4 w-4" />
      <AlertTitle className="text-primary">
        {name} - {place}
      </AlertTitle>
      <AlertDescription className="pt-2">{content}</AlertDescription>
    </Alert>
  );
}
