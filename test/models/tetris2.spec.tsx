import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Tetris2 } from '../../src/components/Tetris2/Tetris2';

describe('<Tetris2>', () => {
  it('Play → Pause → Resume flow works', async () => {
    const user = userEvent.setup();

    /* 1️⃣  Render con pop-ups habilitados */
    render(<Tetris2 showModals credits={9999} />);

    /* 2️⃣  Click “Play” para iniciar la partida */
    await user.click(screen.getByRole('button', { name: /play/i }));

    /* 3️⃣  Esperamos a que el modal “Start Game” desaparezca (estado PLAYING) */
    await waitFor(() => expect(screen.queryByText(/start game/i)).toBeNull());

    /* 4️⃣  Pausamos con la P mayúscula: keydown + keyup */
    fireEvent.keyDown(document, { key: 'P', code: 'KeyP', keyCode: 80 });
    fireEvent.keyUp(document, { key: 'P', code: 'KeyP', keyCode: 80 });

    /* 5️⃣  Debe aparecer el modal “Paused” con su botón “Resume” */
    const resumeBtn = await screen.findByRole('button', { name: /resume/i });
    expect(resumeBtn).toBeVisible();

    /* 6️⃣  Reanudamos y comprobamos que desaparece el modal */
    await user.click(resumeBtn);
    await waitFor(() => expect(screen.queryByText(/paused/i)).toBeNull());
  });
});
