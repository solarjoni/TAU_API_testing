import React from "react";
import { render } from "@testing-library/react";
import Users from "./components/users.component";
// import { findByText } from "@testing-library/dom";
import nock from "nock";

beforeEach(() => {
    nock('http://localhost:4000')
    .get('/users')
    .reply(200, {
        "users": [
            {
                "_id": "1",
                "name": "axios",
                "email": "mock@nock.com"
            }
        ]
    }, {'Access-Control-Allow-Origin': '*'})
});

it('renders list of users', async () => {
    const { findByText } = render(<Users />);
    const listElement = await findByText(/axios/i);
    expect(listElement).toBeInTheDocument();
})