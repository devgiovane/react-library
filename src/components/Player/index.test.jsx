import { default as Player } from '.';
import { cleanup, render, screen } from "@testing-library/react";

describe('Player Component', function () {

    afterEach(cleanup);

    it('should render component', function () {
        render(<Player volume={0} />);
        expect(screen.getByRole(/player/i)).toBeInTheDocument();
    });

});
