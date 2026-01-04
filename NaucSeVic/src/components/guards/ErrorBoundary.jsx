import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    console.error("Uncaught error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center bg-gray-50 dark:bg-zinc-950 rounded-2xl border border-gray-200 dark:border-zinc-800 m-4">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Něco se pokazilo
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            Omlouváme se, ale při načítání této části došlo k chybě. Zkuste
            stránku obnovit.
          </p>

          {process.env.NODE_ENV === "development" && this.state.error && (
            <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-lg text-left overflow-auto max-w-2xl w-full max-h-64">
              <p className="font-mono text-sm text-red-700 dark:text-red-400 mb-2">
                {this.state.error.toString()}
              </p>
              <pre className="font-mono text-xs text-red-600 dark:text-red-500/80 whitespace-pre-wrap">
                {this.state.errorInfo?.componentStack}
              </pre>
            </div>
          )}

          <button
            onClick={this.handleReset}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-600/20"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Obnovit stránku
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
