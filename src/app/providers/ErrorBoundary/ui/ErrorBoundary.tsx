import React, { Suspense } from "react";

type ErrorBoundaryState = {
  hasError: boolean;
};

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback: React.ReactNode;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <Suspense fallback="">{this.props.fallback}</Suspense>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
