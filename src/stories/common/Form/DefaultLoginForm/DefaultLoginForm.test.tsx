import { render, fireEvent, act } from "@testing-library/react";
import DefaultLoginForm from "./DefaultLoginForm";
import React, { useState } from "react";
import createQueryClient from "@lib/utils/createQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";

jest.mock("next/router", () => require("next-router-mock"));

const TestComponent = () => {
  const [queryClient] = useState(() => createQueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultLoginForm />
    </QueryClientProvider>
  );
};

describe("DefaultLoginForm", () => {
  it("renders without crashing", () => {
    render(<TestComponent />);
  });

  it("submit button should be in the document", () => {
    const { getByText } = render(<TestComponent />);
    const submitButton = getByText("로그인");
    expect(submitButton).toBeInTheDocument();
  });

  it("changes value when input is updated", async () => {
    const { getByPlaceholderText } = render(<TestComponent />);

    const inputEmail = getByPlaceholderText("이메일") as HTMLInputElement;
    const inputPassword = getByPlaceholderText("비밀번호") as HTMLInputElement;

    await act(async () => {
      fireEvent.change(inputEmail, { target: { value: "test@email.com" } });
      fireEvent.change(inputPassword, { target: { value: "password123" } });
    });

    expect(inputEmail.value).toBe("test@email.com");
    expect(inputPassword.value).toBe("password123");
  });

  // TODO: xhr 요청 목킹 처리 해야함
  // it('displays error message when login request fails', async () => {
  //   const errorMessage = /일치하지 않습니다./;
  //   const { getByPlaceholderText, getByText, findByText } = render(
  //     <TestComponent />
  //   );

  //   const inputEmail = getByPlaceholderText('이메일') as HTMLInputElement;
  //   const inputPassword = getByPlaceholderText('비밀번호') as HTMLInputElement;

  //   fireEvent.change(inputEmail, { target: { value: 'test@test.com' } });
  //   fireEvent.change(inputPassword, { target: { value: 'password' } });

  //   fireEvent.click(getByText('로그인'));

  //   const errorMessageElement = await findByText(errorMessage);

  //   expect(errorMessageElement).toBeInTheDocument();
  //   // await waitFor(() => {
  //   //   expect(findByText(errorMessage)).toBeInTheDocument();
  //   // });
  // });
});
