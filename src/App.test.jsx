import App from './App';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Wave 03: clicking like button and rendering App', () => {
  test('that the correct number of likes is printed at the top', () => {
    // Arrange
    const { container } = render(<App />);
    let buttons = container.querySelectorAll('button');

    // Act
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[10]);

    // Assert
    const likeCountText = screen.getByText(/3 ❤️s/);
    expect(likeCountText).not.toBeNull();
  });

  test('liking then unliking messages correctly decreases the count of likes', () => {
    // Arrange
    const { container } = render(<App />);
    let buttons = container.querySelectorAll('button');

    // Act
    // Activate 3 likes
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[10]);

    // Deactivate 2 likes
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);

    // Assert
    const likeCountText = screen.getByText(/1 ❤️s/);
    expect(likeCountText).not.toBeNull();
  });

  test('clicking button toggles heart and does not affect other buttons', async () => {
    // Arrange
    render(<App />);
    const buttons = await screen.findAllByRole('button');
    const firstButton = buttons[0];
    const lastButton = buttons[buttons.length - 1];

    // Act-Assert

    // click the first button
    fireEvent.click(firstButton);
    expect(firstButton.innerHTML).toEqual('❤️');

    // check that all other buttons haven't changed
    for (let i = 1; i < buttons.length; i++) {
      expect(buttons[i].innerHTML).toEqual('🤍');
    }

    // click the first button a few more times
    fireEvent.click(firstButton);
    expect(firstButton.innerHTML).toEqual('🤍');
    fireEvent.click(firstButton);
    expect(firstButton.innerHTML).toEqual('❤️');
    fireEvent.click(firstButton);
    expect(firstButton.innerHTML).toEqual('🤍');

    // click the last button a couple times
    fireEvent.click(lastButton);
    expect(lastButton.innerHTML).toEqual('❤️');
    fireEvent.click(lastButton);
    expect(lastButton.innerHTML).toEqual('🤍');
  });
});
