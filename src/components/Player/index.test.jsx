import { default as Player } from '.';
import { cleanup, render, screen } from "@testing-library/react";

afterEach(cleanup);

describe('Player Component', function () {

    it('should render component', function () {
        render(<Player volume={0} />);
        expect(screen.getByRole(/player/i)).toBeInTheDocument();
    });

});
