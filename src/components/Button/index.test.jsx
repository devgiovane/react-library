import { default as Button } from '.';
import { cleanup, render, screen } from "@testing-library/react";

describe('Button Component', function () {

    afterEach(cleanup);

    it('should render component', function () {
        render(<Button />);
        expect(screen.getByRole(/button/i)).toBeInTheDocument();
    });

});
