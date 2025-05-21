import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import { Tetris2 } from '../../src/components/tetris2/Tetris2';

describe('<Tetris2>', () => {
  it('Play → Pause → Resume flow works', async () => {
    const user = userEvent.setup();

    render(<Tetris2 showModals credits={9999} />);

    await user.click(screen.getByRole('button', { name: /play/i }));

    await waitFor(() => expect(screen.queryByText(/start game/i)).toBeNull());

    fireEvent.keyDown(document, { key: 'P', code: 'KeyP', keyCode: 80 });
    fireEvent.keyUp(document, { key: 'P', code: 'KeyP', keyCode: 80 });

    const resumeBtn = await screen.findByRole('button', { name: /resume/i });
    expect(resumeBtn).toBeVisible();

    await user.click(resumeBtn);
    await waitFor(() => expect(screen.queryByText(/paused/i)).toBeNull());
  });
});
