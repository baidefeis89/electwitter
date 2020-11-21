import React, { Component, ErrorInfo } from 'react';
import ILiterals from '../../i18n';

interface IState {
  hasError: boolean;
  error: null | Error;
  info: null | ErrorInfo;
}

interface IErrorBoundary {
  children: any;
  literals: ILiterals,
}

class ErrorBoundary extends Component<IErrorBoundary, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({
      hasError: true,
      error,
      info,
    });
  }

  render() {
    if (this.state.hasError) {
      return <div>{this.props.literals.ERROR_LBL}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
