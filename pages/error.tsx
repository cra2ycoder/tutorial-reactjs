import React from "react";
import { ErrorBoundry, ErrorComponent } from "../code/errors/ErrorBoundry";

export default function Error() {
  return (
    <ErrorBoundry>
      <ErrorComponent />
    </ErrorBoundry>
  );
}
