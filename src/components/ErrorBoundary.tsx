import React from 'react';

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown): void {
    console.error('🧨 ErrorBoundary caught an error:', error, info);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div
          style={{
            color: '#fff',
            background: '#2a1e3a',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'center',
            maxWidth: '480px',
            margin: '2rem auto'
          }}
        >
          <h2>Something went wrong in the Tetris engine.</h2>
          <p>Try reloading or restarting the game.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
