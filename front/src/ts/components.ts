import React from 'react';

export class ErrorBoundary extends React.Component {
  componentDidCatch(error, info){
    if(!error.ignoreBugsnag){
      console.log("ErrorBoundary: ", error, info);
    }
  }
  state = {
    error: null as any
  }
  static getDerivedStateFromError(er){
    return {
      error: er
    }
  }
  render(){
    if(this.state.error){
      return "Something Went Wrong";
    }
    return this.props.children;
  }
}